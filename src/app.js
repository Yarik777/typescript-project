"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});
async function loadPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const container = document.getElementById("posts");
    container.innerHTML = posts
        .slice(0, 5)
        .map(p => `<div><h3>${p.title}</h3><p>${p.body}</p></div>`)
        .join("");
}
loadPosts();
//# sourceMappingURL=app.js.map