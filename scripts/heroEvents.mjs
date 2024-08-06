
export const heroPage = (element, data) => {
    element.addEventListener('click', ()=>{
        window.open('/pages/hero.html');
        localStorage.setItem("Hero",JSON.stringify(data));
    });
    
    return element;
}
