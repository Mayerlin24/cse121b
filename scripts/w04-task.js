/* LESSON 4 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Mayerlin Serra",
    photo : {
        src : "images/mayer.png",
        alt : "Profile Picture",
    },
    favoriteFoods : ["Chocolate", "Fruit Salad", "Fried Chicken", "Burger"],
    hobbies : ["Reading", "Dancing", "Cooking"],
    placesLived : []

}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
    place:"Ciudad Ojeda, Venezuela",
    length :"23 years",
    },
    {
        place:"Carora, Venezuela",
        length :"3 years",
    },
    {
        place:"Rosario, Argentina",
        length :"6 years",
    }
)

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").innerHTML = myProfile.name

/* Photo with attributes */

document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});


/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
    // Create <dt> element for place
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    //Create <dd> element for length
    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    // Append <dt> and <dd> elements to <dl> with ID places-lived
    document.querySelector('#places-lived').appendChild(dtElement);
    document.querySelector('#places-lived').appendChild(ddElement);

})
