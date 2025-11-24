//Modo escuro
function darkMode() {
    var element = document.body;

    // Verifica se o modo escuro está ativado atualmente
    var isDarkMode = element.classList.contains("dark-mode");

    // Inverte o estado do modo escuro
    element.classList.toggle("dark-mode");

    // Atualiza o estado no localStorage
    localStorage.setItem("darkMode", !isDarkMode);
}

// Verifica se o modo escuro estava ativado ao carregar a página anteriormente
window.onload = function() {
    var isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
};
 