export const url = () =>
    "https://gateway.marvel.com/v1/public/characters?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5";
export const heroUrl = (hero) =>
    `https://gateway.marvel.com/v1/public/characters/${hero}?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0`;
export const comicsUrl = (hero) => 
    `https://gateway.marvel.com/v1/public/characters/${hero}/comics?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5`;
export const seriesUrl = (hero) => 
    `https://gateway.marvel.com/v1/public/characters/${hero}/series?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5`;
export const eventsUrl = (hero) => 
    `https://gateway.marvel.com/v1/public/characters/${hero}/events?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5`;
export const storiesUrl = (hero) => 
    `https://gateway.marvel.com/v1/public/characters/${hero}/stories?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5`;