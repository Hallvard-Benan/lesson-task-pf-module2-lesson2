// Question 1
var winningNumbers = [1, 76, 2, 78, 16, 7];
console.log(winningNumbers[2]);
// Question 2
var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("bell peppers");
console.log(vegetables.length);
// Question 3
var randomThings = ["pumpkin", false, 23, true, "tomato"];
for (i = 0; i < randomThings.length; i++) {
  console.log(randomThings[i]);
}
// Question 4
var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (let i = 0; i < moreThings.length; i++) {
  if (typeof moreThings[i] === "number") {
    console.log(moreThings[i]);
  }
}

// Question 5
var ingredients = ["water", "flour", "toothpaste", "fish lips"];

for (let i = 0; i < ingredients.length; i++) {
  let sortedIngredients = ingredients.sort();
  console.log(sortedIngredients[i]);
}

// Question 6
var characters = [
  "Gob",
  "Michael",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];
for (let i = 0; i < characters.length; i++) {
  if (i % 2 !== 0) {
    console.log(characters[i]);
  }
}
