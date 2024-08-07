import { heroUrl } from "./urls.mjs";
import { heroPage } from "./heroEvents.mjs";

const loading = document.getElementById("load");
const heroCover = document.getElementById("hero-cover");
const heroesCovers = document.getElementById("heroes");

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
      img = heroPage(img, data.data.results[0]);
      div.classList.add('cover-wrap');
      div.append(img);
      div.setAttribute("data-text", name);
      heroCover.append(div);
    } catch (error) {
      console.log("~ error:", error);
    }
  };
  
  export const getThumbnails = async () => {
    try {
      heroesCovers.setAttribute("style", "display: none;");
      await getHeroThumbnail(spiderUrl);
      await getHeroThumbnail(thorUrl);
      // await getHeroThumbnail(lokiUrl);
      // await getHeroThumbnail(ironUrl);
      loading.setAttribute("style", "display: none;");
      heroesCovers.setAttribute("style", "display: grid;");
    } catch (error) {
      console.log("~ error:", error);
    }
  };