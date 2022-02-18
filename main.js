var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Potato Salad",
  "Scalloped Potatoes",
  "Sweet Potato Tots",
  "Dirty Rice",
  "Caeser Salad",
  "Gyoza",
  "Garlic Butter Green Beans",
  "Hush Puppies",
];

var mains = [
  "Spaghetti Casserole",
  "Pineapple Chicken",
  "Dressing",
  "Mango Stir Fry",
  "Link",
  "Chicken Parmesean",
  "Cajun Gumbo",
  "BBQ Chicken Burgers",
  "Pho",
  "Quesadilla",
  "Chicken Fried Steak",
  "Sheet Pan Fajitas",
  "Margarita Pizza",
];

var desserts = [
  "Apple Pie",
  "Lemon Apple Pie",
  "Pound Cake",
  "Banana Bread",
  "SnickerDoodle Cookie",
  "Cheesecake",
  "Birthday Cake",
  "Baklava",
  "Ambrosia",
  "Truffle Butter",
  "Tres Leches",
  "Bread Pudding",
  "Cookie Brownie",
  "Apple Pie",
  "Sweet Potato Pie",
  "Cupcakes",
  "Strawberry Cake",
];

var cookButton = document.querySelector(".cook");
var optionBox = document.querySelector(".option-box");
var log = document.querySelector("#log");
var sideDishButton = document.querySelector("#side");
var recipeBox = document.querySelector(".center-pic");

cookButton.addEventListener("click", showDish);

function getRandomInfo(dish) {
  return Math.floor(Math.random() * dish.length);
}

function showDish() {
  var radios = document.getElementsByName("dish-selection");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      var radioSelection = radios[i].value;
    }
  }
  if (radioSelection === "side") {
    recipeBox.innerHTML = `
    <div class="option-selected">
    <p class="message-title">You should make:</p>
    <p class="message-option">${sides[getRandomInfo(sides)] + "!"}</p>
    </div>`;
  }
  if (radioSelection === "main") {
    recipeBox.innerHTML = `
	    <div class="option-selected">
	    <p class="message-title">You should make:</p>
	    <p class="message-option">${mains[getRandomInfo(mains)] + "!"}</p>
	    </div>`;
  }
  if (radioSelection === "dessert") {
    recipeBox.innerHTML = `
	    <div class="option-selected">
	    <p class="message-title">You should make:</p>
	    <p class="message-option">${desserts[getRandomInfo(desserts)] + "!"}</p>
	    </div>`;
  } else if (radioSelection === "entire") {
    recipeBox.innerHTML = `
    <div class="option-selected">
    <p class="message-title">You should make:</p>
    <p class="message-option">${mains[getRandomInfo(mains)]} with a side of ${
      sides[getRandomInfo(sides)]
    } and ${desserts[getRandomInfo(desserts)]} for dessert!</p>
    </div>`;
  }
}
