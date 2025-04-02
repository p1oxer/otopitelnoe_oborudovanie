// header ========
document.querySelector(".icon-menu").addEventListener("click", () => {
    document.body.classList.toggle("lock");
    document.body.classList.toggle("menu-open");
});
document.querySelector(".menu-icon-close").addEventListener("click", () => {
    document.body.classList.remove("lock");
    document.body.classList.remove("menu-open");
});
//scrollTo =========
document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        let href = this.getAttribute("href").substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 30;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});

// stages ==============
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
    const elements = stages;
    let maxHeight = 0;

    elements.forEach((el) => (el.style.height = "auto"));

    elements.forEach((el) => {
        if (el.offsetHeight > maxHeight) {
            maxHeight = el.offsetHeight;
        }
    });

    elements.forEach((el) => (el.style.height = maxHeight + "px"));
}

window.addEventListener("load", equalizeHeights);
window.addEventListener("resize", equalizeHeights);

// tabs ==========
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

// showmore ==========
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

// dropdown

document.querySelector(".dropdown-button").addEventListener("click", function () {
    document.getElementById("dropdown").classList.toggle("show");
    this.classList.toggle("active");
});

window.onclick = function (event) {
    if (
        !event.target.matches(".dropdown-button") &&
        !event.target.matches(".dropdown-button-icon")
    ) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
                document.querySelector(".dropdown-button").classList.remove("active");
            }
        }
    }
};
