// import { comments } from "./mocks.js";
import { renderComments } from "./render-comments.js";
import { initComments } from "./comments-listener.js";
// import { addComments } from "./add-comments.js";
// import { fetchComments } from "./api.js";
import { fetchCommentsAndRender } from "./api.js";


// addComments(comments);

fetchCommentsAndRender(renderComments, initComments);
// fetchCommentsAndRender(initComments);