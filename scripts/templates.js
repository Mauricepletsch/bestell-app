// HTML schreiben für ein Gericht mit preis, 
// beschreibung und gerichtname

function getDishTemplate(dishIndex) {
    return `<div class="dish">
                <h3>${myDishes[dishIndex].name}</h3>
                <p>${myDishes[dishIndex].description}</p>
                <p class="dish_price">${myDishes[dishIndex].price.toFixed(2)} €</p>
                <button onclick="addToBasket(${dishIndex})">+</button>
            </div>`;
}