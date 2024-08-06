import { getComics } from "./getComics.mjs";
let heroName = document.getElementById('hero-name')
let coverImg = document.getElementById('cover-img')
let heroData  = JSON.parse(localStorage.getItem("Hero"));

let path = `${heroData.thumbnail.path}.${heroData.thumbnail.extension}`;

document.title =heroData.name;
heroName.innerText = heroData.name;
coverImg.setAttribute('src', path);
getComics(heroData.id);