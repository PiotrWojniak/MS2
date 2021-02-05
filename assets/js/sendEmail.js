// Function adapted from CI tutorial for emailjs in mini-project walkthrough
function sendMail(contactForm) {
    emailjs.send("piotr", "LearnTest", {
        "from_name": contactForm.name.value,
        "from_emailaddress": contactForm.emailaddress.value,
        "request_inforequest": contactForm.inforequest.value,
       
    })
        .then(
            // display popup window after send message
                function (response) {
                    alert("Thank you", response);
                    
                },
            // On error, using standard browser alert
            function (error) {
                alert("Sorry, it seems we have a problem. Please fill out the form and Submit again", error);
            });
            // Clear form after submission
            document.getElementById('contactForm').reset();
    return false;
}