function rollDice() {
    const numOfDice = document.querySelector("#numOfDice").value;
    const diceResult = document.querySelector("#diceResult");
    const diceImage = document.querySelector(".dice-container");
    const values = [];
    const images = [];
    
    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
    }

    diceResult.textContent = `Rolled: ${values.join(", ")}`;
    diceImage.innerHTML = images.join(""); // <-- Important fix
}