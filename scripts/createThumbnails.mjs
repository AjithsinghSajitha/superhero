import { heroUrl } from "./urls.mjs";
import { heroPage } from "./heroEvents.mjs";

const loading = document.getElementById("load");
const heroCover = document.getElementById("hero-cover");
const heroesCovers = document.getElementById("heroes");
const heroCovers = [
  "1014873",
  "1009368",
  "1009664",
  "1009407",
  "1011007",
  "1010919",
  "1010801",
  "1011005",
  "1010935",
  "1009157",
  "1009378",
  "1009608",
];
const homePageCovers = getRandomDistinctCover(heroCovers);

let promises = [];

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
    img = heroPage(img, data.data.results[0]);
    div.classList.add("cover-wrap");
    div.append(img);
    div.setAttribute("data-text", name);
    heroCover.append(div);
  } catch (error) {
    console.log("~ error:", error);
  }
};

// Generate Covers
export const getThumbnails = async () => {
  try {
    heroesCovers.setAttribute("style", "display: none;");
    homePageCovers.map(cover => promises.push(getHeroThumbnail(heroUrl(cover))));

    Promise.allSettled(promises).then((result) => {
      loading.setAttribute("style", "display: none;");
      heroesCovers.setAttribute("style", "display: grid;");
    });
  } catch (error) {
    console.log("~ error:", error);
  }
};

/**
 * This will create an array of four random item from arr
 * @param {Array} arr - Array containing hero id
 * @return {Array} - An array of four random item from arr
 */
function getRandomDistinctCover(arr) {
  let covers = new Set();
  while (covers.size < 4) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    covers.add(arr[randomIndex]);
  }
  return [...covers];
}
