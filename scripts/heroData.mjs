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
let path = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;
let offsetComic = 0;
let offsetSeries = 0;
let offsetEvents = 0;
let offsetStory = 0;

document.title = heroData.name;
heroName.innerText = heroData.name;
heroDescription.innerText = heroData.description;
coverImg.setAttribute("src", path);

getComics(heroData.id, offsetComic);
getSeries(heroData.id, offsetSeries);
getEvents(heroData.id, offsetEvents);
getStories(heroData.id, offsetStory);

loadMore(offsetComic, loadMoreComics, getComics);
loadMore(offsetSeries, loadMoreSeries, getSeries);
loadMore(offsetEvents, loadMoreEvents, getEvents);
loadMore(offsetStory, loadMoreStories, getStories);

/**
 * This will load more data in to the hero detail tables
 * @param {Number} offset - offset for loading more data
 * @param {HTMLElement} btnElement - Element for the load button
 * @param {Function} getFunction - Function to get data
 */
function loadMore(offset, btnElement, getFunction){
  btnElement.addEventListener("click", () => {
    offset += 5;
    getFunction(heroData.id, offset, btnElement);
  });
}