
// Speed limit = 70
// 5 -> 1 point
// more than 12 points, license is suspended
console.log(checkSpeed(50));
console.log(checkSpeed(70));
console.log(checkSpeed(71));
console.log(checkSpeed(75));
console.log(checkSpeed(80));
console.log(checkSpeed(179));
console.log(checkSpeed(180));
console.log(checkSpeed(181));

function checkSpeed(speed) {
    let kmPerPoint = 5;
    let speedLimit = 70;

    if (speed < speedLimit + kmPerPoint) {
        return 'We\'re good';
    } 

    const exceedance = speed - 70;
    const points = Math.floor(exceedance / 5);
    if (points > 11) {
        return 'license cancelled.';
    }

    return points;


}