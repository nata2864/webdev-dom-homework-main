import { renderComments } from "./render-comments.js";

const API_URL = "https://wedev-api.sky.pro/api/v1/natalia-bashirova/comments";

export function fetchCommentsAndRender() {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка при загрузке комментариев");
      }
      return response.json(); // Преобразуем ответ в формат JSON
    })
    .then((data) => {
      renderComments(data.comments);
    })
    .catch((error) => {
      console.error("Ошибка при загрузке комментариев:", error.message);
    });
}

export function postComment(newComment) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(newComment),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Ошибка при добавлении комментария: ${response.statusText}`
        );
      }
      return response.json(); // Преобразуем ответ в формат JSON
    })
    .then((data) => {
      console.log("Ответ от сервера:", data);
      return data; // Здесь можете вернуть ответ от сервера, если он нужен
    })
    .catch((error) => {
      console.error("Ошибка добавления комментария:", error.message);
      return null; // Возвращаем null в случае ошибки
    });
}
