
/**
 * Will create table elements and assign values from the api
 * @param {string} url - api url
 * @param {HTMLElement} tbody -Table body
 * @param {HTMLElement} element - Element for the table to be appended
 * @param {HTMLElement} loading - Element for the loader
 */
export const getDetails = async (url, tbody, element, loading) => {
  try {
    const comics = await fetch(url);
    const data = await comics.json();
    data.data.results.map((item, i) => {
      let tr = document.createElement("tr");
      let tdId = document.createElement("td");
      let tdName = document.createElement("td");
      let tdDesc = document.createElement("td");
      let tdImg = document.createElement("td");

      // let div = document.createElement("div");
      let img = document.createElement("img");
      let name = item.title;
      let desc = item.description ? item.description : "No description found";
      let thumb = item.thumbnail;
      let path = `${thumb.path}.${thumb.extension}`;

      img.setAttribute("src", path);
      img.setAttribute("alt", name);

      tdName.classList.add("td-name");
      tdDesc.classList.add("td-desc");

      tdId.innerText = i + 1;
      tdName.innerText = name;
      tdDesc.innerText = desc;
      tdImg.append(img);

      tr.append(tdId);
      tr.append(tdName);
      tr.append(tdDesc);
      tr.append(tdImg);

      tbody.append(tr);
      loading.setAttribute("style", "display: none;");
      element.setAttribute("style", "display: block;");
    });
  } catch (error) {
    console.log("~ error:", error);
  }
};
