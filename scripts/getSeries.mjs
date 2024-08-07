import { seriesUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("series-list");
let loading = document.getElementById("loading-series");
let seriesList = document.getElementById('series-list-container')
seriesList.setAttribute("style", "display: none;");
/**
 * This will call getDetails and create the series table
 * @param {string} id - hero id
 */
export const getSeries = async (id) => {
    await getDetails(seriesUrl(id),tbody,seriesList, loading);
};