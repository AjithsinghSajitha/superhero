import { storiesUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("story-list");
let loading = document.getElementById("loading-stories");
let storyList = document.getElementById('story-list-container')
storyList.setAttribute("style", "display: none;");
/**
 * This will call getDetails and create the comic table
 * @param {string} id - hero id
 */
export const getStories = async (id) => {
    await getDetails(storiesUrl(id),tbody,storyList, loading);
};
