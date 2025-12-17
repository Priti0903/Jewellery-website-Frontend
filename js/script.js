const page = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === page) {
    link.classList.add("active");
  }
});

const search = document.querySelector(".search");
if (search) {
  search.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      window.location.href = "gold.html";
    }
  });
}
