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

      let { isAlreadyExist, index } = findindex(hero.id, fav);

      isAlreadyExist
        ? removeFav(fav, index, element)
        : addFav(element, fav, hero);
    }
  });
};

/**
 * This remove a hero from favorite
 * @param {HTMLElement} element - favorite element
 * @param {Array} fav - Favorite list array
 * @param {Number} index - current index of the hero to be removed
 */
function removeFav(fav, index, element = null) {
  fav.splice(index, 1);
  localStorage.setItem("favorite", JSON.stringify(fav));
  if (element) {
    element.classList.remove("star-yellow");
  }
}

/**
 * This add a hero from favorite
 * @param {HTMLElement} element - favorite element
 * @param {Array} fav - Favorite list array
 * @param {object} hero - an item from favorite stored in local storage
 */
function addFav(element, fav, hero) {
  fav.push(hero);
  localStorage.setItem("favorite", JSON.stringify(fav));
  element.classList.add("star-yellow");
}

/**
 * This will find the index of the hero from the fav array
 * @param {string} id - Hero id
 * @param {Array} fav - Favorite list array
 * @return {Object} -  Index and isAlreadyExist as an object
 */
function findindex(id, fav) {
  let index = -1;
  let isAlreadyExist;
  fav.every((item, i) => {
    if (item.id == id) {
      isAlreadyExist = true;
      index = i;
      return false;
    }
    return true;
  });
  return { isAlreadyExist: isAlreadyExist, index: index };
}

/**
 * This will find the index of the hero from the fav array nad remove the hero item
 * @param {string} id - Hero id
 * @param {Array} fav - Favorite list array
 */
export function removeFromFavorite(id, fav) {
  let { isAlreadyExist, index } = findindex(id, fav);
  if (isAlreadyExist) removeFav(fav, index);
}
