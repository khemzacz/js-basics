let i = 0;
console.log("break at 5");
while (i <= 10) {
    if (i === 5) {
        break;
    }

    console.log(i);
    i++;
}

i = 0;
console.log("continue at every even");
while (i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    
    console.log(i);
    i++;
}