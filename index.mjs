import { getThumbnails } from "./scripts/createThumbnails.mjs";

let searchBtn = document.getElementById('search-btn');
let search = document.getElementById('search');

searchBtn.addEventListener('click',()=>{
  let searchTerm = search.value;
  
  window.open('pages/searchResult.html');
  localStorage.setItem("SearchTerm", searchTerm);
});

(function init() {
  getThumbnails();
})();
