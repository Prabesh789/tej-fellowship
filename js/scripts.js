alert("Hello TEJ !");

function helloMessage() {
    alert("Hello there !");
}

var data = 0;

// initial state
document.getElementById("result").innerHTML = data;

// when + button clicked
function valueIncrement() {
    data = data + 1;
    document.getElementById("result").innerHTML = data;
}

// when - button clicked
function valueDecrement() {
    data = data - 1;
    document.getElementById("result").innerHTML = data;
}

