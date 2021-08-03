// capture variables
const btns = document.querySelectorAll(".mobile__CTA--btn");
const mobileName = document.querySelector(".planet-name");
const mobileDesc = document.querySelector(".planet-description");
const mobileSource = document.querySelector(".wiki-source");
const mobileImg = document.querySelector(".planet-img");
const mobileGeoImg = document.querySelector(".planet-geoImg");

let data = "../data/data.json";

// render content with click event

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((el) => el.classList.remove("active"));
    e.target.classList.toggle("active");
    let cursor = mobileName.dataset.id;
    let option = btn.dataset.option;
    let picture = btn.dataset.image;

    axios.get(data).then((res) => {
      let json = res.data;
      btn.style.borderBottomColor = json[cursor].color;
      mobileName.innerHTML = json[cursor].name;
      mobileDesc.textContent = json[cursor][option].content;
      mobileSource.href = json[cursor][option].source;
      mobileImg.src = json[cursor].images[picture];
      mobileGeoImg.src = json[cursor].images.geology;
      mobileGeoImg.classList.remove("geology");
      if (btn.dataset.option == "geology") {
        mobileGeoImg.classList.add("geology");
      }
    });
  });
});
