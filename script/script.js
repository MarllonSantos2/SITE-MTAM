function darkMode() {
    var element = document.body;


    var isDarkMode = element.classList.contains("dark-mode");

    element.classList.toggle("dark-mode");

    localStorage.setItem("darkMode", !isDarkMode);
}

window.onload = function() {
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
};

const lightbox = document.createElement("div");
lightbox.id = "lightbox-bg";
document.body.appendChild(lightbox);

document.querySelectorAll(".zoomable").forEach(img => {
    img.addEventListener("click", () => {
        lightbox.innerHTML = "";
        const clone = img.cloneNode();
        lightbox.appendChild(clone);
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
