// Función para alternar el modo claro/oscuro
function toggleSwitch() {
    const switchElement = document.getElementById("Switch");
    const moonImage = document.getElementById("moon");
    const sunImage = document.getElementById("sun");
    const body = document.body;
    const logoImage = document.querySelector("#Logo img");

    // Elementos específicos que cambiarán de color en el modo oscuro
    const emojiText = document.getElementById("Emoji");
    const mainHeading = document.querySelector("h1");
    const initialText = document.getElementById("Initial");

    // Alterna el estado del modo claro/oscuro en el switch
    const isLightMode = switchElement.classList.contains("light");

    if (isLightMode) {
        switchElement.classList.remove("light");
        moonImage.src = "Moon_fill_light.svg";
        sunImage.src = "Sun_fill.svg";
        logoImage.src = "alarado-icon-homepage.svg";
        body.style.backgroundColor = "#ffffff"; // Fondo oscuro

        // Cambia los colores de los textos al modo oscuro
        emojiText.style.color = "#223344";
        mainHeading.style.color = "#223344";
        initialText.style.color = "#223344";
    } else {
        switchElement.classList.add("light");
        moonImage.src = "Moon_fill_light.svg";
        sunImage.src = "Sun_fill.svg";
        logoImage.src = "alarado-icon-homepage-dark.svg";
        body.style.backgroundColor = "#111729"; // Fondo oscuro

        // Cambia los colores de los textos al modo claro
        emojiText.style.color = "#f0f0f0";
        mainHeading.style.color = "#f0f0f0";
        initialText.style.color = "#f0f0f0";
    }
}