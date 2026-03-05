export const navPromise = fetch('./nav.json')
    .then(res => res.json());