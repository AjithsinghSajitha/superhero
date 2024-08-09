import { searchUrl } from "./urls.mjs";

let searchTerm = localStorage.getItem("SearchTerm");
let searchCount = document.getElementById("search-count");

const searchResult = async () => {
  try {
    const heroData = await fetch(searchUrl(searchTerm));
    const data = await heroData.json();
    let count = parseInt(data.data.total);
    count
      ? (searchCount.innerText = count)
      : (searchCount.innerText = "no result");

    if (count) {
      data.data.results.map((hero, i) => {
        console.log(`${i+1}) ${hero.name}`);
      });
    }
  } catch (error) {}
};

searchResult();
