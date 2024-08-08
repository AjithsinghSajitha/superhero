import { getComics } from "./getComics.mjs";
import { getEvents } from "./getEvents.mjs";
import { getSeries } from "./getSeries.mjs";
import { getStories } from "./getStories.mjs";

let heroName = document.getElementById("hero-name");
let coverImg = document.getElementById("cover-img");
let heroData = JSON.parse(localStorage.getItem("Hero"));

let path = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;

document.title = heroData.name;
heroName.innerText = heroData.name;
coverImg.setAttribute("src", path);

async function run() {
  await getComics(heroData.id);
  await getSeries(heroData.id);
  await getEvents(heroData.id);
  await getStories(heroData.id);
}

run();