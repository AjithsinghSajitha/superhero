import { getComics } from "./getComics.mjs";
import { getEvents } from "./getEvents.mjs";
import { getSeries } from "./getSeries.mjs";
import { getStories } from "./getStories.mjs";

let heroName = document.getElementById("hero-name");
let heroDescription = document.getElementById("description");
let coverImg = document.getElementById("cover-img");
let heroData = JSON.parse(localStorage.getItem("Hero"));
let loadMoreComics = document.getElementById("load-comic");
let loadMoreSeries = document.getElementById("load-series");
let loadMoreEvents = document.getElementById("load-event");
let loadMoreStories = document.getElementById("load-story");

let offsetComic = 0;
let offsetSeries = 0;
let offsetEvents = 0;
let offsetStory = 0;

let path = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;

document.title = heroData.name;
heroName.innerText = heroData.name;
heroDescription.innerText = heroData.description;
coverImg.setAttribute("src", path);

getComics(heroData.id, offsetComic);
getSeries(heroData.id, offsetSeries);
getEvents(heroData.id, offsetEvents);
getStories(heroData.id, offsetStory);

loadMoreComics.addEventListener("click", () => {
  offsetComic += 5;
  getComics(heroData.id, offsetComic, loadMoreComics);
});

loadMoreSeries.addEventListener("click", () => {
  offsetSeries += 5;
  getSeries(heroData.id, offsetSeries, loadMoreSeries);
});

loadMoreEvents.addEventListener("click", () => {
  offsetEvents += 5;
  getEvents(heroData.id, offsetEvents, loadMoreEvents);
});

loadMoreStories.addEventListener("click", () => {
  offsetStory += 5;
  getStories(heroData.id, offsetStory, loadMoreStories);
});
