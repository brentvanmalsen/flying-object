const spidermanImage = document.getElementById("spiderman");

// Stel de initiële positie in
let xPos = 0;
let yPos = 0;

// Stel de bewegingsafstand in voor elke toetsaanslag van de pijltjestoetsen (verhoogd voor snellere beweging)
const moveDistance = 10; // Verhoog de bewegingsafstand voor snellere beweging

// Stel de intervaltijd in tussen bewegingen (verlaagd voor snellere respons)
const moveInterval = 20; // Verlaag de intervaltijd voor een snellere respons

let isMoving = false; // Houdt bij of de afbeelding al in beweging is

document.addEventListener("keydown", function (event) {
    if (isMoving) return; // Als de afbeelding al in beweging is, negeer de nieuwe toetsaanslag
    isMoving = true; // Markeer dat de afbeelding in beweging is

    // Functie om de afbeelding te verplaatsen
    function move() {
        if (event.key === "ArrowUp") {
            yPos -= moveDistance;
        } else if (event.key === "ArrowDown") {
            yPos += moveDistance;
        } else if (event.key === "ArrowLeft") {
            xPos -= moveDistance;
        } else if (event.key === "ArrowRight") {
            xPos += moveDistance;
        }

        // Werk de positie van de afbeelding bij
        spidermanImage.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }

    move(); // Voer de eerste beweging uit direct wanneer de toets wordt ingedrukt

    // Herhaal de beweging met een kortere interval voor een vloeiendere en snellere beweging
    const intervalId = setInterval(move, moveInterval);

    // Luister naar het loslaten van de toets om te stoppen met bewegen
    document.addEventListener("keyup", function () {
        clearInterval(intervalId); // Stop het interval
        isMoving = false; // Markeer dat de afbeelding niet meer beweegt
    });
});
