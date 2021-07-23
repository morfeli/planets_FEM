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

// Capture Data JSON File
let file = "../data/data.json";

// Capture Planets Nav Link
let nav = document.getElementById("nav");

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

function fetchData(cursor = 3) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      var dataInfo = data;
      console.log(dataInfo);
      planetImg.src = dataInfo[cursor].images.planet;
      planetName.innerHTML = dataInfo[cursor].name;
      planetDesc.innerHTML = dataInfo[cursor].overview.content;
      wikiSource.href = dataInfo[cursor].overview.source;
      rotateTime.innerHTML = dataInfo[cursor].rotation;
      revolutionTime.innerHTML = dataInfo[cursor].revolution;
      radiusTime.innerHTML = dataInfo[cursor].radius;
      averageTime.innerHTML = dataInfo[cursor].temperature;
    })
    .catch((err) => {
      console.log(err);
    });
}

// fetchData();

nav.addEventListener("click", (e) => {
  fetchData();
  let cursor = 0;
  let planetImg,
    planetName,
    planetDesc,
    wikiSource,
    rotateTime,
    revolutionTime,
    radiusTime,
    averageTime;
  switch (e.target.textContext) {
    case "MERCURY":
      cursor = 0;
      break;
    case "VENUS":
      cursor = 1;
      break;
    case "EARTH":
      cursor = 2;
      break;
    case "MARS":
      cursor = 3;
      break;
    case "JUPITER":
      cursor = 4;
      break;
    case "SATURN":
      cursor = 5;
      break;
    case "URANUS":
      cursor = 6;
      break;
    case "NEPTUNE":
      cursor = 7;
      break;
    default:
      cursor = -1;
  }
  if (cursor >= 0) {
    planetImg = dataInfo[cursor].images.planet;
    planetName = dataInfo[cursor].name;
    planetDesc = dataInfo[cursor].overview.content;
    wikiSource = dataInfo[cursor].overview.source;
    rotateTime = dataInfo[cursor].rotation;
    revolutionTime = dataInfo[cursor].revolution;
    radiusTime = dataInfo[cursor].radius;
    averageTime = dataInfo[cursor].temperature;
  }
});
