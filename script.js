let basket = [];

// startet das Laden

function init() {
    renderDishes();
}

// rendert die Gerichte solange Index kleiner als die Anzahl 

function renderDishes() {
    let dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
        dishesRef.innerHTML += getDishTemplate(dishIndex);
    }
}

// wo steht das gericht, wenn nichrt vorhanden -1 

function getBasketIndex(name) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].name === name) {
            return i;
        }
    }
    return -1;
}


// legt Gericht in Warenkorb o/u erhöht die menge

function addToBasket(dishIndex) {
    let dish = myDishes[dishIndex];
    let index = getBasketIndex(dish.name);

    if (index === -1) {
        basket.push({
            "name": dish.name,
            "price": dish.price,
            "amount": 1
        });
    } else {
        basket[index].amount++;
    }
}