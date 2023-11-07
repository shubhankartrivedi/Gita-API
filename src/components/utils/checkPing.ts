import millisecondToSecond from "@/utils/millisecondToSecond";

export default async function checkPing() {
    const startTime = Date.now();
    let res = await fetch('/api/v1/chapter', {
        method: 'GET',
        cache: 'no-store',
    })

    const endTime = Date.now();
    let statusText: "🟢 Online" | "🔴 Offline";
    let ping: number | string = endTime - startTime;

    if (res.status === 200) {
        statusText = "🟢 Online";
    } else {
        statusText = "🔴 Offline";
    }
    if (ping >= 1000) {
        ping = millisecondToSecond(ping);
        ping = `${ping}s`;
    }
    else {
        ping = `${ping}ms`;
    }
    let s = `${statusText} - ${ping}`
    return s;
}