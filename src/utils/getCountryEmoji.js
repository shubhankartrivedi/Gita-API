export default async function getEmojiFromCountryCode(code) {
    const response = await fetch(`https://unicode.org/cldr/utility/emoji/emoji-list.jsp?a=${code}`);
    const text = await response.text();
    const match = text.match(/<td class="code">(.+)<\/td><td class="andr">/);
    if (match) {
      const hex = match[1].replace(/ /g, '-');
      return String.fromCodePoint(...hex.split('-').map(h => parseInt(h, 16) + 0x1F1E6));
    } else {
      return null;
    }
  }