document.addEventListener("scroll", function () {
    let text = document.querySelector(".scroll-text");
    let textPosition = text.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if (textPosition < screenPosition) {
        text.classList.add("show");
    }
});