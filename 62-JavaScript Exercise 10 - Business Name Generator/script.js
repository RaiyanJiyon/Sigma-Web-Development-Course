function getRandomWord(str) {
    let wordsArray = str.split(", ");
    let randomIndex = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
}

let adjectives = "Crazy, Amazing, Fire";
let shopName = "Engine, Foods, Garments";
let anotherWord = "Bros, Limited, Hub";

let randomAdjective = getRandomWord(adjectives);
let randomShopName = getRandomWord(shopName);
let randomAnotherWord = getRandomWord(anotherWord);

console.log(randomAdjective); // Outputs a random word from adjectives
console.log(randomShopName); // Outputs a random word from shopName
console.log(randomAnotherWord); // Outputs a random word from anotherWord

console.log("Business name generator by combining a list of adjectives, shop names, and another word: ");
console.log(randomAdjective.concat(" ", randomShopName, " ", randomAnotherWord));
