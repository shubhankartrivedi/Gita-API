import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sendMessage from '@/utils/sendWebhook';
import getCountryNameFromCode from '@/utils/getCountry';
import getEmojiFromCountryCode from '@/utils/getCountryEmoji';
export const runtime = 'nodejs' // 'nodejs' (default) | 'edge'
export async function GET(request, { params }) {
    const { slug } = params;

    const countryCode = request.geo.country;
    const countryName = await getCountryNameFromCode(countryCode);
    const countryEmoji = await getEmojiFromCountryCode(countryCode);


    

    const isChapter = slug[0] === 'chapter';
    const chapter = slug[1] || null;

    const isVerse = slug[2] === 'verse';
    const verse = slug[3] || null;
    await sendMessage(`API Req from ${countryName} - ${countryEmoji}\n \`\`\` Chapter: ${chapter} \nVerse: ${verse} \`\`\``, "https://discord.com/api/webhooks/1155930312581333022/Eu2vRC--QS6khF7VpNEnjgbr9CUR9TsB3jArNXtkmDQuGq4Hmu4GJEo1ypAJW94wE_SJ");
    const gitaFolderPath = path.join(process.cwd(), 'src', 'gita');

    if (!fs.existsSync(path.join(gitaFolderPath, 'chapters.json'))) {
        return NextResponse.json({ error: 'Chapters data not found' }, { status: 404 });
    }

    const chaptersData = fs.readFileSync(path.join(gitaFolderPath, 'chapters.json'), 'utf-8');
    const chaptersArray = JSON.parse(chaptersData);

    if (isChapter && !chapter) {
        return NextResponse.json({ chapters: chaptersArray }, { status: 200 });
    }

    if (isChapter && chapter && !isVerse) {
        const foundChapter = chaptersArray.find(ch => ch.chapter_number == chapter);

        if (!foundChapter) {
            return NextResponse.json({ error: 'Chapter not found' }, { status: 404 });
        }

        return NextResponse.json({ chapter: foundChapter }, { status: 200 });
    }

    if (isChapter && chapter && isVerse) {
        const chapterFolderPath = path.join(gitaFolderPath, chapter);
        const versesFilePath = path.join(chapterFolderPath, 'verses.json');

        if (!fs.existsSync(versesFilePath)) {
            return NextResponse.json({ error: 'Verses not found for the specified chapter' }, { status: 404 });
        }

        const versesData = fs.readFileSync(versesFilePath, 'utf-8');
        const versesArray = JSON.parse(versesData);

        if (verse) {
            const foundVerse = versesArray.find(v => v.verse_number == verse);

            if (!foundVerse) {
                return NextResponse.json({ error: 'Verse not found' }, { status: 404 });
            }

            return NextResponse.json({ verse: foundVerse }, { status: 200 });
        }

        return NextResponse.json({ verses: versesArray }, { status: 200 });
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
}
