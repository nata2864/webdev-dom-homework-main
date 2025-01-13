import { renderComments } from "./render-comments.js";
import { postComment } from "./api.js";





export function addComments(comments) {


  const inputName = document.querySelector(".add-form-name");
  const inputComment = document.querySelector(".add-form-text");
  const button = document.querySelector(".add-form-button");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    const name = inputName.value.trim();
    const text = inputComment.value.trim();

    if (!name || !text) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
    const currentDateTime = new Date().toLocaleString();

    const newComment = {
      name: inputName.value,
      date: currentDateTime,
      text: inputComment.value,
      likes: 0,
      isLiked: false,
    };

    button.disabled = true;

    postComment(newComment)
    .then((createdComment) => {
      if (createdComment) {
        // Добавляем комментарий, возвращенный сервером, в список
        comments.push(createdComment);
        renderComments(comments);
      }
    })
    .catch(() => {
      alert("Не удалось отправить комментарий, попробуйте ещё раз.");
    })
    .finally(() => {
      // Разблокируем кнопку и очищаем форму
      button.disabled = false;
      inputName.value = "";
      inputComment.value = "";
    });
});
}