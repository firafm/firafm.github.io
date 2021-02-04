const key = 'a8b68eb7fdb1c47dc7eaa50da9ff4c74';
const endpoint_url = 'https://api.themoviedb.org/3';

function getListMovie(services, sectiontitle) {
fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data) {
    // Objek/array JavaScript dari response.json() masuk lewat data.
    // Menyusun komponen card movie secara dinamis
    var moviesHTML = "";
    data.results.forEach(function(movie) {
      moviesHTML += `
        <div class="col m3 s6">
          <div class="card">
            <a href="./movie.html?id=${movie.id}">
              <div class="card-image waves-effect waves-block waves-light">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
              </div>
            </a>
            <div class="card-content text-center">
              <strong>${movie.title}</strong>
              <p>Released: ${movie.release_date}<p>
            </div>
          </div>
        </div>
      ` ;
  });

    document.getElementById("movie_list").innerHTML = moviesHTML;
    document.getElementById("section_title").innerHTML = sectiontitle;
  })
  .catch(error);
}

function getMovie( movie_id ){
  fetch(endpoint_url + services + movie_id + "?api_key=" + key + "&language=en-US&page=1")
    .then(status)
    .then(json)
    .then(function(data) {
      // Objek/array JavaScript dari response.json() masuk lewat data.
      // Menyusun komponen card movie secara dinamis
      var moviesHTML = "";
      data.results.forEach(function(movie) {
        moviesHTML += `
        <div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <h1 class="header center white-text">${movie.title}</h1>
            </div>
          </div>
          <div class="parallax">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            size="100vw"
            alt="movie"
            style="transform: translate3d(-50%, 0px, 0px);opacity: 1;"
            >
          </div>
        </div>
              <strong>${movie.title}</strong>
              <p>Released: ${movie.release_date}<p>
        ` ;
    });

      document.getElementById("movie_list").innerHTML = moviesHTML;
      document.getElementById("section_title").innerHTML = sectiontitle;
    })
    .catch(error);
}