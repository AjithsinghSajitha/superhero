import { getThumbnails } from "./scripts/createThumbnails.mjs";
import { searchResult } from "./scripts/searchHero.mjs";

let searchBtn = document.getElementById('search-btn');
let search = document.getElementById('search');

searchBtn.addEventListener('click',()=>{
  let searchTerm = search.value;
  
  searchResult(searchTerm);
  search.value ='';
});

(function init() {
  getThumbnails();
})();
