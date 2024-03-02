document.addEventListener("DOMContentLoaded", function() {
    const buttonBg = document.querySelector(".selector-button__bg");
    if (!buttonBg) {
        console.log("Селектор не найден");
    } else {
        buttonBg.style.backgroundColor = "black";
    }
});
