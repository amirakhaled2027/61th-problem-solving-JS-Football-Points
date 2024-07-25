// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

// winsSum = wins * 3
// drawsSum = draws * 1
// losesSum = loses * 0
// pointsSum = winsSum + drawsSum + losesSum

function totalPoints (wins, draws, loses) {
    const winsSum = wins * 3;
    const drawsSum = draws * 1;
    const losesSum = loses * 0;
    const pointsSum = winsSum + drawsSum + losesSum;

    return pointsSum;
} 
console.log(totalPoints(3, 4, 2));
console.log(totalPoints(5, 0, 2));
console.log(totalPoints(0, 0, 1));