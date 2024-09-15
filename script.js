
let likeCount = 0;

function updateLikeCount() {
    likeCount++;
    document.getElementById('like-count').innerText = likeCount;
}

document.getElementById('like-button').addEventListener('click', function (event) {
    event.preventDefault();
    updateLikeCount();
});