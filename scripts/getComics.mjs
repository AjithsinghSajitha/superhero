import { comicUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("comic-list");
let loading = document.getElementById("loading-comic");
let comicsList = document.getElementById('comics-list')
comicsList.setAttribute("style", "display: none;");
/**
 * This will call getDetails and create the comic table
 * @param {string} id - hero id
 */
export const getComics = async (id) => {
    await getDetails(comicUrl(id),tbody,comicsList, loading);
};
