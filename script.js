let heroEl = document.getElementById("hero");
let rowEl = document.getElementById("rowa");
let resultsEl= document.getElementById("searchResults");
let resultsTitle = document.getElementById("resultsTitle");
let resultsGrid = document.getElementById("resultsGrid");
let searchInput = document.getElementById("searchInput");

function createCard(movie){
    return
    ` <a href="movie.html?id=${movie.id}" class="card">
    <img src="images/${movie.poster}" alt="${movie.title} ">
    <p>${movie.title}</p>
    </a>
    `;
} 
function createRow(title, list){
    if(list.length === 0) return "";
    return `
    <section class="row">
        <h2>${title}</h2>
        <div class="row-cards">
        ${list.map(createCard).join("")}
        </div>
    </section>
    `;
}
function showHero(){ 
    let m = movies[0];
    heroEl.style.backgroundImage = `url('images/${m.banner}')`;
    heroEl.innerHTML = `
    <div class="hero-content">
        <h1>${m.title}</h1>
        <p>${m.description}</p>
        <a href="movie.html?id=${m.id}" class="btn btn-white">
        <img src="images/play.svg" alt=""> Play
        </a>
        <a href="movie.html?id=${m.id}" class="btn btn-gray"> More Info
        </a>
    </div>
    `;
}
    

