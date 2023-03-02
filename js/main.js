"use strict";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("trade-animation");
    } else {
      entry.target.classList.remove("trade-animation");
    }
  });
});

observer.observe(document.querySelector("#trade-img"));

const observer_2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("commerce-animation");
    } else {
      entry.target.classList.remove("commerce-animation");
    }
  });
});

observer_2.observe(document.querySelector("#commerce-img"));

// _____

let header = document.querySelector(".header");
const $window = $(window);

$window.on("scroll", onScroll);

function onScroll() {
  if ($window.scrollTop() >= 110) {
    header.style.cssText =
      "background: linear-gradient(45deg, rgb(85, 183, 255, .9) 0%, rgb(126, 90, 255, .9) 100%); box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 75%);";
  } else {
    header.style.cssText = "background: none; box-shadow: none;";
  }
}

// _____
$(".scrollto").on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate(
    {
      scrollTop: $(href).offset().top,
    },
    {
      duration: 770,
      easing: "linear",
    }
  );

  return false;
});

// __________________

const photos = document.querySelectorAll(".gallery__img");

const modal = document.getElementById("modal_background");
const modalImage = document.getElementById("modal_content");

photos.forEach((img) => img.addEventListener("click", displayModal));

function displayModal() {
  if ($(window).width() >= "900") {
    modal.style.display = "block";
    modalImage.setAttribute("src", `${this.firstElementChild.src}`);
  }
}

const closeModal = document.getElementById("modal_close");
closeModal.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ________________

function highlightMenuItem() {
  const navMenu = document.querySelector(".nav");
  const sections = document.querySelectorAll(".nav-s");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 1;
    const sectionHeight = section.offsetHeight; //
    const sectionBottom = sectionTop + sectionHeight;
    const currentScroll = window.pageYOffset;
    const menuItem = navMenu.querySelector(`a[href="#${section.id}"]`);

    if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
      menuItem.classList.add("list__link_active");
    } else {
      menuItem.classList.remove("list__link_active");
    }
  });
}

window.addEventListener("scroll", highlightMenuItem);

window.addEventListener(
  `resize`,
  (event) => {
    let headerHeight = $(".header").outerHeight();
    document
      .querySelector(":root")
      .style.setProperty("--header-height", headerHeight + "px");
  },
  false
);
