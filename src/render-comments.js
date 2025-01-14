
import { initComments } from "./comments-listener.js";
import { escapeHTML } from "./utils.js";

const commentsList = document.querySelector(".comments");
commentsList.innerHTML = ""; 

export const renderComments = (comments) => {
  
  comments.forEach((comment) => {
    const authorName = comment.author?.name || "Аноним"; 
    const commentDate = comment.date
      ? new Date(comment.date).toLocaleString()
      : "Дата неизвестна"; 

    const className = comment.isLiked
      ? "like-button -active-like"
      : "like-button";

    const commentHTML = `
        <li class="comment" data-id="${comment.id}">
          <div class="comment-header">
            <div>${escapeHTML(authorName)}</div>
            <div>${escapeHTML(commentDate)}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${escapeHTML(comment.text || "Нет текста")}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes || 0}</span>
              <button class="${className}" data-id="${comment.id}"></button>
            </div>
          </div>
        </li>`;
    commentsList.innerHTML += commentHTML;
  });
  initComments(comments, escapeHTML)
};


