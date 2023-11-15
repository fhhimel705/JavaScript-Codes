// ludo
function ludo(min,max){
 return Math.floor(Math.random()*(max-min+1))+min;

}
let x = ludo(1,6);
console.log("random ludo:",x);

// sort alphabetically
let className = ["saad","halim","laib","fokir"];
let n = className.sort();
console.log("sort alpha:",n);

// numeric sort
let classRoll = [11,19,10,9,5,4,8,7];

let R = classRoll.sort(function(a,b){
return a-b;
});
console.log("numeric sort:",R);

// leap year

function leapYear(year){
if ((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0) ){
console.log(`${year} is a leap year`)
} 
else{
    console.log(`${year} is not a leap year`)

}
}
leapYear(2018);

// count vowels in a sentence

const vowels = ['a','e','i','o','u','A','E','I','O','U'];
function countVowels(sentence){

    let count = 0;
    const letters = Array.from(sentence);
    letters.forEach(function(value) {
        if(vowels.includes(value)){
          count ++;
        }
    });
    return count;

}

console.log ( countVowels("i love Bangladesh"));

// return duplicate number from an array;

const numbers = [1,4,5,5,6,7,6,8,9,10,4];

const duplicates = numbers.filter (function(value,index,array){
    return array.indexOf(value) !== index
});

console .log("duplicate numbers from an array:",duplicates);