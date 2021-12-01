const joinNames = namesObj => {;
 let newString = ''
 const  arrayLength = namesObj.length
 for (let i = 0; i < arrayLength; i++) {
     newString += namesObj[i].name;
     console.log (newString);
     if (i < arrayLength -2) {
         newString += ', '
     }
     if (i === arrayLength -2) {
        newString += ' & '
     }
     console.log(newString);
 }
 return newString;
 }
module.exports = joinNames;
