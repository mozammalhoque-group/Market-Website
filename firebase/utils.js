// firebase/utils.js
export function generateClientEmail(userid) {
    return `${userid}@clients.market.mhg.info.bd`;
}

export function redirect(url) {
    window.location.href = url;
}
