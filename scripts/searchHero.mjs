import { searchUrl } from "./urls.mjs";

let searchTerm = localStorage.getItem("SearchTerm");
let searchCount = document.getElementById("search-count");
let searchResultElement = document.getElementById("search-result");

const searchResult = async () => {
  try {
    const heroData = await fetch(searchUrl(searchTerm));
    const data = await heroData.json();
    let count = parseInt(data.data.total);
    count
      ? (searchCount.innerText = `Result found: ${count}`)
      : (searchCount.innerText = "No result found");

    if (count) {
      let ul = document.createElement("ul");
      data.data.results.map((hero, i) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let favorite = document.createElement("span");
        let img = document.createElement("img");
        let name = hero.name;
        let thumb = hero.thumbnail;

        let path = !thumb
          ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          : `${thumb.path}.${thumb.extension}`;

        img.setAttribute("src", path);
        img.setAttribute("alt", name);
        span.innerText = `${i + 1}) ${name}`;
        favorite.innerHTML ='<i class="fa-solid fa-star"></i>';

        li.append(img);
        li.append(favorite);
        li.append(span);

        favorite.addEventListener('click',(e)=> {
          e.stopPropagation();
          if(!localStorage.getItem('favorite')){
            localStorage.setItem('favorite', JSON.stringify([hero]))
          }
          else{
            let fav = JSON.parse(localStorage.getItem("favorite"));
            // let item = fav.filter(item => item.id == hero.id)
            let index = -1;
            let isAlreadyExist;
            fav.every((item, i) => {
              if(item.id == hero.id){
                isAlreadyExist = true;
                index = i;
                return false;
              }
              return true;
            });
            
            if(isAlreadyExist){
              console.log(index);
            }
            else{
              fav.push(hero);
              localStorage.setItem('favorite', JSON.stringify(fav));
            }
            
          }
        })

        li.addEventListener('click', () => {
            localStorage.setItem("Hero",JSON.stringify(hero));
            window.open('hero.html');
        })

        ul.append(li);
        searchResultElement.append(ul);
      });
    }
  } catch (error) {}
};

searchResult();
