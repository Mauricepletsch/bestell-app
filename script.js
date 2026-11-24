// startet das Laden

function init() {
    renderDishes();
}

function renderDishes() {
    let dishesRef = document.getElementById('dishes');
    dishesRef.innerHTML = "";

    for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
        dishesRef.innerHTML += getDishTemplate(dishIndex);
    }
}