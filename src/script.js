import { comments } from "./mocks.js";
import { escapeHTML } from "./utils.js";
import { renderComments } from "./render-comments.js";
import { initComments } from "./comments-listener.js";
import { addComments } from "./add-comments.js";

initComments(comments, escapeHTML);

addComments(comments);

renderComments();
