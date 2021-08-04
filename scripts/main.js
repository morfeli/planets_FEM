"use strict";

const callToActionBtns = document.querySelectorAll(".mobile__CTA--btn");
const callToActionBtnsTabletView = document.querySelectorAll(
  ".btns__container--CTA"
);
const toggleBtn = document.querySelector(".toggle-button");
const navBarLink = document.querySelector(".navbar__links--ul");
const menuBtn = document.querySelectorAll(".navbar__links--li");

//  Capture Button Value IDS
const overviewBtn = document.getElementById("overview-btn");
const structureBtn = document.getElementById("structure-btn");
const surfaceBtn = document.getElementById("surface-btn");
const overviewBtnTabletView = document.getElementById(
  "overview-btn-tabDesktop"
);
console.log(overviewBtnTabletView);

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

neptuneBtn.style.borderBottom = "none";

toggleBtn.addEventListener("click", () => {
  navBarLink.classList.toggle("toggle");
});

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

callToActionBtnsTabletView.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtnsTabletView.forEach((el) =>
      el.classList.remove("tablet-active")
    );
    e.target.classList.toggle("tablet-active");
  });
});

let file = "../data/data.json";

menuBtn.forEach((item) => {
  item.addEventListener("click", () => {
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
    for (let btn of callToActionBtns) {
      btn.classList.remove("active");
    }
    for (let btn of callToActionBtnsTabletView) {
      btn.classList.remove("tablet-active");
    }

    navBarLink.classList.contains("toggle")
      ? navBarLink.classList.remove("toggle")
      : navBarLink.classList.toggle("toggle");

    document.getElementById("checkbox").checked = false;
  });
});
