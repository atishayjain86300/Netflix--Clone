$(document).ready(function() {
    // Function to create movie cards
    function createMovieCard(movie) {
        return `
            <div class="movie-card">
                <img src="${movie.imageUrl}" alt="${movie.title}">
                <h3>${movie.title}</h3>
            </div>
        `;
    }

    // Function to render movie list
    function renderMovies() {
        const movieList = $(".movie-list");
        movieList.empty(); // Clear existing content

        // Loop through movies and create movie cards
        movies.forEach(function(movie) {
            const movieCard = createMovieCard(movie);
            movieList.append(movieCard);
        });
    }

    // Initial rendering of movies
    renderMovies();
});
