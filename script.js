let basket = [];

// startet das Laden

function init() {
    renderDishes();
}

// rendert die Gerichte in ihre Kategorie 

function renderDishes() {
    let burgerRef = document.getElementById('burger');
    let pizzaRef = document.getElementById('pizza');
    let saladRef = document.getElementById('salad');

    burgerRef.innerHTML = "";
    pizzaRef.innerHTML = "";
    saladRef.innerHTML = "";

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
        if (myDishes[dishIndex].category === "Burger") {
            burgerRef.innerHTML += getDishTemplate(dishIndex);
        } else if (myDishes[dishIndex].category === "Pizza") {
            pizzaRef.innerHTML += getDishTemplate(dishIndex);
        } else {
            saladRef.innerHTML += getDishTemplate(dishIndex);
        }
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

    renderBasket();
}


// Zeigt warenkorb

function renderBasket() {
    let basketRef = document.getElementById('basket');
    basketRef.innerHTML = "";

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        basketRef.innerHTML += getBasketTemplate(basketIndex);
    }
}