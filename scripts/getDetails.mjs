/**
 * Will create table elements and assign values from the api
 * @param {string} url - api url
 * @param {HTMLElement} tbody -Table body
 * @param {HTMLElement} element - Element for the table to be appended
 * @param {HTMLElement} loading - Element for the loader
 * @param {HTMLElement} btn - Element for the load more button
 * @param {Number} offset - Offset for loading more
 */
export const getDetails = async (
  url,
  tbody,
  element,
  loading,
  btn,
  offset = 0
) => {
  try {
    if(btn) btn.disabled = true;

    const heroData = await fetch(url);
    const data = await heroData.json();

    if (!data.data.results.length && !offset) {
      element.innerText = "No data found";
      loading.setAttribute("style", "display: none;");
      element.setAttribute("style", "display: block;");
      return;
    }

    let totalPage = parseInt(data.data.total) / 5;
    let pageDemand = offset / 5; 

    if (pageDemand >= totalPage) {
      btn.disabled = true;
      btn.innerText = 'No more data available';
      btn.classList.add('btn-disabled-text');
      return;
    }

    if(btn) btn.disabled = false;

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

      let path = !thumb
        ? "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        : `${thumb.path}.${thumb.extension}`;

      img.setAttribute("src", path);
      img.setAttribute("alt", name);

      tdName.classList.add("td-name");
      tdDesc.classList.add("td-desc");

      tdId.innerText = i + offset + 1;
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
