"use strict";

const callToActionBtns = document.querySelectorAll(".mobile__CTA--btn");
const toggleBtn = document.querySelector(".toggle-button");
const navBarLink = document.querySelector(".navbar__links--ul");
const menuBtn = document.querySelectorAll(".navbar__links--li");

//  Capture Button Value IDS
const overviewBtn = document.getElementById("overview-btn");
const structureBtn = document.getElementById("structure-btn");
const surfaceBtn = document.getElementById("surface-btn");

// Capture Planet Value IDS
let planetImg = document.getElementById("planet-img");
let planetGeoImg = document.getElementById("geo-img");
let planetName = document.getElementById("planet-name");
let planetDesc = document.getElementById("planet-description");
let wikiSource = document.getElementById("wiki-source");
let rotateTime = document.getElementById("rotate-time");
let revolutionTime = document.getElementById("revolution-time");
let radiusTime = document.getElementById("radius-time");
let averageTime = document.getElementById("average-time");

// Capture Planets Nav Link
const mercuryBtn = document.getElementById("mercury");
const venusBtn = document.getElementById("venus");
const earthBtn = document.getElementById("earth");
const marsBtn = document.getElementById("mars");
const jupiterBtn = document.getElementById("jupiter");
const saturnBtn = document.getElementById("saturn");
const uranusBtn = document.getElementById("uranus");
const neptuneBtn = document.getElementById("neptune");

const geoImg = document.querySelector(".planet-geoImg");
console.log(geoImg);

toggleBtn.addEventListener("click", () => {
  navBarLink.classList.toggle("toggle");
});

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

let file = "../data/data.json";

menuBtn.forEach((item) => {
  item.addEventListener("click", () => {
    for (let btn of callToActionBtns) {
      btn.classList.remove("active");
    }
    let cursor = item.dataset.id;
    planetName.dataset.id = cursor;

    axios.get(file).then((res) => {
      let json = res.data;
      planetName.innerHTML = json[cursor].name;
      planetDesc.innerHTML = json[cursor].overview.content;
      planetImg.src = json[cursor].images.planet;
      overviewBtn.style.borderBottomColor = json[cursor].color;
      overviewBtn.classList.add("active");
      wikiSource.href = json[cursor].overview.source;
      rotateTime.innerHTML = json[cursor].rotation;
      revolutionTime.innerHTML = json[cursor].revolution;
      radiusTime.innerHTML = json[cursor].radius;
      averageTime.innerHTML = json[cursor].temperature;
      geoImg.classList.remove("geology");
    });
    navBarLink.classList.contains("toggle")
      ? navBarLink.classList.remove("toggle")
      : navBarLink.classList.toggle("toggle");
  });
});
