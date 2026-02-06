const yesBtn = document.querySelector(".yesButton");
const noBtn = document.querySelector(".noButton");
const mainPhoto = document.querySelector(".mainPhoto");

yesBtn.addEventListener("mouseenter", () => {
  mainPhoto.src = "images/gomaHappyCat.gif";
});

noBtn.addEventListener("mouseenter", () => {
  mainPhoto.src = "images/gomaSadCat.gif";
});


yesBtn.addEventListener("mouseleave", () => {
  mainPhoto.src = "images/MainCat.avif";
});

noBtn.addEventListener("mouseleave", () => {
  mainPhoto.src = "images/MainCat.avif";
});

//click
noBtn.addEventListener("click", () => {
  window.location.href = "Noindex.html";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "Yesindex.html";
});