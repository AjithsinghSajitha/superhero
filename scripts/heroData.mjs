import { getComics } from "./getComics.mjs";
import { getSeries } from "./getSeries.mjs";
let heroName = document.getElementById('hero-name')
let coverImg = document.getElementById('cover-img')
let heroData  = JSON.parse(localStorage.getItem("Hero"));

let path = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;

document.title =heroData.name;
heroName.innerText = heroData.name;
coverImg.setAttribute('src', path);
await getComics(heroData.id);
await getSeries(heroData.id);