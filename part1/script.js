console.log("page loading...");

var likeCount = 3;

function like(id) {
    likeCount++;
    NumLikes.innerText = likeCount + " like(s) ";
}