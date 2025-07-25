// JavaScript
let myform = document.getElementById('form1');

myform.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('text').value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    myform.reset(); // Clear form
});
