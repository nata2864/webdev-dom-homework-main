export function initComments(comments, escapeHTML) {
  const commentsList = document.querySelector(".comments");
  if (!commentsList) {
    throw new Error("Element '.comments' not found");
  }

  const inputName = document.querySelector(".add-form-name");
  const inputComment = document.querySelector(".add-form-text");

  commentsList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("like-button")) {
      const index = target.dataset.index;
      const comment = comments[index];

      comment.isLiked = !comment.isLiked;
      comment.likes += comment.isLiked ? 1 : -1;

      const commentElement = target.closest(".comment");
      const likesCounter = commentElement.querySelector(".likes-counter");
      likesCounter.textContent = comment.likes;
      target.classList.toggle("-active-like", comment.isLiked);
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
