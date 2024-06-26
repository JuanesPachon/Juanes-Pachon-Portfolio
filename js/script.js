const textElement = document.querySelector('.animated-text');
const textElement2 = document.querySelector('.animated-text-2');
const textArray = ['Web Developer'];
let currentIndex = 0;

function typeWriter(text, index, callback) {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter(text, index, callback), 50);
  } else {
    setTimeout(callback, 2200);
  }
}

function deleteText() {
  const currentText = textElement.innerHTML;
  if (currentText.length > 0) {
    textElement.innerHTML = currentText.slice(0, -1);
    setTimeout(deleteText, 50);
  } else {
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(startAnimation, 500);
  }
}

function startAnimation() {
  const text = textArray[currentIndex];
  textElement.innerHTML = '';
  typeWriter(text, 0, deleteText);
}

startAnimation();

function typeWriter2(text, index, callback) {
  if (index < text.length) {
    textElement2.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeWriter2(text, index, callback), 50);
  } else {
    setTimeout(callback, 2200);
  }
}

function deleteText2() {
  const currentText2 = textElement2.innerHTML;
  if (currentText2.length > 0) {
    textElement2.innerHTML = currentText2.slice(0, -1);
    setTimeout(deleteText2, 50);
  } else {
    currentIndex = (currentIndex + 1) % textArray.length;
    setTimeout(startAnimation2, 500);
  }
}

function startAnimation2() {
  const text = textArray[currentIndex];
  textElement2.innerHTML = '';
  typeWriter2(text, 0, deleteText2);
}

startAnimation2();

//===================================================================================================

const contactButtonTablet = document.querySelector(".right-container__button");
const navbarLink = document.querySelectorAll(".navbar__scroll-link");
const footerImg = document.querySelector(".owner-section__image");
const home = document.querySelector(".main");
const aboutMe = document.querySelector(".self-info__title");
const skills = document.querySelector(".main__skills");
const portfolio = document.querySelector(".portfolio__title");
const contact = document.querySelector(".contact__title");
const social = document.querySelector(".footer__title");

const navbar = document.querySelector(".right-container__menu");
const overlayMobile = document.querySelector(".overlay__mobile");
const menuOptions = document.querySelectorAll(".scroll-links__link--mobile");

contactButtonTablet.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth"});
})

navbarLink[0].addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
})

navbarLink[1].addEventListener("click", () => {
  aboutMe.scrollIntoView({ behavior: "smooth" });
})

navbarLink[2].addEventListener("click", () => {
  skills.scrollIntoView({ behavior: "smooth" });
})

navbarLink[3].addEventListener("click", () => {
  portfolio.scrollIntoView({ behavior: "smooth" });
})

navbarLink[4].addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" });
})

navbarLink[5].addEventListener("click", () => {
  social.scrollIntoView({ behavior: "smooth" });
})

footerImg.addEventListener("click", () => {
  home.scrollIntoView({ behavior: "smooth" });
})

navbar.addEventListener("click", function () {
  if (overlayMobile.style.display === "block") {
    overlayMobile.style.display = "none";
  } else {
    overlayMobile.style.display = "block";
  }
  toggleMenu();
  
});

menuOptions.forEach((option) => {
  
  option.addEventListener("click", function () {
    overlayMobile.style.display =
      "none";
  });
});

menuOptions[0].addEventListener("click", () => {
  const homeRect = home.getBoundingClientRect();
  const offsetPosition = 120;

  const topPosition = homeRect.top - offsetPosition;

  window.scrollTo({
    top: topPosition + window.scrollY,
    behavior: "smooth"
  });
})

menuOptions[1].addEventListener("click", () => {
  const homeRect = aboutMe.getBoundingClientRect();
  const offsetPosition = 120;

  const topPosition = homeRect.top - offsetPosition;

  window.scrollTo({
    top: topPosition + window.scrollY,
    behavior: "smooth"
  });
})

menuOptions[2].addEventListener("click", () => {
  const homeRect = skills.getBoundingClientRect();
  const offsetPosition = 60;

  const topPosition = homeRect.top - offsetPosition;

  window.scrollTo({
    top: topPosition + window.scrollY,
    behavior: "smooth"
  });
})

menuOptions[3].addEventListener("click", () => {
  const homeRect = portfolio.getBoundingClientRect();
  const offsetPosition = 120;

  const topPosition = homeRect.top - offsetPosition;

  window.scrollTo({
    top: topPosition + window.scrollY,
    behavior: "smooth"
  });
})

menuOptions[4].addEventListener("click", () => {
  const homeRect = contact.getBoundingClientRect();
  const offsetPosition = 120;

  const topPosition = homeRect.top - offsetPosition;

  window.scrollTo({
    top: topPosition + window.scrollY,
    behavior: "smooth"
  });
})

menuOptions[5].addEventListener("click", () => {
  const homeRect = social.getBoundingClientRect();
  const offsetPosition = 120;

  const topPosition = homeRect.top - offsetPosition;

  window.scrollTo({
    top: topPosition + window.scrollY,
    behavior: "smooth"
  });
})

function toggleMenu() {
  overlayMobile.classList.toggle('show');
}

function ocultarDivSiAnchoEsMayorOIgualA1024() {

  if (window.innerWidth >= 1200) {
    overlayMobile.style.display = 'none';
  }
}
ocultarDivSiAnchoEsMayorOIgualA1024();
window.addEventListener('resize', ocultarDivSiAnchoEsMayorOIgualA1024);

//=====================================================================================================

const moreInfo = document.querySelector("#card__button");
const moreInfo2 = document.querySelector("#card__button-2");
const moreInfo3 = document.querySelector("#card__button-3");
const moreInfoMobile = document.getElementById("more-info__mobile");
const moreInfoMObile2 = document.getElementById("more-info__mobile-2");
const moreInfoMobile3 = document.getElementById("more-info__mobile-3");
const overlay = document.getElementById("overlay"); 
const overlay2 = document.getElementById("overlay-2"); 
const overlay3 = document.getElementById("overlay-3"); 


moreInfo.addEventListener('click', function() {
  overlay.style.display = 'block';
});

moreInfo2.addEventListener('click', function() {
  overlay2.style.display = 'block';
});

moreInfo3.addEventListener('click', function() {
  overlay3.style.display = 'block';
});

moreInfoMobile.addEventListener('click', function() {
  overlay.style.display = 'block';
});

moreInfoMObile2.addEventListener('click', function() {
  overlay2.style.display = 'block';
});

moreInfoMobile3.addEventListener('click', function() {
  overlay3.style.display = 'block';
});

overlay.addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});

overlay2.addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});

overlay3.addEventListener('click', function(event) {
  if (event.target === this) {
    this.style.display = 'none';
  }
});