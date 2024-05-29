// When the page is fully loaded
window.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class 'element'
    var elements = document.querySelectorAll('.element');

    // When the user scrolls or resizes the window
    window.addEventListener('scroll', function() {
        // Loop through each element
        elements.forEach(function(element) {
            // If the element is in the viewport
            if (isElementInViewport(element)) {
                // Make it visible
                element.classList.add('visible');
            }
        });
    });

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        // If the top of the element is less than 75% of the viewport height and the bottom of the element is greater than 0
        return rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
    }
});



/*
getBoundingClientRect() provides information about
an element's position relative to the viewport. 
This allows you to determine whether the element 
is currently visible on the screen or */