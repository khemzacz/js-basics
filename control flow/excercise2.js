function isLandscape(width, height) {
    return (width > height);
}

console.log(isLandscape(1920, 1080));
console.log(isLandscape(960, 540));
console.log(isLandscape(1080, 1080));