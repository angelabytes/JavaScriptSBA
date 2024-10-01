document.addEventListener("DOMContentLoaded", () => {

     /*
     * fetch movies from json and create cards
    */

   const url = "/movies.json"
   fetch(url)
   .then(res => {
       if(!res.ok){
           throw Error("Response was not ok: " + res.statusText);
       }
       return res.json();
   })
   .then(data => {
       console.log(data);
       getMovies(data.movies);
   })
   .catch(error => console.error("There was a problem fethcing: ", error));
   

   function getMovies(movies){

       movies.map(movie => {
           const movieBox = document.querySelector(".movie-box");
           const poster = document.createElement("div");
           poster.className = "movie-poster";
           const image = document.createElement("img");
           image.className = "movie-image";
           image.src = movie.poster;
           const title = document.createElement("h3");
           title.className = "movie-title";
           title.innerText = movie.title;
           const year = document.createElement("p");
           year.className ="movie-year";
           year.innerText = movie.year;

           poster.appendChild(image);
           poster.appendChild(title);
           poster.appendChild(year);

           movieBox.appendChild(poster);
       });
   }



   
});

