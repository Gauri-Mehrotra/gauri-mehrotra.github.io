const cards = document.querySelectorAll(".cards");
const horizontalLinks = document.querySelector("#horizontalLinks");
const verticalLinks = document.querySelector("#verticalLinks");
const navigators = document.querySelectorAll(".navigators");
const children1 = Array.from(navigators[0].children);
const children2 = Array.from(navigators[1].children);

let ignoreObserver = false;

const obs1 = new IntersectionObserver((e) => {
    if (!ignoreObserver) {
        e.forEach((v) => {
            if (v.isIntersecting) {
                document.querySelectorAll(".anchors").forEach((e) => {
                    e.classList.remove("active");
                });
                document.querySelector(`#${v.target.getAttribute("id").replace("Card", "Link")}`).classList.add("active");
                document.querySelector(`#${v.target.getAttribute("id").replace("Card", "Link")}Menu`).classList.add("active");
            }
        });
    }
}, { threshold: 0.7 });

cards.forEach((card) => {
    obs1.observe(card);
});

horizontalLinks.addEventListener("click", (e) => {
    ignoreObserver = true;
    if (e.target.localName === "div") return;

    document.querySelectorAll(".anchors").forEach((e) => {
        e.classList.remove("active");
    });

    const relation = e.target.getAttribute("value");
    e.target.classList.add("active");
    if (relation != null) {
        document.querySelector(`#${relation}`).scrollIntoView();
    }
    setTimeout(() => {
        ignoreObserver = false;
    }, 500);
});

verticalLinks.addEventListener("click", (e) => {
    if (e.target.localName === "div") return;

    document.querySelectorAll(".anchors").forEach((e) => {
        e.classList.remove("active");
    });

    const relation = e.target.getAttribute("value");
    e.target.classList.add("active");
    if (relation != null) {
        document.querySelector(`#${relation}`).scrollIntoView();
    }
});

document.querySelector("#contactButton").addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView();
});

navigators[0].addEventListener("click", (e) => {
    if (e.target.localName === "a") {
        let children = Array.from(navigators[0].children);

        children.forEach((v) => {
            v.classList.remove("active");
        });

        e.target.classList.add("active");
    }
});

navigators[1].addEventListener("click", (e) => {
    if (e.target.localName === "a") {
        let children = Array.from(navigators[1].children);

        children.forEach((v) => {
            v.classList.remove("active");
        });

        e.target.classList.add("active");
    }
});