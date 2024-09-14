
let likeCount = 0;

function updateLikeCount() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
}

document.getElementById('like-button').addEventListener('click', function (event) {
    event.preventDefault();
    updateLikeCount();
});
// script.js

document.getElementById('education-link').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default link action

    // Toggle dropdown menu visibility
    const menu = document.getElementById('education-menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Close dropdown if clicking outside
window.addEventListener('click', function (event) {
    const menu = document.getElementById('education-menu');
    const button = document.getElementById('education-link');
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});
