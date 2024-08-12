import { eventsUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("event-list");
let loading = document.getElementById("loading-events");
let eventList = document.getElementById('events-list-container')

eventList.setAttribute("style", "display: none;");

/**
 * This will call getDetails and create the comic table
 * @param {string} id - hero id
 * @param {Number} offset - offset for loading more data
 * @param {HTMLElement} btnElement - Element for the load more button
 */
export const getEvents = async (id, offset, btnElement) => {
    await getDetails(eventsUrl(id, offset),tbody,eventList, loading, btnElement, offset);
};
