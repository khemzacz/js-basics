
showStars(10);

function showStars(rows) {
    for (let i = 0; i < rows; i++) {
        let stars = '';
        for (let y = 0; y <= i; y++) {
            stars = stars + '*';
        }
        console.log(stars);
    }
}