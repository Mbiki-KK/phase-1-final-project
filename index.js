// Get DOM elements for photo area and generate button
const photoArea = document.getElementById("Photo-area");
const generateBtn = document.getElementById("photo-gen");

// Add click event listener to generate button
generateBtn.addEventListener("click", () => {

    // Fetch a random image from picsum.photos API
  fetch("https://picsum.photos/600/400")
    .then((response) => {
      // Set the fetched image as the inner HTML of the photo area
      photoArea.innerHTML = `<img src="${response.url}" alt="Generated Photo">`;
      console.log('Image generated');
    })
    .catch((error) => {
      console.log(error);
    });
});
// Get DOM elements for like button and like count
const likeBtn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count");
let likes = 0;

// Add click event listener to like button
likeBtn.addEventListener("click", () => {
  // Increment likes count and update like count text content
  likes++;
  likeCount.textContent = `${likes} ${likes === 1 ? 'like' : 'likes'}`;
  likeBtn.classList.add("liked");
});

// Get DOM elements for add comment button and comment input
const addCommentBtn = document.getElementById("add-comment");
const commentInput = document.querySelector("form input");
const commentsCont = document.getElementById("comments-cont");

// Add click event listener to add comment button
addCommentBtn.addEventListener("click", () => {
  event.preventDefault();
  const commentText = commentInput.value;
  if (commentText !== "") {
    // Create a new paragraph element for the comment
    const comment = document.createElement("p");
    comment.textContent = commentText;
    // Append the comment to the comments container and clear the comment input
    commentsCont.appendChild(comment);
    commentInput.value = "";
  }
});

