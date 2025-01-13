

const API_URL = 'https://wedev-api.sky.pro/api/v1/natalia-bashirova/comments';

export function fetchCommentsAndRender(renderCallback, initCallback) {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка при загрузке комментариев");
        }
        return response.json(); // Преобразуем ответ в формат JSON
      })
      .then((data) => {
        renderCallback(data.comments);
        initCallback(data.comments);
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
        throw new Error("Ошибка при добавлении комментария");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Ответ от сервера:", data);
      return data.comment || null; // Возвращаем комментарий, который создал сервер
    })
    .catch((error) => {
      console.error("Ошибка добавления комментария:", error.message);
      return null;
    });
  }