const callToActionBtns = document.querySelectorAll(".mobile__CTA--btn");

//  Capture Button Value IDS
const overviewBtn = document.getElementById("overview-btn");
const structureBtn = document.getElementById("structure-btn");
const surfaceBtn = document.getElementById("surface-btn");

// Capture Planet Value IDS
let planetImg = document.getElementById("planet-img");
let planetName = document.getElementById("planet-name");
let planetDesc = document.getElementById("planet-description");
let wikiSource = document.getElementById("wiki-source");
let rotateTime = document.getElementById("rotate-time");
let revolutionTime = document.getElementById("revolution-time");
let radiusTime = document.getElementById("radius-time");
let averageTime = document.getElementById("average-time");

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(error));
