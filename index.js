const showcase = document.querySelector(".showcase");
const activeMenu = document.querySelector(".toggle-active");
const hiddenMenu = document.querySelector(".toggle-hidden");

activeMenu.addEventListener("click", () => {
  showcase.classList.add("showcase-active");
  if (!activeMenu.classList.contains("hidden")) {
    activeMenu.classList.toggle("hidden");
    hiddenMenu.classList.toggle("hidden");
  }
});

hiddenMenu.addEventListener("click", () => {
  showcase.classList.remove("showcase-active");
  if (!hiddenMenu.classList.contains("hidden")) {
    activeMenu.classList.toggle("hidden");
    hiddenMenu.classList.toggle("hidden");
  }
});

let myIndex = 0;
carousel();

function carousel() {
  let imgs = document.getElementsByClassName("slides");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > imgs.length) {
    myIndex = 1;
  }
  imgs[myIndex - 1].style.display = "block";
  setTimeout(carousel, 10000); // Change image every 2 seconds
}
