emailjs.init("7N2kWhqDNqjNTPTev");

document.querySelector("#contactCard").addEventListener("submit", function (e) {
    e.preventDefault();
    let submitButton = document.querySelector("#sendMessage");

    emailjs.send("service_mqd455l", "template_z5vc7cf", {
        from_name: document.querySelector("#firstName").value + " " + document.querySelector("#lastName").value,
        from_email: document.querySelector("#email").value,
        number: document.querySelector("#phoneNumber").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    })
    .then(() => {
        submitButton.setAttribute("value", "Message Sent ✓");
        submitButton.blur();
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "green";
        submitButton.style.border = "none";
        submitButton.style.pointerEvents = "none";
    })
    .catch(() => {
        submitButton.setAttribute("value", "Sending Failed ⨉");
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "red";
        submitButton.style.border = "none";
        submitButton.style.pointerEvents = "none";
    });
});
