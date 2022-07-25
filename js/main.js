"use strict";

headerMove();
porfolioImg("portfolio-block__img-block");
porfolioImg("featured-block__img");
radioFunction(
  ".team-radio",
  ".team-block__inner-about",
  ".team-label",
  "active-team"
);
radioFunction(
  ".testim-radio",
  ".testim-block__rewiev",
  ".testim-label",
  "active-team"
);
radioFunction(
  ".news-radio",
  ".news-block__news-inner",
  ".news-label",
  "active-block"
);
priceBlocks();
mapFunc();
scrollMenu();
portfolioFunction();
menuAdaptiveToScroll();
aboutReadMore();
smallContactBtn(".scroll-btn");
smallContactBtn(".contact-block__btn");
animNumber();
newsReadmore();

function headerMove() {
  let header = document.querySelector(".header");
  let butUp = document.querySelector(".scroll-up-btn");
  butUp.style.display = "none";
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1) {
      header.classList.add("header-scroll");
      butUp.style.display = "block";
    } else {
      header.classList.remove("header-scroll");
      butUp.style.display = "none";
    }
  });
}

function porfolioImg(block) {
  let blockImg = document.querySelectorAll(`.${block}`);
  blockImg.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.lastElementChild.style.display = "flex";
    });
    element.addEventListener("mouseout", () => {
      element.lastElementChild.style.display = "none";
    });
  });
}

function radioFunction(radioT, blockT, labelT, addClass) {
  let radio = document.querySelectorAll(`${radioT}`);
  let teamBlock = document.querySelectorAll(`${blockT}`);
  let lebels = document.querySelectorAll(`${labelT}`);
  for (let n = 0; n < radio.length; n++) {
    radio[n].addEventListener("click", () => {
      for (let n = 0; n < radio.length; n++) {
        if (radio[n].checked == true) {
          teamBlock[n].classList.add(`${addClass}`);
          lebels[n].classList.add("active-label");
        } else {
          teamBlock[n].classList.remove(`${addClass}`);
          lebels[n].classList.remove("active-label");
        }
      }
    });
  }
}

function priceBlocks() {
  let block = document.querySelectorAll(".price-block__price-small");
  block.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.lastElementChild.classList.add("active-price");
    });
    element.addEventListener("mouseout", () => {
      element.lastElementChild.classList.remove("active-price");
    });
  });
}

function portfolioFunction() {
  let portfolioLi = document.querySelectorAll(".porf-li");
  portfolioLi.forEach((e) => {
    e.addEventListener("click", () => {
      portfolioLi.forEach((el) => {
        el.classList.remove("active-portfolio");
      });
      e.classList.add("active-portfolio");
    });
  });
  document.getElementById("all-works").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.height = "950px";
      element.style.display = "flex";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "block";
      element.style.marginBottom = "0px";
    });
  });
  document.getElementById("print").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.display = "none";
      element.style.height = "auto";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#work-print").forEach((element) => {
      element.parentElement.style.display = "flex";
      element.style.display = "block";
      element.style.marginBottom = "50px";
    });
  });
  document.getElementById("aldentity").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.display = "none";
      element.style.height = "auto";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#work-aldentity").forEach((element) => {
      element.parentElement.style.display = "flex";
      element.style.display = "block";
      element.style.marginBottom = "50px";
    });
  });
  document.getElementById("branding").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.display = "none";
      element.style.height = "auto";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#work-branding").forEach((element) => {
      element.parentElement.style.display = "flex";
      element.style.display = "block";
      element.style.marginBottom = "50px";
    });
  });
  document.getElementById("web").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.display = "none";
      element.style.height = "auto";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#work-web").forEach((element) => {
      element.parentElement.style.display = "flex";
      element.style.display = "block";
      element.style.marginBottom = "50px";
    });
  });
  document.getElementById("work-html-li").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.display = "none";
      element.style.height = "auto";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#work-html").forEach((element) => {
      element.parentElement.style.display = "flex";
      element.style.display = "block";
      element.style.marginBottom = "50px";
    });
  });
  document.getElementById("wordpress").addEventListener("click", () => {
    document.querySelectorAll(".portfolio-block__col").forEach((element) => {
      element.style.display = "none";
      element.style.height = "auto";
    });
    document.querySelectorAll(".all-works").forEach((element) => {
      element.style.display = "none";
    });
    document.querySelectorAll("#work-wordpress").forEach((element) => {
      element.parentElement.style.display = "flex";
      element.style.display = "block";
      element.style.marginBottom = "50px";
    });
  });

  document
    .querySelectorAll(".portfolio-block__img-over-title a")
    .forEach((e) => {
      e.setAttribute("href", "https://www.instagram.com/");
    });
  let count = 0;
  document.querySelectorAll(".port-hart img").forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement
        .querySelector("img:last-child")
        .classList.toggle("active-lilke");
      if (
        e.parentElement
          .querySelector("img:last-child")
          .classList.contains("active-lilke")
      ) {
        count++;
        console.log(count);
        document.querySelector(".heart-num div").innerHTML = count;
      } else {
        count--;
        console.log(count);
        document.querySelector(".heart-num div").innerHTML = count;
      }
    });
  });
  document.querySelectorAll(".port-chain img").forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement
        .querySelector("img:last-child")
        .classList.toggle("active-chain");
    });
  });
}

function mapFunc() {
  document.querySelector(".map-block").addEventListener("mouseover", () => {
    document.querySelector(".map-block__bg").style.display = "none";
  });
  document.querySelector(".map-block").addEventListener("mouseout", () => {
    document.querySelector(".map-block__bg").style.display = "flex";
  });
}

