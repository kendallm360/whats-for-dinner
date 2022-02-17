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
  "Brownie",
  "Apple Pie",
  "Sweet Potato Pie",
  "Tart",
  "Cupcakes",
  "Strawberry Cake",
];

var sideDishButton = document.querySelector("#side");

sideDishButton.addEventListener("click", selectSideDish);

selectSideDish();
var newSide = sides[getRandomInfo(sides)];
// displayCover(newCover, newTitle, newDescriptor1, newDescriptor2)

function getRandomInfo(dish) {
  return Math.floor(Math.random() * dish.length);
}
