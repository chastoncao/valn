const yesBtn = document.querySelector(".yesButton");
const noBtn = document.querySelector(".noButton");
const mainPhoto = document.querySelector(".mainPhoto");

const originalSrc = mainPhoto.src;

yesBtn.addEventListener("mouseenter", () => {
  mainPhoto.src = "images/gomaHappyCat.gif";
});

noBtn.addEventListener("mouseenter", () => {
  mainPhoto.src = "images/gomaSadCat.gif";
});


yesBtn.addEventListener("mouseleave", () => {
  mainPhoto.src = originalSrc;
});

noBtn.addEventListener("mouseleave", () => {
  mainPhoto.src = originalSrc;
});

//click
noBtn.addEventListener("click", () => {
  window.location.href = "Noindex.html";
});

yesBtn.addEventListener("click", () => {
  window.location.href = "Yesindex.html";
});