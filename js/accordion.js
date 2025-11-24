document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Toggle active state on button
            this.classList.toggle('active');
            
            // Get the content panel
            const content = this.nextElementSibling;
            
            // Toggle active state on content
            content.classList.toggle('active');
            
            // Optional: Close other accordions when opening one
            // Uncomment the lines below if you want only one accordion open at a time
            /*
            accordionButtons.forEach(otherButton => {
                if (otherButton !== this) {
                    otherButton.classList.remove('active');
                    otherButton.nextElementSibling.classList.remove('active');
                }
            });
            */
        });
    });
});
