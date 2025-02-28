document.querySelector(".icon-menu").addEventListener("click", () => {
    document.body.classList.toggle("lock");
    document.body.classList.toggle("menu-open");
});

const stages = document.querySelectorAll(".body-stages__item");
function activateStages() {
    stages.forEach((stage, index) => {
        setTimeout(() => {
            stage.classList.add("active");
        }, index * 2000);
    });
    setTimeout(() => {
        stages.forEach((stage) => {
            stage.classList.remove("active");
        });
        activateStages();
    }, stages.length * 2000 + 1000);
}
activateStages();

function equalizeHeights() {
    const elements = stages; // Получаем все блоки
    let maxHeight = 0;

    // 1. Сбрасываем высоту (на случай, если уже применяли)
    elements.forEach((el) => (el.style.height = "auto"));

    // 2. Находим максимальную высоту
    elements.forEach((el) => {
        if (el.offsetHeight > maxHeight) {
            maxHeight = el.offsetHeight;
        }
    });

    // 3. Устанавливаем всем элементам одинаковую высоту
    elements.forEach((el) => (el.style.height = maxHeight + "px"));
}

// Вызываем функцию после загрузки контента
window.addEventListener("load", equalizeHeights);
window.addEventListener("resize", equalizeHeights);
// document.querySelectorAll('a[href^="#"').forEach((link) => {
//     link.addEventListener("click", function (e) {
//         e.preventDefault();

//         let href = this.getAttribute("href").substring(1);

//         const scrollTarget = document.getElementById(href);

//         const topOffset = 30;
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: "smooth",
//         });
//     });
// });
