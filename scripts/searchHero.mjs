import { searchUrl } from "./urls.mjs";
import { addOrRemoveFavorite } from "./setFavorite.mjs";

let searchCount = document.getElementById("search-count");
let searchResultElement = document.getElementById("search-result");
let loading = document.getElementById("search-loader");

/**
 * This will provide searched heros based on search term
 * @param {string} searchTerm - Search text
 */
export const searchResult = async (searchTerm) => {
  try {
    let oldUl = document.getElementById('search-ul');

    loading.setAttribute("style", "display: grid;");
    searchCount.setAttribute("style", "display: none;");
    if(oldUl) oldUl.remove();
    
    const heroData = await fetch(searchUrl(searchTerm));
    const data = await heroData.json();
    let count = parseInt(data.data.total);
    
    count
      ? (searchCount.innerText = `Result found: ${count}`)
      : (searchCount.innerText = "No result found");

    loading.setAttribute("style", "display: none;");
    searchCount.setAttribute("style", "display: block;");

    if (count) {
      let ul = document.createElement("ul");

      data.data.results.map((hero, i) => {
        console.log(count);
        let li = document.createElement("li");
        let span = document.createElement("span");
        let favorite = document.createElement("span");
        let img = document.createElement("img");
        let favItem = JSON.parse(localStorage.getItem("favorite")) || [];
        let name = hero.name;
        let thumb = hero.thumbnail;
        let path = !thumb
          ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          : `${thumb.path}.${thumb.extension}`;

        ul.setAttribute('id', 'search-ul');
        img.setAttribute("src", path);
        img.setAttribute("alt", name);
        span.innerText = `${i + 1}) ${name}`;
        favorite.innerHTML = '<i class="fa-solid fa-star"></i>';

        if (favItem.length) {
          favItem.map((item) => {
            if (item.id == hero.id) {
              console.log("Inside map " + count);
              favorite.classList.add("star-yellow");
            }
          });
        }

        addOrRemoveFavorite(favorite, hero);

        li.addEventListener("click", () => {
          localStorage.setItem("Hero", JSON.stringify(hero));
          window.open("pages/hero.html");
        });

        li.append(img);
        li.append(favorite);
        li.append(span);

        ul.append(li);
        searchResultElement.append(ul);
      });
    }
  } catch (error) {
  console.log("Info:  ~ searchResult ~ error:", error)
  }
};