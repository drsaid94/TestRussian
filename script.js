let tg = window.Telegram.WebApp; // Подключаем API Telegram

tg.expand(); // Разворачиваем Web App на весь экран

document.getElementById("username").innerText = tg.initDataUnsafe.user?.first_name || "гость";

document.getElementById("sendData").addEventListener("click", () => {
    tg.sendData("Привет от мини-приложения!"); // Отправка данных в бот
    tg.close(); // Закрыть Web App
});
