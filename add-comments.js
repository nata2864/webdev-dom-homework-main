import { renderComments } from "./render-comments.js";

const inputName = document.querySelector(".add-form-name");
const inputComment = document.querySelector(".add-form-text");
const button = document.querySelector(".add-form-button");


export function addComments (comments) {
    button.addEventListener("click", (event) => {
        event.preventDefault();
      
        if (inputName.value.trim() === "" || inputComment.value.trim() === "") {
          alert("Пожалуйста, заполните все поля.");
          return;
        }
      
        const currentDateTime = new Date().toLocaleString();
        comments.push({
          name: inputName.value,
          date: currentDateTime,
          text: inputComment.value,
          likes: 0,
          isLiked: false,
        });
      
        inputName.value = "";
        inputComment.value = "";
        renderComments();
      });
}