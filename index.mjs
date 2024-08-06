import { getThumbnails } from "./scripts/createThumbnails.mjs";
globalThis.HeroData = null;

(function init() {
  getThumbnails();
})();
