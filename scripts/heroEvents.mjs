/**
 * This add a click event to each hero cover and store the clicked hero to local storage
 * @param {HTMLElement} element - favorite element
 * @param {Object} data - Hero Object
 * @return {HTMLElement} - An img html element
 */
export const heroPage = (element, data) => {
    element.addEventListener('click', ()=>{
        window.open('pages/hero.html','_self');
        localStorage.setItem("Hero",JSON.stringify(data));
    });
    return element;
}
