document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelectorAll('.question').forEach((question) => {
        question.addEventListener("click", () => {
            let answer = question.parentElement.children[2];
            let height = answer.style.height;
            if (height === "" || height === 0 || height === "0px") {
                console.log(true);
                answer.style.height = `${answer.scrollHeight}px`;
                question.parentElement.children[0].style.transform = "rotate(180deg)";
                question.style.color = "#4154f1";
                question.parentElement.children[0].style.color = "#4154f1";
            }
            else {
                answer.style.height = "0px";
                question.parentElement.children[0].style.transform = "rotate(0deg)";
                question.style.color = "#333";
                question.parentElement.children[0].style.color = "#333";
            }
        })
    })
    $('#pf-cards').mixItUp();
});