document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger");
    const navMenu = document.querySelector(".navigation"); 

    burger.addEventListener("click", function () {
        navMenu.classList.toggle("active"); // Добавляем/удаляем класс active
    });
});
