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

const tabButtons = document.querySelectorAll(".body-sertificates__buttons-item");
const tabContents = document.querySelectorAll(".body-sertificates__item");

if (tabButtons && tabContents) {
    tabButtons.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
            const tabId = tabBtn.getAttribute("data-id");

            tabButtons.forEach((btn) => btn.classList.remove("active"));
            tabBtn.classList.add("active");

            tabContents.forEach((content) => {
                content.classList.remove("active");

                if (content.id === tabId) {
                    content.classList.add("active");
                }
            });
        });
    });
}

// showmore

const certificatesShowMore = document.querySelector(".body-sertificates__showmore");
const teamsShowMore = document.querySelector(".body-teams__showmore");

const hiddenElementsCertificates = document.querySelectorAll(
    ".body-sertificates__buttons-item.hidden"
);
const hiddenElementsTeams = document.querySelectorAll(".item-teams.hidden");

function showMore(elementList, event) {
    const isHidden = elementList[0].classList.contains("hidden");

    elementList.forEach((element) => {
        element.classList.toggle("hidden");
    });

    event.target.textContent = isHidden ? "Скрыть" : "Показать ещё";
}

certificatesShowMore.addEventListener("click", function (event) {
    showMore(hiddenElementsCertificates, event);
});

teamsShowMore.addEventListener("click", function (event) {
    showMore(hiddenElementsTeams, event);
});
