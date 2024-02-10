/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector('div#temples');
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create <article> element
        const article = document.createElement('article');
        
        // Create <h3> element 
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        
        // Create <img> element
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;
        
        // Append <h3> and <img> elements to <article> element
        article.appendChild(h3);
        article.appendChild(img);
        
        // Append <article> element to global templesElement variable
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok){
    const templeData = await response.json();
        templeList = templeData;
        console.log(templeList);
displayTemples(templeList);
}
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = " ";
};

/* filterTemples Function */

const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered').value;
    console.log("Filter selected:", filter);

    let filteredTemples;
    switch (filter) {
        case "utah":
            filteredTemples = temples.filter(temple => temple.location.toLowerCase().includes("utah"));
            break;
        case "notutah":
            filteredTemples = temples.filter(temple => temple.location.toLowerCase().indexOf("utah") === -1);
            break;
        case "older":
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            break;
        case "all":
            filteredTemples = temples;
            break;
    }
    displayTemples(filteredTemples);
};
getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});