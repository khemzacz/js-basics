
const movie = {
    title: 'The good, the bad, the ugly',
    releaseYear: 1966,
    rating: 7.9,
    director: 'Sergio Leone'
}

showProperties(movie);

function showProperties(obj) {
    for (key in obj) {
        if (typeof obj[key] === "string") {
            console.log(key + ": " + obj[key]);
        }
    }
}