"use strict";
{
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.querySelector(".loading").classList.add("hidden");
    }, 0);
  });

  const spans = document.querySelectorAll("#span");
  const open = document.querySelector("#open ");
  const cover = document.querySelector(".cover ");
  const menuTitle1 = document.querySelector(".menu_title_1");
  const menuTitle2 = document.querySelector(".menu_title_2");
  const menuTitle3 = document.querySelector(".menu_title_3");

  function menuOpen() {
    spans.forEach((span) => {
      span.classList.toggle("show");
    });
    open.classList.toggle("show");
    cover.classList.toggle("show");
    menuTitle1.classList.toggle("show");
    menuTitle2.classList.toggle("show");
    menuTitle3.classList.toggle("show");
  }

  document.querySelector("#menu").addEventListener("click", () => {
    menuOpen();
  });

  cover.addEventListener("click", () => {
    menuOpen();
  });

  menuTitle1.addEventListener("click", () => {
    menuOpen();
  });
  menuTitle2.addEventListener("click", () => {
    menuOpen();
  });
  menuTitle3.addEventListener("click", () => {
    menuOpen();
  });
}

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener("click", (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute("href");
    let targetElement = document.getElementById(href.replace("#", ""));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const target = rect + offset;
    window.scrollTo({
      top: target,
      behavior: "smooth",
    });
  });
}

// プロフィールカード
const long = document.querySelector(".about_long");
const short = document.querySelector(".about_short");
const me = document.querySelector(".about_me");

short.addEventListener("click", () => {
  long.classList.add("show");
  short.classList.add("hidden");
  me.classList.add("small");
});
long.addEventListener("click", () => {
  long.classList.remove("show");
  short.classList.remove("hidden");
  me.classList.remove("small");
});

// スクロールイベント
const f_targets = document.querySelectorAll(".fade_in");
const s_targets = document.querySelectorAll(".shake");
const offset = 30;

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const h = window.innerHeight;

  f_targets.forEach((target) => {
    const pos = target.getBoundingClientRect().top + scroll;

    if (scroll > pos - h + offset) {
      target.classList.add("inview");
    } else {
      target.classList.remove("inview");
    }
  });
});

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  const h = window.innerHeight;

  s_targets.forEach((target) => {
    const pos = target.getBoundingClientRect().top + scroll;

    if (scroll > pos - h + offset) {
      target.classList.add("inview");
    } else {
      target.classList.remove("inview");
    }
  });
});

// スワイパー
const swiper = new Swiper(".swiper", {
  // Optional parameters
  // loop: true,
  slidesPerView: 3,
  centeredSlides: true,
  initialSlide: 1,
  spaceBetween: 20,
  autoplay: 5000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// ポップアップ

const cover2 = document.querySelector(".cover2 ");

const btns = document.querySelectorAll(".works_btn");
const popups= document.querySelectorAll(".popup");

function popUp(i) {
  btns[i].addEventListener("click", () => {
        popups[i].classList.add("show");
      cover2.classList.add("show");
    });
  
  
  cover2.addEventListener("click", () => {
    popups[i].classList.remove("show");
    cover2.classList.remove("show");
  });
}

popUp(0);
popUp(1);
popUp(2);
popUp(3);
popUp(4);

