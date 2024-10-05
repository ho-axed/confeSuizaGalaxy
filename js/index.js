const questions = document.querySelector("#questions");

$(".questionsMenu").click(() => {
    questions.classList.toggle("active");
    if (questions.classList.contains("active")) {
        questions.style.display = "flex";
        questions.style.animation = "appear 0.4s forwards";
    } else {
        questions.style.animation = "vanish 0.3s forwards";
        questions.addEventListener(
            "animationend",
            () => {
                questions.style.display = "none";
            },
            { once: true }
        );
    }
});

document.addEventListener("click", (event) => {
    if (
        questions.classList.contains("active") &&
        !questions.contains(event.target) &&
        !event.target.closest(".navBar")
    ) {
        questions.style.animation = "vanish 0.3s forwards";
        questions.addEventListener(
            "animationend",
            () => {
                questions.classList.remove("active");
                questions.style.display = "none";
            },
            { once: true }
        );
    }
});
