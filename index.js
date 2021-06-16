const showcase = document.querySelector(".showcase");
const activeMenu = document.querySelector(".toggle-active");
const hiddenMenu = document.querySelector(".toggle-hidden");
const homeBtn = document.querySelector("#home");
const overlay = document.querySelector("#overlay-screen");
const logo = document.querySelector(".logo");
const text = document.querySelector(".text");
const welcomeText = document.querySelector(".overlay-text");

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

homeBtn.addEventListener("click", () => {
  showcase.classList.remove("showcase-active");
  if (!hiddenMenu.classList.contains("hidden")) {
    activeMenu.classList.toggle("hidden");
    hiddenMenu.classList.toggle("hidden");
  }
  overlay.classList.add("home-overlay");
  overlay.classList.remove("overlay");
  logo.classList.add("invisible");
  text.classList.add("invisible");
  welcomeText.classList.toggle("hidden");
  setTimeout(() => {
    overlay.classList.remove("home-overlay");
    overlay.classList.add("overlay");
    welcomeText.classList.toggle("hidden");
    setTimeout(() => {
      logo.classList.remove("invisible");
      text.classList.remove("invisible");
    }, 100);
  }, 5000);
});


let myIndex = 0;
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

function loadWelcome() {
  overlay.classList.add("home-overlay");
  overlay.classList.remove("overlay");
  logo.classList.add("invisible");
  text.classList.add("invisible");
  welcomeText.classList.toggle("hidden");
  setTimeout(() => {
    overlay.classList.remove("home-overlay");
    overlay.classList.add("overlay");
    welcomeText.classList.toggle("hidden");
    logo.classList.remove("invisible");
    text.classList.remove("invisible");
  }, 5000);
}
