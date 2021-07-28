const callToActionBtns = document.querySelectorAll(".mobile__CTA--btn");

//  Capture Button Value IDS
const overviewBtn = document.getElementById("overview-btn");
const structureBtn = document.getElementById("structure-btn");
const surfaceBtn = document.getElementById("surface-btn");

// Capture Planet Value IDS
let planetImg = document.getElementById("planet-img");
let planetImgGeo = document.getElementById("geo-img");
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

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
  });
});

let file = "../data/data.json";

mercuryBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[0].images.planet;
      planetName.innerHTML = dataInfo[0].name;
      planetDesc.innerHTML = dataInfo[0].overview.content;
      wikiSource.href = dataInfo[0].overview.source;
      rotateTime.innerHTML = dataInfo[0].rotation;
      revolutionTime.innerHTML = dataInfo[0].revolution;
      radiusTime.innerHTML = dataInfo[0].radius;
      averageTime.innerHTML = dataInfo[0].temperature;
    });
  //   const active = document.querySelector(".active");
  //   console.log(active);

  //   callToActionBtns.forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       callToActionBtns.forEach((el) =>
  //         el.classList.remove("active", "mercury_styles")
  //       );
  //       e.target.classList.toggle("active");
  //       e.target.classList.toggle("mercury_styles");
  //     });
});

venusBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[1].images.planet;
      planetName.innerHTML = dataInfo[1].name;
      planetDesc.innerHTML = dataInfo[1].overview.content;
      wikiSource.href = dataInfo[1].overview.source;
      rotateTime.innerHTML = dataInfo[1].rotation;
      revolutionTime.innerHTML = dataInfo[1].revolution;
      radiusTime.innerHTML = dataInfo[1].radius;
      averageTime.innerHTML = dataInfo[1].temperature;
    });
  //   callToActionBtns.forEach((btn) => {
  //     btn.addEventListener("click", (e) => {
  //       callToActionBtns.forEach((el) =>
  //         el.classList.remove("active", "venus_styles")
  //       );
  //       e.target.classList.toggle("active");
  //       e.target.classList.toggle("venus_styles");
  //     });
  //   });
});

earthBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[2].images.planet;
      planetName.innerHTML = dataInfo[2].name;
      planetDesc.innerHTML = dataInfo[2].overview.content;
      wikiSource.href = dataInfo[2].overview.source;
      rotateTime.innerHTML = dataInfo[2].rotation;
      revolutionTime.innerHTML = dataInfo[2].revolution;
      radiusTime.innerHTML = dataInfo[2].radius;
      averageTime.innerHTML = dataInfo[2].temperature;
    });
  //   document.querySelector(".active").style.borderBottom =
  //     "5px solid rgb(109,46,213)";
});

marsBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[3].images.planet;
      planetName.innerHTML = dataInfo[3].name;
      planetDesc.innerHTML = dataInfo[3].overview.content;
      wikiSource.href = dataInfo[3].overview.source;
      rotateTime.innerHTML = dataInfo[3].rotation;
      revolutionTime.innerHTML = dataInfo[3].revolution;
      radiusTime.innerHTML = dataInfo[3].radius;
      averageTime.innerHTML = dataInfo[3].temperature;
    });
});

jupiterBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[4].images.planet;
      planetName.innerHTML = dataInfo[4].name;
      planetDesc.innerHTML = dataInfo[4].overview.content;
      wikiSource.href = dataInfo[4].overview.source;
      rotateTime.innerHTML = dataInfo[4].rotation;
      revolutionTime.innerHTML = dataInfo[4].revolution;
      radiusTime.innerHTML = dataInfo[4].radius;
      averageTime.innerHTML = dataInfo[4].temperature;
    });
});

saturnBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[5].images.planet;
      planetName.innerHTML = dataInfo[5].name;
      planetDesc.innerHTML = dataInfo[5].overview.content;
      wikiSource.href = dataInfo[5].overview.source;
      rotateTime.innerHTML = dataInfo[5].rotation;
      revolutionTime.innerHTML = dataInfo[5].revolution;
      radiusTime.innerHTML = dataInfo[5].radius;
      averageTime.innerHTML = dataInfo[5].temperature;
    });
});

uranusBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[6].images.planet;
      planetName.innerHTML = dataInfo[6].name;
      planetDesc.innerHTML = dataInfo[6].overview.content;
      wikiSource.href = dataInfo[6].overview.source;
      rotateTime.innerHTML = dataInfo[6].rotation;
      revolutionTime.innerHTML = dataInfo[6].revolution;
      radiusTime.innerHTML = dataInfo[6].radius;
      averageTime.innerHTML = dataInfo[6].temperature;
    });
});

neptuneBtn.addEventListener("click", () => {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      let dataInfo = data;

      planetImg.src = dataInfo[7].images.planet;
      planetName.innerHTML = dataInfo[7].name;
      planetDesc.innerHTML = dataInfo[7].overview.content;
      wikiSource.href = dataInfo[7].overview.source;
      rotateTime.innerHTML = dataInfo[7].rotation;
      revolutionTime.innerHTML = dataInfo[7].revolution;
      radiusTime.innerHTML = dataInfo[7].radius;
      averageTime.innerHTML = dataInfo[7].temperature;
    });
});
