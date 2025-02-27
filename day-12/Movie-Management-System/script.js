document.getElementById("movieForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    let movie = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        year: document.getElementById("year").value,
        rating: document.getElementById("rating").value,
        genre: document.getElementById("genre").value,
        poster: document.getElementById("poster").value
    };

    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    alert("Movie added successfully!");
    this.reset();
});

function displayMovies() {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let table = document.getElementById("movieList");
    table.innerHTML = "";

    if (movies.length === 0) {
        table.innerHTML = "<tr><td colspan='7'>No movies added yet!</td></tr>";
        return;
    }

    movies.forEach((movie, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + '... <a href="#" onclick="readMore(${index})">Read More</a>' : movie.description}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" width="50" height="70"></td>
            <td><button onclick="deleteMovie(${index})">🗑 Delete</button></td>
        `;
    });
}

function deleteMovie(index) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

// Function to search movies
function searchMovies() {
    let searchInput = document.getElementById("search").value.toLowerCase();
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    let filteredMovies = movies.filter(movie => 
        movie.name.toLowerCase().includes(searchInput) || 
        movie.genre.toLowerCase().includes(searchInput)
    );
    
    let table = document.getElementById("movieList");
    table.innerHTML = "";

    if (filteredMovies.length === 0) {
        table.innerHTML = "<tr><td colspan='7'>No matching movies found!</td></tr>";
        return;
    }

    filteredMovies.forEach((movie, index) => {
        let row = table.insertRow();
        row.innerHTML = `
            <td>${movie.name}</td>
            <td>${movie.description.length > 100 ? movie.description.substring(0, 100) + '... <a href="#" onclick="readMore(${index})">Read More</a>' : movie.description}</td>
            <td>${movie.year}</td>
            <td>${movie.rating}</td>
            <td>${movie.genre}</td>
            <td><img src="${movie.poster}" width="50" height="70"></td>
            <td><button onclick="deleteMovie(${index})">🗑 Delete</button></td>
        `;
    });
}

function sortMovies() {
    let criteria = document.getElementById("sort").value;
    let movies = JSON.parse(localStorage.getItem("movies")) || [];

    if (criteria === "name") {
        movies.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "year") {
        movies.sort((a, b) => b.year - a.year);
    } else if (criteria === "rating") {
        movies.sort((a, b) => b.rating - a.rating);
    }

    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

document.addEventListener("DOMContentLoaded", function() {
    displayMovies();
});



document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.createElement("button");
    themeToggle.id = "theme-toggle";
    themeToggle.innerText = "Toggle Dark Mode";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
