document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('.Course-Thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            const url = thumbnail.getAttribute('data-url'); // Get the URL from the data-url attribute
            if (url) {
                window.location.href = url; // Redirect to the specified URL
            }
        });
    });
});