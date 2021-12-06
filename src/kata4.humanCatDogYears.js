const humanCatDogYears = number => {
    if (number === 1){
        return [1,15,15];
    }
    if (number === 2) {
        return [2, 24, 24];
    } else {
        const catYears = 24 + (number-2)*4;
        const dogYears = 24 + (number-2)*5;
        return [number, catYears, dogYears];
    }
};
module.exports = humanCatDogYears;
