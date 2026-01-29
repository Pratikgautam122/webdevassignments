const colorBox = document.getElementById("colorBox");
const colorPicker = document.getElementById("colorPicker");
const resetBtn = document.getElementById("resetBtn");

colorPicker.addEventListener("input", () => {
    colorBox.style.backgroundColor = colorPicker.value;
});

resetBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = "lightgray";
});
