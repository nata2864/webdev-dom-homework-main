export function initComments(comments, escapeHTML) {

  console.log("Комментарии:", comments);
  const commentsList = document.querySelector(".comments");
  console.log(commentsList);

  if (!commentsList) {
    throw new Error("Element '.comments' not found");
  }

  const inputName = document.querySelector(".add-form-name");
  const inputComment = document.querySelector(".add-form-text");

  commentsList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("like-button")) {
      const id = target.dataset.id; 


    const comment = comments.find((comment) => comment.id === parseInt(id)); 
    if (!comment) {
      console.error("Comment not found");
      return;
    }

      comment.isLiked = !comment.isLiked;
      comment.likes += comment.isLiked ? 1 : -1;

      const commentElement = target.closest(".comment");
      const likesCounter = commentElement.querySelector(".likes-counter");
      const likeButton = commentElement.querySelector(".like-button");

      likeButton.className = comment.isLiked
      ? "like-button -active-like"
      : "like-button";

    likesCounter.textContent = comment.likes;
      return;
    }

    const commentElement = target.closest(".comment");
    if (commentElement) {
      const index = commentElement.dataset.index;
      const comment = comments[index];

      inputComment.value = `> ${escapeHTML(comment.text)}\n\n`;
      inputName.value = escapeHTML(comment.name);
    }
  });
}