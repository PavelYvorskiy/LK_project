import { langArr } from "../state.js";

const btn = document.querySelector(".btn-language");
const navbarMenu = document.querySelector(".navbar");
let active = false;
btn.addEventListener("click", () => {
  active = !active;
  navbarMenu.classList.remove("active");
  if (active) {
    btn.classList.add("active");
    navLocation("en");
  } else {
    btn.classList.remove("active");
    navLocation();
  }
});
const navLocation = (elem) => {
  for (let key in langArr.nav) {
    if (elem === "en") {
      document.querySelector(".nav-" + key).innerHTML = langArr.nav[key][elem];
      document.querySelector(".menu-" + key).innerHTML = langArr.nav[key][elem];
    } else {
      document.querySelector(".nav-" + key).innerHTML = langArr.nav[key]["he"];
      document.querySelector(".menu-" + key).innerHTML = langArr.nav[key]["he"];
    }
    for (let key in langArr.boxContent) {
      if (elem === "en") {
        document.querySelector(".box-" + key).innerHTML =
          langArr.boxContent[key][elem];
      } else {
        document.querySelector(".box-" + key).innerHTML =
          langArr.boxContent[key]["he"];
      }
    }
    for (let key in langArr.button) {
      if (elem === "en") {
        document.querySelector(".btn-" + key).innerHTML =
          langArr.button[key][elem];
      } else {
        document.querySelector(".btn-" + key).innerHTML =
          langArr.button[key]["he"];
      }
    }
    for (let key in langArr.mainContent.title) {
      if (elem === "en") {
        document.querySelector(".title-" + key).innerHTML =
          langArr.mainContent.title[key][elem];
      } else {
        document.querySelector(".title-" + key).innerHTML =
          langArr.mainContent.title[key]["he"];
      }
    }
    for (let key in langArr.mainContent.text) {
      if (elem === "en") {
        document.querySelector(".text-" + key).innerHTML =
          langArr.mainContent.text[key][elem];
      } else {
        document.querySelector(".text-" + key).innerHTML =
          langArr.mainContent.text[key]["he"];
      }
    }
  }
};
