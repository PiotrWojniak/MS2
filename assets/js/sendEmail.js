function sendMail(contactForm){
    emailjs.send("piotr", "LearnTest", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "inforequest": contactForm.inforequest.value,
    })
    .then(
        function(response) {
            console.log("Success", response);
        },
    function(error){
        console.log("Failed", error);
    });
}