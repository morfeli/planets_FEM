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
    callToActionBtnsTabletView.forEach((el) => {
      el.classList.remove("tablet-active");
      e.target.classList.toggle("tablet-active");
    });
  });
});

menuBtn.forEach((li) => {
  li.addEventListener("click", () => {
    menuBtn.forEach((el) => el.classList.remove("li-active"));
    li.classList.add("li-active");
    document.getElementById("mercury").style.borderTopColor = "#419EBB";
    document.getElementById("venus").style.borderTopColor = "#EDA249";
    document.getElementById("earth").style.borderTopColor = "#6D2ED5";
    document.getElementById("mars").style.borderTopColor = "#D14C32";
    document.getElementById("jupiter").style.borderTopColor = "#D83A34";
    document.getElementById("saturn").style.borderTopColor = "#CD5120";
    document.getElementById("uranus").style.borderTopColor = "#1EC1A2";
    document.getElementById("neptune").style.borderTopColor = "#2D68F0";
  });
});

let file = "../data/data.json";
// const screenSize = screen.width;

menuBtn.forEach((item) => {
  item.addEventListener("click", () => {
    for (let btn of callToActionBtns) {
      btn.classList.remove("active");
    }
    for (let btn of callToActionBtnsTabletView) {
      btn.classList.remove("tablet-active");
    }

    for (let btn of callToActionBtnsTabletView) {
      btn.classList.remove(
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune"
      );
    }

    let cursor = item.dataset.id;
    planetName.dataset.id = cursor;

    axios.get(file).then((res) => {
      let json = res.data;
      const reswidth = screen.width;
      planetName.innerHTML = json[cursor].name;
      planetDesc.innerHTML = json[cursor].overview.content;
      planetImg.src = json[cursor].images.planet;
      overviewBtn.style.borderBottomColor = json[cursor].color;
      overviewBtn.classList.add("active");
      overviewBtnTabletView.classList.add("tablet-active");
      wikiSource.href = json[cursor].overview.source;
      rotateTime.innerHTML = json[cursor].rotation;
      revolutionTime.innerHTML = json[cursor].revolution;
      radiusTime.innerHTML = json[cursor].radius;
      averageTime.innerHTML = json[cursor].temperature;
      geoImg.classList.remove("geology");

      if (planetName.dataset.id == 0) {
        let links = document.querySelectorAll(".btns__container--CTA");
        console.log(links);
        // links.forEach((li) => li.classList.remove("earth"));
        links.forEach((li) => li.classList.toggle("mercury"));
      }

      if (planetName.dataset.id == 1) {
        let links = document.querySelectorAll(".btns__container--CTA");
        console.log(links);
        // links.forEach((li) => li.classList.remove("earth"));
        links.forEach((li) => li.classList.toggle("venus"));
      }

      if (planetName.dataset.id == 2) {
        let links = document.querySelectorAll(".btns__container--CTA");

        links.forEach((li) => li.classList.toggle("earth"));
      }

      if (planetName.dataset.id == 3) {
        let links = document.querySelectorAll(".btns__container--CTA");

        links.forEach((li) => li.classList.toggle("mars"));
      }

      if (planetName.dataset.id == 4) {
        let links = document.querySelectorAll(".btns__container--CTA");
        links.forEach((li) => li.classList.toggle("jupiter"));
      }

      if (planetName.dataset.id == 5) {
        let links = document.querySelectorAll(".btns__container--CTA");
        links.forEach((li) => li.classList.toggle("saturn"));
      }

      if (planetName.dataset.id == 6) {
        let links = document.querySelectorAll(".btns__container--CTA");
        links.forEach((li) => li.classList.toggle("uranus"));
      }

      if (planetName.dataset.id == 7) {
        let links = document.querySelectorAll(".btns__container--CTA");
        links.forEach((li) => li.classList.toggle("neptune"));
      }

      if (planetName.dataset.id == 0) {
        planetImg.style.width = "111px";
        planetImg.style.height = "111px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "200px";
          planetImg.style.height = "200px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "290px";
          planetImg.style.height = "290px";
        }
      }
      if (planetName.dataset.id == 1) {
        planetImg.style.width = "154px";
        planetImg.style.height = "154px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "253px";
          planetImg.style.height = "253px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "400px";
          planetImg.style.height = "400px";
        }
      }
      if (planetName.dataset.id == 2) {
        planetImg.style.width = "173px";
        planetImg.style.height = "173px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "285px";
          planetImg.style.height = "285px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "450px";
          planetImg.style.height = "450px";
        }
      }

      if (planetName.dataset.id == 3) {
        planetImg.style.width = "129px";
        planetImg.style.height = "129px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "213px";
          planetImg.style.height = "213px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "336px";
          planetImg.style.height = "336px";
        }
      }

      if (planetName.dataset.id == 4) {
        planetImg.style.width = "224px";
        planetImg.style.height = "224px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "369px";
          planetImg.style.height = "369px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "582px";
          planetImg.style.height = "582px";
        }
      }

      if (planetName.dataset.id == 5) {
        planetImg.style.width = "256px";
        planetImg.style.height = "256px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "422px";
          planetImg.style.height = "422px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "670px";
          planetImg.style.height = "670px";
        }
      }

      if (planetName.dataset.id == 6) {
        planetImg.style.width = "176px";
        planetImg.style.height = "176px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "290px";
          planetImg.style.height = "290px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "458px";
          planetImg.style.height = "458px";
        }
      }

      if (planetName.dataset.id == 7) {
        planetImg.style.width = "173px";
        planetImg.style.height = "173px";
        if (reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "285px";
          planetImg.style.height = "285px";
        }
        if (reswidth >= 1440) {
          planetImg.style.width = "450px";
          planetImg.style.height = "450px";
        }
      }

      window.addEventListener("resize", () => {
        const reswidth = screen.width;

        if (planetName.dataset.id == 0 && reswidth < 768) {
          planetImg.style.width = "111px";
          planetImg.style.height = "111px";
        }
        if (planetName.dataset.id == 0 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "200px";
          planetImg.style.height = "200px";
        }
        if (planetName.dataset.id == 0 && reswidth >= 1440) {
          planetImg.style.width = "290px";
          planetImg.style.height = "290px";
        }
        if (planetName.dataset.id == 1 && reswidth < 768) {
          planetImg.style.width = "154px";
          planetImg.style.height = "154px";
        }
        if (planetName.dataset.id == 1 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "253px";
          planetImg.style.height = "253px";
        }
        if (planetName.dataset.id == 1 && reswidth >= 1440) {
          planetImg.style.width = "400px";
          planetImg.style.height = "400px";
        }
        if (planetName.dataset.id == 2 && reswidth < 768) {
          planetImg.style.width = "173px";
          planetImg.style.height = "173px";
        }
        if (planetName.dataset.id == 2 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "285px";
          planetImg.style.height = "285px";
        }
        if (planetName.dataset.id == 2 && reswidth >= 1440) {
          planetImg.style.width = "450px";
          planetImg.style.height = "450px";
        }
        if (planetName.dataset.id == 3 && reswidth < 768) {
          planetImg.style.width = "129px";
          planetImg.style.height = "129px";
        }
        if (planetName.dataset.id == 3 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "213px";
          planetImg.style.height = "213px";
        }
        if (planetName.dataset.id == 3 && reswidth >= 1440) {
          planetImg.style.width = "336px";
          planetImg.style.height = "336px";
        }
        if (planetName.dataset.id == 4 && reswidth < 768) {
          planetImg.style.width = "224px";
          planetImg.style.height = "224px";
        }
        if (planetName.dataset.id == 4 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "369px";
          planetImg.style.height = "369px";
        }
        if (planetName.dataset.id == 4 && reswidth >= 1440) {
          planetImg.style.width = "582px";
          planetImg.style.height = "582px";
        }
        if (planetName.dataset.id == 5 && reswidth < 768) {
          planetImg.style.width = "256px";
          planetImg.style.height = "256px";
        }
        if (planetName.dataset.id == 5 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "422px";
          planetImg.style.height = "422px";
        }
        if (planetName.dataset.id == 5 && reswidth >= 1440) {
          planetImg.style.width = "670px";
          planetImg.style.height = "670px";
        }
        if (planetName.dataset.id == 6 && reswidth < 768) {
          planetImg.style.width = "176px";
          planetImg.style.height = "176px";
        }
        if (planetName.dataset.id == 6 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "290px";
          planetImg.style.height = "290px";
        }
        if (planetName.dataset.id == 6 && reswidth >= 1440) {
          planetImg.style.width = "458px";
          planetImg.style.height = "458px";
        }
        if (planetName.dataset.id == 7 && reswidth < 768) {
          planetImg.style.width = "173px";
          planetImg.style.height = "173px";
        }
        if (planetName.dataset.id == 7 && reswidth >= 768 && reswidth < 1440) {
          planetImg.style.width = "285px";
          planetImg.style.height = "285px";
        }
        if (planetName.dataset.id == 7 && reswidth >= 1440) {
          planetImg.style.width = "450px";
          planetImg.style.height = "450px";
        }
      });
    });

    navBarLink.classList.contains("toggle")
      ? navBarLink.classList.remove("toggle")
      : navBarLink.classList.toggle("toggle");

    document.getElementById("checkbox").checked = false;
  });
});
