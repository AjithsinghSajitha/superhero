const loading = document.getElementById("load");
const heroCover = document.getElementById("hero-cover");
const heroesCovers = document.getElementById("heroes");
const heroCovers = [];

let heroUrl = (hero) =>
  `https://gateway.marvel.com/v1/public/characters/${hero}?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0`;
const url =
  "https://gateway.marvel.com/v1/public/characters?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5";

const spiderUrl = heroUrl("1014873");
const ironUrl = heroUrl("1009368");
const thorUrl = heroUrl("1009664");
const lokiUrl = heroUrl("1009407");

/**
 * This will create an image elements by getting the characters thumbnail and other detail like name
 * @param {string} url - hero api url
 */
const getHeroThumbnail = async (url) => {
  try {
    const heroes = await fetch(url);
    const data = await heroes.json();

    let div = document.createElement("div");
    let img = document.createElement("img");
    let name = data.data.results[0].name;
    let thumb = data.data.results[0].thumbnail;
    let path = `${thumb.path}.${thumb.extension}`;

    img.setAttribute("src", path);
    img.setAttribute("alt", name);
    div.classList.add('cover-wrap')
    div.append(img);
    div.setAttribute("data-text", name);
    heroCover.append(div);
  } catch (error) {
    console.log("~ error:", error);
  }
};

const getThumbnails = async () => {
  try {
    heroesCovers.setAttribute("style", "display: none;");
    await getHeroThumbnail(spiderUrl);
    await getHeroThumbnail(ironUrl);
    await getHeroThumbnail(thorUrl);
    await getHeroThumbnail(lokiUrl);
    loading.setAttribute("style", "display: none;");
    heroesCovers.setAttribute("style", "display: grid;");
  } catch (error) {
    console.log("~ error:", error);
  }
};
(function init() {
  getThumbnails();
})();
