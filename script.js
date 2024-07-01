document.addEventListener("DOMContentLoaded", function() {
    var message = "ChatGpt";
    var welcomeMessage = document.getElementById("welcome-message");
    var index = 0;

    function typeWriter() {
        if (index < message.length) {
            welcomeMessage.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Καθυστερήση 100ms μεταξύ των χαρακτήρων
        }
    }

    typeWriter();
});
