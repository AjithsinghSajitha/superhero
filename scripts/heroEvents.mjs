
export const heroPage = (element, data) => {
    element.addEventListener('click', ()=>{
        window.Open('/pages/hero.html');
        localStorage.setItem("Hero",JSON.stringify(data));
    });
    
    return element;
}
