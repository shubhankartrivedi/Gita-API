
import { getBaseUrl } from "./getBaseUrl";

export default async function fetcher(url, options) {
    let newUrl = getBaseUrl() + url;
    const res = await fetch(newUrl, options);
    return res
  }