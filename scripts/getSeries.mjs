import { seriesUrl } from "./urls.mjs";
import { getDetails } from "./getDetails.mjs";

let tbody = document.getElementById("series-list");
let loading = document.getElementById("loading-series");
let seriesList = document.getElementById('series-list-container')
seriesList.setAttribute("style", "display: none;");
/**
 * This will call getDetails and create the series table
 * @param {string} id - hero id
 * @param {Number} offset - offset for loading more data
 */
export const getSeries = async (id, offset) => {
    await getDetails(seriesUrl(id, offset),tbody,seriesList, loading, offset);
};