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
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Dressing",
  "Mango Stir Fry",
  "Link",
  "Chicken Parmesean",
  "Butternut Squash Soup",
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
  "CookieBrownie",
  "Apple Pie",
  "Sweet Potato Pie",
  "Tart",
  "Cupcakes",
  "Strawberry Cake",
];

var cookButton = document.querySelector(".cook");
var optionBox = document.querySelector(".option-box");
var log = document.querySelector("#log");
var sideDishButton = document.querySelector("#side");
var recipeBox = document.querySelector(".center-pic");

//optionBox.addEventListener("submit" /* ???function(event)??? */);
cookButton.addEventListener("click", showDish);
//sideDishButton.addEventListener("click", selectSideDish);

// var radios = document.getElementsByName("dish-selection");
//
// for (var i = 0, length = radios.length; i < length; i++) {
//   if (radios[i].checked) {
//     console.log(radios[i].value);
//   }
// }

function showDish() {
  // var dishPick = document.querySelector('input[name="dishPick"]:checked').value;
  // var radioSelection = dishPick.value;

  var radios = document.getElementsByName("dish-selection");

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      var steve = radios[i].value;
    }
  }
  console.log(steve);
  if (steve === "side") {
    recipeBox.innerHTML = `
    <div class="option-selected">
    <p>You should make:</p>
    <p>${sides[getRandomInfo(sides)]}</p>
    </div>`;
  }
}

function selectSideDish() {
  var newSide = sides[getRandomInfo(sides)];
  return newSide;
  // console.log(sides);
  // displayDish(newCover, newTitle, newDescriptor1, newDescriptor2)
}

function displayDish(newDish) {
  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2);
  currentTitle.innerText = newTitle;
  currentImage.src = newCover;
  currentTagLine1.innerText = newDescriptor1;
  currentTagLine2.innerText = newDescriptor2;
}

function getRandomInfo(dish) {
  return Math.floor(Math.random() * dish.length);
}
