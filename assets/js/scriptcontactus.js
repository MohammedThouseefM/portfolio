(function () {
    emailjs.init("XY0FxSoyRpCtcyqYN"); // Make sure this key is correct
})();

function sendMail(event) {
    event.preventDefault(); // Prevent form from refreshing

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_hyosvl3", "template_vmqxwbe", parms)
        .then(response => {
            alert("Email sent successfully!");
            console.log("SUCCESS", response);
        })
        .catch(error => {
            alert("Failed to send email.");
            console.error("ERROR", error);
        });
}