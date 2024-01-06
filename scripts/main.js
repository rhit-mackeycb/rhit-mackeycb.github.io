function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleDarkModeBtn");

    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }
});