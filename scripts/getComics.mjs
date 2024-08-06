import { comicUrl } from "./urls.mjs";

let tbody = document.getElementById("comic-list");
let loading = document.getElementById("loading");
let comicsList = document.getElementById('comics-list')
/**
 * This will create an image elements by getting the characters thumbnail and other detail like name
 * @param {string} url - hero api url
 */
export const getComics = async (id) => {
    comicsList.setAttribute("style", "display: none;");
  try {
    const comics = await fetch(comicUrl(id));
    const data = await comics.json();
    data.data.results.map((comic, i) => {
      let tr = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdName = document.createElement("td");
      let tdDesc = document.createElement("td");
      let tdImg = document.createElement("td");

      // let div = document.createElement("div");
      let img = document.createElement("img");
      let name = comic.title;
      let desc = comic.description ? comic.description : "No description found";
      let thumb = comic.thumbnail;
      let path = `${thumb.path}.${thumb.extension}`;

      img.setAttribute("src", path);
      img.setAttribute("alt", name);

      tdName.classList.add("td-name");
      tdDesc.classList.add("td-desc");

      tdId.innerText = i + 1;
      tdName.innerText = name;
      tdDesc.innerText = desc;
      tdImg.append(img);

      tr.append(tdId);
      tr.append(tdName);
      tr.append(tdDesc);
      tr.append(tdImg);

      tbody.append(tr);
      loading.setAttribute("style", "display: none;");
      comicsList.setAttribute("style", "display: block;");
    });
  } catch (error) {
    console.log("~ error:", error);
  }
};
