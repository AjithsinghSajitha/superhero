
export const heroPage = (element, data) => {
    element.addEventListener('click', ()=>{
        window.location.href = '/superhero/pages/hero.html';
        localStorage.setItem("Hero",JSON.stringify(data));
    });
    
    return element;
}