function scrollMenu() {
  document.querySelector(".header-burger").addEventListener("click", () => {
    document
      .querySelector(".burger-menu")
      .classList.toggle("active-burger-menu");
  });

  // document.querySelectorAll('.menu ul li').forEach(e => {
  //     e.addEventListener('click', () => {
  //         document.querySelectorAll('.menu ul li').forEach(el => {
  //             el.classList.remove('active-menu');
  //         })
  //         e.classList.add('active-menu');
  //     });
  // });

  let scrm = function (idMenu, blockToScroll) {
    document.querySelector(idMenu).addEventListener("click", () => {
      document
        .querySelector(".burger-menu")
        .classList.remove("active-burger-menu");
      document.querySelector(blockToScroll).scrollIntoView({
        behavior: "smooth",
      });
    });
  };

  scrm("#menu-hello", ".main-block");
  scrm("#menu-about", ".about-block");
  scrm("#menu-services", ".services-block");
  scrm("#menu-portfolio", ".portfolio-block");
  scrm("#menu-team", ".team-block");
  scrm("#menu-blog", ".news-block");
  scrm("#menu-contact", ".contact-big-block");

  scrm("#heart-num", ".portfolio-block");
  scrm(".scroll-up-btn", ".main-block");

  scrm("#menu-hello-small", ".main-block");
  scrm("#menu-about-small", ".about-block");
  scrm("#menu-services-small", ".services-block");
  scrm("#menu-portfolio-small", ".portfolio-block");
  scrm("#menu-team-small", ".team-block");
  scrm("#menu-blog-small", ".news-block");
  scrm("#menu-contact-small", ".contact-big-block");
}

function menuAdaptiveToScroll() {
  window.addEventListener("scroll", () => {
    let autoCheckMenu = function (idMenu, blockToScroll) {
      if (
        document.querySelector(blockToScroll).getBoundingClientRect().top +
          400 <
        window.innerHeight
      ) {
        document.querySelectorAll(".menu ul li").forEach((e) => {
          e.classList.remove("active-menu");
        });
        document.querySelector(idMenu).classList.add("active-menu");
      } else if (
        document.querySelector(blockToScroll).getBoundingClientRect().bottom +
          400 <
        window.innerHeight
      ) {
        document.querySelectorAll(".menu ul li").forEach((e) => {
          e.classList.remove("active-menu");
        });
        document.querySelector(idMenu).classList.add("active-menu");
      }
    };
    autoCheckMenu("#menu-hello", ".main-block");
    autoCheckMenu("#menu-about", ".about-block");
    autoCheckMenu("#menu-services", ".services-block");
    autoCheckMenu("#menu-portfolio", ".portfolio-block");
    autoCheckMenu("#menu-team", ".team-block");
    autoCheckMenu("#menu-blog", ".news-block");
    autoCheckMenu("#menu-contact", ".contact-big-block");
  });
}

function smallContactBtn(btn) {
  document.querySelector(btn).onclick = () => {
    document.querySelector(".contact-big-block").scrollIntoView({
      behavior: "smooth",
    });
    document.querySelectorAll(".menu ul li").forEach((el) => {
      el.classList.remove("active-menu");
    });
    document.querySelector("#menu-contact").classList.add("active-menu");
    document.querySelector("#menu-contact-small").classList.add("active-menu");
  };
}

function aboutReadMore() {
  document.querySelector(".about-first__btn").onclick = () => {
    document.querySelector(".about-block__read-more").style.display = "block";
  };
  document.querySelector(".about-block__read-more__close").onclick = () => {
    document.querySelector(".about-block__read-more").style.display = "none";
  };
}

function animNumber() {
  let number = document.querySelectorAll(".dgrm span");
  number.forEach((number) => {
    let start = 0,
      end = +number.dataset.max;
    window.addEventListener("scroll", function onScroll() {
      let numberTop = number.getBoundingClientRect().top;
      if (numberTop < window.innerHeight) {
        document
          .querySelectorAll(".dgrm svg circle:last-child")
          .forEach((e) => {
            e.classList.add("anim-circle");
          });
        this.removeEventListener("scroll", onScroll);
        let interval = setInterval(function () {
          number.innerHTML = `${++start}%`;
          if (start == end) {
            clearInterval(interval);
          }
        }, 25);
      }
    });
  });
}

function newsReadmore() {
  document.querySelectorAll(".news-block__button").forEach((e) => {
    e.addEventListener("click", () => {
      document.querySelector(".read-more-news").style.display = "block";
      let name = e.parentElement.querySelector(
        ".news-block__news-title"
      ).textContent;
      document.querySelector(".read-more-news__title").innerHTML = name;
      let author = e.parentElement.querySelector(
        ".news-block__news-author"
      ).textContent;
      document.querySelector(".read-more-news__author").innerHTML = author;
      let descr = e.parentElement.querySelector(
        ".news-block__news-description"
      ).textContent;
      document.querySelector(".read-more-news__descr").innerHTML = descr;
      let text = e.parentElement.querySelector(
        ".news-block__news-text"
      ).textContent;
      document.querySelector(".read-more-news__text").innerHTML =
        text +
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia vitae modi assumenda cumque est ullam minus! Quia molestiae et accusamus dicta totam rem magnam ut. Facere animi nihil autem obcaecati, dolore quae tenetur unde porro dolores. Minus at minima quibusdam, sunt saepe exercitationem deleniti ratione iusto quae molestiae eius consequatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia vitae modi assumenda cumque est ullam minus! Quia molestiae et accusamus dicta totam rem magnam ut. Facere animi nihil autem obcaecati, dolore quae tenetur unde porro dolores. Minus at minima quibusdam, sunt saepe exercitationem deleniti ratione iusto quae molestiae eius consequatur.";
    });
  });
  document
    .querySelector(".read-more-news__close")
    .addEventListener("click", () => {
      document.querySelector(".read-more-news").style.display = "none";
    });
}
