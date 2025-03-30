const movieTitle = document.querySelector(".search");
const resultEl = document.querySelector(".movies");


async function searchMovie(movieFilter) {
    event.preventDefault()
    const movieTitles = movieTitle.value
  const data = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=b5cd70c4&s=${movieTitles || ""}`
  );
  const movieData = await data.json();
  const result = movieData.Search
  if (movieFilter === "newtoold") {
    result.sort((a,b) => b.Year - a.Year)
  }
  if (movieFilter === "oldtonew") {
    result.sort((a,b) => a.Year - b.Year)
  }
  console.log(result);
  resultEl.innerHTML = movieData.Search.map(item => (
    `<div>
                <img src="${item.Poster}" alt="">
                <h2>${item.Title}</h2>
                <h3>${item.Type}</h3>
                <h4>${item.Year}</h4>
            </div>
            `
  ))
}

function yearFilter() {
    searchMovie(event.target.value)
}
