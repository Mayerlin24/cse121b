/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
let fullName = "Mayerlin Serra";
const currentYear = new Date().getFullYear();
const profilePicture = "images/mayer.png";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");

const foodElement = document.getElementById("food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", fullName);

nameElement.innerHTML = `<strong> ${fullName} </strong>`;



/* Step 5 - Array */

let favoriteFoods = ["Chinese Rice","Salad","Sushi","Arepas","Burger"]
foodElement.innerHTML = favoriteFoods;

let favoriteFood = "Fruits";
favoriteFoods.push(favoriteFood);
foodElement.innerHTML += `<br> ${favoriteFoods}`;

favoriteFoods.shift()
foodElement.innerHTML += `<br> ${favoriteFoods}`;

favoriteFoods.pop()
foodElement.innerHTML += `<br> ${favoriteFoods}`







