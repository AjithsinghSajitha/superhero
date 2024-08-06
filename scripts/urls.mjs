export const heroUrl = (hero) =>
    `https://gateway.marvel.com/v1/public/characters/${hero}?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0`;
export const url = () =>
    "https://gateway.marvel.com/v1/public/characters?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5";
export const comicUrl = (hero) => 
    `http://gateway.marvel.com/v1/public/characters/${hero}/comics?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5`;