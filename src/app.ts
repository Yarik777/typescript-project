const modal = document.getElementById("modal") as HTMLElement;
const openBtn = document.getElementById("openModal") as HTMLButtonElement;
const closeBtn = document.getElementById("closeModal") as HTMLButtonElement;

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("scroll", () => {
  console.log("Scrolling...");
});

// Fetch example
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function loadPosts(): Promise<void> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await response.json();

  const container = document.getElementById("posts") as HTMLElement;
  container.innerHTML = posts
    .slice(0, 5)
    .map(p => `<div><h3>${p.title}</h3><p>${p.body}</p></div>`)
    .join("");
}

loadPosts();
