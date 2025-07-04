const header = document.getElementById("header");
const mainViews = document.querySelectorAll(".main-view");

function handleScroll() {
    if (!header || mainViews.length === 0) return;

    const scrollY = window.scrollY;
    let isInsideAnySection = false;

    mainViews.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
            isInsideAnySection = true;
        }
    });

    if (isInsideAnySection) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
}

window.addEventListener("scroll", handleScroll);
document.addEventListener("DOMContentLoaded", handleScroll); // gọi ngay nếu vào giữa section
