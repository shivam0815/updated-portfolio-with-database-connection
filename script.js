document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            alert('Form submitted! This is just a template; the data is not actually sent.');
            // You can add AJAX code to handle form submission on the server.
        });
    }

    const section = document.querySelector("section");
    const icons = document.querySelector(".icons");

    if (icons) {
        icons.onclick = () => {
            section.classList.toggle("");
        };
    }

    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
        contactBtn.addEventListener("click", function() {
            // Open a new tab
            var newTab = window.open("", "_blank");
            
            // Get current date and time
            var currentDate = new Date();
            var dateTime = currentDate.toLocaleString();
            
            // Construct the message
            var message = "Date and Time: " + dateTime + "\n\n";
            message += "Options:\n";
            message += "- Call: +123456789\n";
            message += "- Message: Send a message to this number";
            
            // Write the message to the new tab
            newTab.document.write("<pre>" + message + "</pre>");
        });
    }
});
