function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Add event listener to a button with the id "toggleDarkModeBtn"
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleDarkModeBtn");

    if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
    }
});