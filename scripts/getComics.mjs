import { comicsUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("comic-list");
let loading = document.getElementById("loading-comic");
let comicsList = document.getElementById('comics-list')

comicsList.setAttribute("style", "display: none;");

/**
 * This will call getDetails and create the comic table
 * @param {string} id - hero id
 * @param {Number} offset - offset for loading more data
 * @param {HTMLElement} btnElement - Element for the load more button
 */
export const getComics = async (id, offset, btnElement) => {
    await getDetails(comicsUrl(id, offset),tbody,comicsList, loading, btnElement, offset);
};
