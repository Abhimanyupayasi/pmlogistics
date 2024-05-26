const navigationButtons = document.querySelectorAll('.call-about');

// Add a click event listener to all elements with the class name 'navigationButton'
navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to index.html when any button is clicked
        const phoneNumber = '+917000129266';
        window.location.href = 'tel:' + phoneNumber;
    });
});
const whatsappElements = document.querySelectorAll('.whatsapp-about');

        // Add click event listener to each element
        whatsappElements.forEach(element => {
            element.addEventListener('click', () => {
                // Get phone number and message from data attributes
                const phoneNumber = element.getAttribute('data-phone');
                const message = element.getAttribute('data-message');

                // Generate the WhatsApp message URL
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

                // Open WhatsApp with the pre-filled message
                window.open(whatsappUrl);
            });
        });

               // Get all elements with the class name 'message-about'
const messageElements = document.querySelectorAll('.message-about');

// Phone number to send SMS messages
const phoneNumber = '+917000129266';
       
// Add click event listener to each element
messageElements.forEach(element => {
    element.addEventListener('click', () => {
    // Open SMS app with the specified phone number
        window.open(`sms:${phoneNumber}`);
                   });
    });

    const mailElements = document.querySelectorAll('.mail-about');

    // Email address to send messages
    const emailAddress = 'abhimanyupayasi01@gmail.com';

    // Add click event listener to each element
    mailElements.forEach(element => {
        element.addEventListener('click', () => {
            // Generate the mailto link with the specified email address and message
            const subject = 'Message from Website';
            const body = 'Hello, I am contacting you from your website!';
            const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open default email client with pre-filled message
            window.location.href = mailtoLink;
        });
    });
    const homeAboutDivs = document.querySelectorAll('.home-about');

    // Add click event listener to each element
    homeAboutDivs.forEach(div => {
        div.addEventListener('click', () => {
            // Redirect to index.html when any div is clicked
            window.location.href = 'index.html';
        });
    });
    
