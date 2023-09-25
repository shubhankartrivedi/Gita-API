'use client'

export default function getOperatingSystem() {
    const userAgent = window.navigator.userAgent;

    if (/Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent)) {
        return 'MacOS';
    } else if (/Windows|Win32|Win64/.test(userAgent)) {
        return 'Windows';
    } else if (/iPhone|iPad|iPod/.test(userAgent)) {
        return 'iOS';
    } else if (/Android/.test(userAgent)) {
        return 'Android';
    } else {
        return 'Unknown';
    }
}
