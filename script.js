
const botaoDarkMode = document.getElementById("darkMode");


// Ativa e desativa o Dark Mode
botaoDarkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    // Verifica se o Dark Mode está ativo
    if (document.body.classList.contains("dark")) {

        botaoDarkMode.textContent = "☀️ Modo Claro";

    } else {

        botaoDarkMode.textContent = "🌙 Dark Mode";

    }

});


// Botões de interesse
const botoes = document.querySelectorAll(".btn-comprar");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        alert("Obrigado pelo interesse! Um vendedor entrará em contato.");

    });

});
