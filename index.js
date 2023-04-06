const photoArea = document.getElementById("Photo-area");
const generateBtn = document.getElementById("photo-gen");

generateBtn.addEventListener("click", () => {
  fetch("https://picsum.photos/600/400")
    .then((response) => {
      photoArea.innerHTML = `<img src="${response.url}" alt="Generated Photo">`;
      console.log('Image generated');
    })
    .catch((error) => {
      console.log(error);
    });
});

const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");
let likes = 0;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = `${likes} ${likes === 1 ? 'like' : 'likes'}`;
  likeBtn.classList.add("liked");
});

const addCommentBtn = document.getElementById("add-comment");
const commentInput = document.querySelector("form input");
const commentsCont = document.getElementById("comments-cont");

addCommentBtn.addEventListener("click", () => {
  event.preventDefault();
  const commentText = commentInput.value;
  if (commentText !== "") {
    const comment = document.createElement("p");
    comment.textContent = commentText;
    commentsCont.appendChild(comment);
    commentInput.value = "";
  }
});

