
import { renderComments } from "./render-comments.js";
import { initComments } from "./comments-listener.js";
import { addComments } from "./add-comments.js";
import { fetchCommentsAndRender } from "./api.js";


const comments = [];


fetchCommentsAndRender((fetchedComments) => {
    renderComments(fetchedComments); // Рендерим комментарии
  }, initComments, comments); 

addComments(comments);