import { getThumbnails } from "./scripts/createThumbnails.mjs";
import { searchResult } from "./scripts/searchHero.mjs";

let searchBtn = document.getElementById('search-btn');
let search = document.getElementById('search');

searchBtn.addEventListener('click',()=>{
  let searchTerm = search.value;

  if(searchTerm){
    searchResult(searchTerm);
  }
  
  search.value ='';
});

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

(function init() {
  getThumbnails();
})();
