import { storiesUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("story-list");
let loading = document.getElementById("loading-stories");
let storyList = document.getElementById("story-list-container");

storyList.setAttribute("style", "display: none;");

/**
 * This will call getDetails and create the comic table
 * @param {string} id - hero id
 * @param {Number} offset - offset for loading more data
 * @param {HTMLElement} btnElement - Element for the load more button
 */
export const getStories = (id, offset, btnElement) => {
  getDetails(
    storiesUrl(id, offset),
    tbody,
    storyList,
    loading,
    btnElement,
    offset
  );
};
