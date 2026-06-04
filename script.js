const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function appendFunction(func) {
    display.value += func;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {

        let expression = display.value;

        expression = expression.replace(
            /sin\(([^)]+)\)/g,
            (_, x) => Math.sin(x * Math.PI / 180)
        );

        expression = expression.replace(
            /cos\(([^)]+)\)/g,
            (_, x) => Math.cos(x * Math.PI / 180)
        );

        expression = expression.replace(
            /tan\(([^)]+)\)/g,
            (_, x) => Math.tan(x * Math.PI / 180)
        );

        expression = expression.replace(
            /sqrt\(([^)]+)\)/g,
            (_, x) => Math.sqrt(x)
        );

        expression = expression.replace(
            /log\(([^)]+)\)/g,
            (_, x) => Math.log10(x)
        );

        expression = expression.replace(
            /ln\(([^)]+)\)/g,
            (_, x) => Math.log(x)
        );

        display.value = eval(expression);

    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){

    const key = event.key;

    if(
        (key >= "0" && key <= "9") ||
        "+-*/.%()".includes(key)
    ){
        display.value += key;
    }

    if(key === "Enter"){
        calculate();
    }

    if(key === "Backspace"){
        deleteLast();
    }

    if(key === "Escape"){
        clearDisplay();
    }
});