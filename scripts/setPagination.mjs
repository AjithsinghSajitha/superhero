import { PaginationUrl } from "./urls.mjs";
let offset = 0
let btn = document.getElementById('test');


const testing = async () =>{
    try {
        let url = PaginationUrl(1014873, offset)
        
        let dataJson = await fetch(url);
        let data = await dataJson.json();
        console.log(data.data);
    } catch (error) {
        console.log("Info:  ~ testing ~ error:", error)
    }
}

btn.addEventListener('click', ()=>{
    testing();
    offset+=5;
});