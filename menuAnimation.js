const menuButton = document.querySelector("#menu");
const linksMenu = document.querySelector("#linksMenu");
const upperBar = document.querySelector("#barOne");
const middleBar = document.querySelector("#barTwo");
const lowerBar = document.querySelector("#barThree");
let menuOpen = false

const menuAnimation = [
    { transform: "translateY(-250%) rotate(0)" },
    { transform: "translateY(0%) rotate(-45deg)" }
];
menuButton.addEventListener("click", (e) => {
    const clickClass = e.target.getAttribute("class");

    if (clickClass === "menuButton" || clickClass === "bars") {
        if (!menuOpen) {
            linksMenu.style.animation = "none";
            upperBar.style.animation = "none";
            middleBar.style.animation = "none";
            lowerBar.style.animation = "none";
            linksMenu.offsetHeight;
            upperBar.offsetHeight;
            middleBar.offsetHeight;
            lowerBar.offsetHeight;

            linksMenu.style.animation = "menuSlide 0.25s ease-in-out 1 forwards";
            upperBar.style.animation = "upperBar 0.25s ease-in-out 1 forwards"
            middleBar.style.animation = "middleBar 0.25s ease-in-out 1 forwards"
            lowerBar.style.animation = "lowerBar 0.25s ease-in-out 1 forwards"

            menuOpen = true;
        } else {
            linksMenu.style.animation = "none";
            upperBar.style.animation = "none";
            middleBar.style.animation = "none";
            lowerBar.style.animation = "none";
            linksMenu.offsetHeight;
            upperBar.offsetHeight;
            middleBar.offsetHeight;
            lowerBar.offsetHeight;

            linksMenu.style.animation = "menuSlide 0.25s ease-in-out 1 reverse";
            upperBar.style.animation = "upperBar 0.25s ease-in-out 1 reverse"
            middleBar.style.animation = "middleBar 0.25s ease-in-out 1 reverse"
            lowerBar.style.animation = "lowerBar 0.25s ease-in-out 1 reverse"

            menuOpen = false;
        }
    }
});

verticalLinks.addEventListener("click", (e) => {
    if (e.target.localName === "a") {
        linksMenu.style.animation = "none";
        upperBar.style.animation = "none";
        middleBar.style.animation = "none";
        lowerBar.style.animation = "none";
        linksMenu.offsetHeight;
        upperBar.offsetHeight;
        middleBar.offsetHeight;
        lowerBar.offsetHeight;

        linksMenu.style.animation = "menuSlide 0.25s ease-in-out 1 reverse";
        upperBar.style.animation = "upperBar 0.25s ease-in-out 1 reverse"
        middleBar.style.animation = "middleBar 0.25s ease-in-out 1 reverse"
        lowerBar.style.animation = "lowerBar 0.25s ease-in-out 1 reverse"

        menuOpen = false;
    }
})