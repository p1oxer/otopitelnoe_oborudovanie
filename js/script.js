document.querySelector(".icon-menu").addEventListener("click", () => {
    document.body.classList.toggle("lock");
    document.body.classList.toggle("menu-open");
});

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
