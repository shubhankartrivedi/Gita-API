import { NextResponse } from 'next/server';
import sendMessage from '@/utils/sendWebhook';

export async function POST(request) {
  const data = await request.json();
  const star = data.star;
  if(!star) {
    return NextResponse.json({ error: 'Missing star' }, { status: 400 });
  }

    await sendMessage(`New star: ${star}`, "https://discord.com/api/webhooks/1155967680281587792/arJeWZLCS5TD42ca1not4EyZeBJq0qTKhLWoRgIHNU4xmM_78zyWg02_yo0pyJT19tgs");
    return NextResponse.json({ success: true }, { status: 200 });
}
