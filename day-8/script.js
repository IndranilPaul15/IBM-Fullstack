document.addEventListener("DOMContentLoaded", function () {
    document.body.style.display = "flex";
    document.body.style.height = "100vh";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.backgroundColor = "#202020";
    document.body.style.margin = "0";
    let container = document.getElementById("container");
    container.style.position = "relative";
    container.style.minWidth = "320px";
    container.style.minHeight = "420px";
    container.style.padding = "40px 30px 30px";
    container.style.borderRadius = "20px";
    container.style.boxShadow = "25px 25px 75px rgba(0, 0, 0, 0.25), 10px 10px 70px rgba(0, 0, 0, 0.25), inset -5px -5px 15px rgba(0, 0, 0, 0.25), inset 5px 5px 15px rgba(0, 0, 0, 0.25)";
    let calculator = document.getElementById("calculator");
    calculator.style.display = "grid";
    calculator.style.gridTemplateColumns = "repeat(4, 1fr)";
    calculator.style.justifyContent = "center";
    calculator.style.alignItems = "center";

    let valueField = document.getElementById("value");
    valueField.style.gridColumn = "span 4";
    valueField.style.height = "100px";
    valueField.style.width = "100%";
    valueField.style.border = "none";
    valueField.style.outline = "none";
    valueField.style.backgroundColor = "#a7af7c";
    valueField.style.marginBottom = "10px";
    valueField.style.borderRadius = "10px";
    valueField.style.boxShadow = "0 0 0 2px rgba(0, 0, 0, 0.75)";
    valueField.style.textAlign = "right";
    valueField.style.fontSize = "2em";

    function styleButton(id, bgColor = "linear-gradient(180deg, #2f2f2f, #3f3f3f)") {
        let button = document.getElementById(id);
        button.style.color = "#fff";
        button.style.display = "grid";
        button.style.width = "70px";
        button.style.height = "70px";
        button.style.placeItems = "center";
        button.style.margin = "5px";
        button.style.background = bgColor;
        button.style.boxShadow = "inset -8px 0 8px rgba(0, 0, 0, 0.15), inset 0 -8px 8px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75), 10px 20px 25px rgba(0, 0, 0, 0.4)";
        button.style.borderRadius = "10px";
        button.style.cursor = "pointer";
        button.style.userSelect = "none";
        button.style.fontWeight = "700";
        button.style.fontFamily = `"Courier New", Courier, monospace`;
        button.style.fontSize = "1.5em";
        button.style.textTransform = "uppercase";

        button.addEventListener("mouseenter", () => button.style.filter = "brightness(1.2)");
        button.addEventListener("mouseleave", () => button.style.filter = "none");
        button.addEventListener("mousedown", () => button.style.filter = "brightness(1.5)");
        button.addEventListener("mouseup", () => button.style.filter = "none");
    }
    let buttonIds = [
        "clear", "divide", "multiply", "seven", "eight", "nine", "minus",
        "four", "five", "six", "plus", "one", "two", "three", "zero",
        "doubleZero", "dot", "equal"
    ];

    buttonIds.forEach(id => styleButton(id));
    document.getElementById("clear").style.gridColumn = "span 2";
    document.getElementById("clear").style.background = "#f00";
    document.getElementById("plus").style.gridRow = "span 2";
    document.getElementById("plus").style.height = "150px";
    document.getElementById("equal").style.background = "#2196f3";

    if (window.innerWidth <= 400) {
        container.style.minWidth = "280px";
        container.style.minHeight = "380px";

        buttonIds.forEach(id => {
            let btn = document.getElementById(id);
            btn.style.width = "65px";
            btn.style.height = "65px";
            btn.style.fontSize = "1.2em";
        });
    }
});
