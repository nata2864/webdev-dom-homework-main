

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
