import { getComics } from "./getComics.mjs";
import { getEvents } from "./getEvents.mjs";
import { getSeries } from "./getSeries.mjs";
import { getStories } from "./getStories.mjs";

let heroName = document.getElementById("hero-name");
let heroDescription = document.getElementById("description");
let coverImg = document.getElementById("cover-img");
let heroData = JSON.parse(localStorage.getItem("Hero"));

let path = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;

document.title = heroData.name;
heroName.innerText = heroData.name;
heroDescription.innerText = heroData.description;
coverImg.setAttribute("src", path);

let promises = [getComics(heroData.id), getSeries(heroData.id), getEvents(heroData.id), getStories(heroData.id)];

Promise.all(promises)
  .catch(error => console.log(error.message));