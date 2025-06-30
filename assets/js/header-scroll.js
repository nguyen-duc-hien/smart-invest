// header scroll script
document.addEventListener("scroll", function () {
    const headerPC = document.querySelector(".header-pc");
    const headerMobile = document.querySelector(".header-mobile");
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight / 2;

    if (scrollY >= viewportHeight) {
        headerPC?.classList.add("header-active");
        headerMobile?.classList.add("header-active");
    } else {
        headerPC?.classList.remove("header-active");
        headerMobile?.classList.remove("header-active");
    }
});