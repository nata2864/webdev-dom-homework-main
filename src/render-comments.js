import { comments } from "./mocks.js";
import { escapeHTML } from "./utils.js";

const commentsList = document.querySelector(".comments");

export const renderComments = () => {
  commentsList.innerHTML = "";
  comments.forEach((comment, index) => {
    const className = comment.isLiked
      ? "like-button -active-like"
      : "like-button";
    const commentHTML = `
        <li class="comment" data-index="${index}">
          <div class="comment-header">
            <div>${escapeHTML(comment.name)}</div>
            <div>${escapeHTML(comment.date)}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${escapeHTML(comment.text)}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="${className}" data-index="${index}"></button>
            </div>
          </div>
        </li>`;
    commentsList.innerHTML += commentHTML;
  });
};
