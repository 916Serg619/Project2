// const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();
$(document).ready(() => {
    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", event => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
    });

    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(email, password) {
        $.post("/api/login", {
                email: email,
                password: password
            })
            .then(() => {
                window.location.replace("/members");
                // If there's an error, log the error
            })
            .catch(err => {
                console.log(err);
            });
    }
});


//GSAP//
var tl = gsap.timeline({ defaults: { duration: 0.5 } })



tl.from(".logForm", { y: -50, stagger: 0.2, opacity: 0 })
    .from(".form-group", { y: -50, stagger: 0.2, opacity: 0 })
    .from(".btn", { y: -50, opacity: 0, }, )
    .from(".newSign", { y: -50, opacity: 0 })
    .from(".navbar", { x: -100, stagger: 0.2, opacity: 0 })

document.getElementById('btn-success').addEventListener('click', () => {
    tl.reversed() ? tl.play() : tl.reverse();
})