let name = prompt("What is your name?", "");
let age = prompt("What is your age?", "");

if (age < 18) {
    alert("You are not allowed to visit this website.")
};
if (age >= 18 && age <= 22) {
    confirm("Are you sure you want to continue?")
    if (true) {
        alert("Welcome, " + name)
    } else {
        alert("You are not allowed to visit this website.")
    }
};
if (age > 22) {
    alert("Welcome, " + name);
};
