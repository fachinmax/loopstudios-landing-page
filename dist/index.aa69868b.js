const btn = document.querySelector("#menubar-button");
const navbar = document.querySelector("#header-nav");
const logo = document.querySelector(".logo");
btn.addEventListener("click", (e)=>{
    let menunavButton = e.target;
    if (menunavButton.getAttribute("aria-pressed") === "false") {
        menunavButton.setAttribute("aria-pressed", "true");
        menunavButton.setAttribute("aria-expanded", "true");
        navbar.setAttribute("data-visual", "true");
        logo.classList.toggle("position-fixed");
    } else {
        menunavButton.setAttribute("aria-pressed", "false");
        menunavButton.setAttribute("aria-expanded", "false");
        navbar.setAttribute("data-visual", "false");
        logo.classList.toggle("position-fixed");
    }
});

//# sourceMappingURL=index.aa69868b.js.map
