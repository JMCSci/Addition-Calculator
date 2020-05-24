// addOne: Adds numbes from 1 to 100;
function addOne() {
    var x = 0;
    for (i = 1; i <= 100; i++) {
        x += i;
    }
    alert(x);
}


// addNumbers: Gets numbers from textfield and add them
function add() {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;
    var z = parseFloat(x) + parseFloat(y);
    alert(z);
}

// date: Displays date
function currentDate() {
    return new Date();
}
document.getElementById("todaydate").innerHTML = currentDate();

