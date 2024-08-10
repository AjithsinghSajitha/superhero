/**
 * This will ste or remove heroes as favorite
 * @param {HTMLElement} element - favorite element
 * @param {object} hero - an item from favorite stored in local storage
 */
export const addOrRemoveFavorite = (element, hero) => {
  element.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!localStorage.getItem("favorite")) {
      localStorage.setItem("favorite", JSON.stringify([hero]));
      element.classList.add("star-yellow");
    } else {
      let fav = JSON.parse(localStorage.getItem("favorite"));
      let index = -1;
      let isAlreadyExist;
      fav.every((item, i) => {
        if (item.id == hero.id) {
          isAlreadyExist = true;
          index = i;
          return false;
        }
        return true;
      });

      isAlreadyExist
        ? addFav(element, fav, index)
        : removeFav(element, fav, hero);
    }
  });
};

/**
 * This remove a hero from favorite
 * @param {HTMLElement} element - favorite element
 * @param {Array} fav - Favorite list array
 * @param {Number} index - current index of the hero to be removed
 */
function addFav(element, fav, index) {
  fav.splice(index, 1);
  localStorage.setItem("favorite", JSON.stringify(fav));
  element.classList.remove("star-yellow");
}

/**
 * This add a hero from favorite
 * @param {HTMLElement} element - favorite element
 * @param {Array} fav - Favorite list array
 * @param {object} hero - an item from favorite stored in local storage
 */
function removeFav(element, fav, hero) {
  fav.push(hero);
  localStorage.setItem("favorite", JSON.stringify(fav));
  element.classList.add("star-yellow");
}
