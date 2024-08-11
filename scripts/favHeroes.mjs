import { removeFromFavorite } from "./setFavorite.mjs";

let fav = JSON.parse(localStorage.getItem("favorite"));
let ul = document.createElement("ul");
let heroContainer = document.getElementById("fav-container");

fav.reverse().map((hero) => {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let remove = document.createElement("span");
  let img = document.createElement("img");
  let div = document.createElement("div");
  let name = hero.name;
  let thumb = hero.thumbnail;

  let path = !thumb
    ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
    : `${thumb.path}.${thumb.extension}`;

  img.setAttribute("src", path);
  img.setAttribute("alt", name);
  span.innerText = `    ${name}`;
  remove.innerHTML = '<i class="fa-solid fa-trash"></i>';
  remove.classList.add("remove");
  li.classList.add("arrange-items");

  remove.addEventListener("click", () => {
    removeFromFavorite(hero.id, fav);
    li.classList.add("hide-anim");
    setTimeout(() => {
      li.classList.add("hide");
      li.remove();
    }, 1000);
  });

  div.append(img);
  div.append(span);
  li.append(div);
  li.append(remove);
  ul.append(li);
  heroContainer.append(ul);
});
