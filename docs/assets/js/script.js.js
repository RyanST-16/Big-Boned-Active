// Simple JavaScript to add interactivity to the website

// Example: Changing the background color of a card when clicked
document.querySelectorAll('.card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.style.backgroundColor = '#f0f0f0'; // Change background color to light grey on click
    });
});
