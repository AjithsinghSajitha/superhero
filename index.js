const loading = document.getElementById('load');
const url = 'https://gateway.marvel.com/v1/public/characters?apikey=36394e08b19938075eb6d89ad0792c70&ts=1721807370&hash=33cd5c84466598587c29794cee7adbe0&offset=0&limit=5';
const getHeros = async () =>{

    try {
        const heroes = await fetch(url);
        const data = await heroes.json();
        console.log("Info:  ~ getHeros ~ data:", data.data.results)
        loading.setAttribute('style', 'display: none;')
    } catch (error) {
        console.log("Info:  ~ getHeros ~ error:", error)
    }
}

getHeros();