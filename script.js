// POPUP

const popup =
document.getElementById("popup");

function showPopup(message){

  popup.innerText = message;

  popup.classList.add("show");

  setTimeout(() => {

    popup.classList.remove("show");

  },2000);

}

/* ========================= */
/* MODE SOMBRE / CLAIR */
/* ========================= */

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle(
    "dark"
  );

  if(
    document.body.classList.contains(
      "dark"
    )
  ){

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

  }else{

    themeBtn.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

  }

});

/* ========================= */
/* NAVIGATION */
/* ========================= */

const homeBtn =
document.getElementById("homeBtn");

const giftBtn =
document.getElementById("giftBtn");

const marketBtn =
document.getElementById("marketBtn");

const profileBtn =
document.getElementById("profileBtn");

/* PAGES */

const app =
document.querySelector(".app");

const giftPage =
document.getElementById("giftPage");

const marketPage =
document.getElementById("marketPage");

const profilePage =
document.getElementById("profilePage");

/* NAV ITEMS */

const navItems =
document.querySelectorAll(".nav-item");

/* RESET */

function resetPages(){

  app.classList.remove("hidden");

  giftPage.classList.add("hidden");

  marketPage.classList.add("hidden");

  profilePage.classList.add("hidden");

}

/* RESET NAV */

function resetNav(){

  navItems.forEach(item => {

    item.classList.remove("active");

  });

}

/* HOME */

homeBtn.addEventListener("click", () => {

  resetPages();

  resetNav();

  app.classList.remove("hidden");

  homeBtn.classList.add("active");

});

/* GIFTS */

giftBtn.addEventListener("click", () => {

  resetPages();

  resetNav();

  app.classList.add("hidden");

  giftPage.classList.remove("hidden");

  giftBtn.classList.add("active");

});

/* MARKET */

marketBtn.addEventListener("click", () => {

  resetPages();

  resetNav();

  app.classList.add("hidden");

  marketPage.classList.remove("hidden");

  marketBtn.classList.add("active");

});

/* PROFILE */

profileBtn.addEventListener("click", () => {

  resetPages();

  resetNav();

  app.classList.add("hidden");

  profilePage.classList.remove("hidden");

  profileBtn.classList.add("active");

});

/* ========================= */
/* POPUP BUTTONS */
/* ========================= */

const popupButtons =
document.querySelectorAll(
  ".popup-btn"
);

popupButtons.forEach(button => {

  button.addEventListener("click", () => {

    showPopup(
      "Service disponible bientôt"
    );

    if(navigator.vibrate){

      navigator.vibrate(40);

    }

  });

});

/* ========================= */
/* ACCORDION */
/* ========================= */

const accordionBtns =
document.querySelectorAll(
  ".accordion-btn"
);

accordionBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const content =
    btn.nextElementSibling;

    if(
      content.style.display ===
      "flex"
    ){

      content.style.display =
      "none";

    }else{

      content.style.display =
      "flex";

    }

  });

});

/* ========================= */
/* ROUE QUI TOURNE */
/* ========================= */

const wheel =
document.getElementById("wheel");

const spinBtn =
document.getElementById("spinBtn");

let degree = 0;

spinBtn.addEventListener("click", () => {

  degree +=
  3600 + Math.floor(Math.random() * 360);

  wheel.style.transform =
  `rotate(${degree}deg)`;

  showPopup(
    "🎡 La roue tourne..."
  );

  setTimeout(() => {

    const rewards = [

      "🎉 50 BCC gagnés",
      "🔥 100 BCC gagnés",
      "💎 Jackpot BCC",
      "⚡ Boost x2 gagné",
      "🎁 Coffre Mystère gagné"

    ];

    const randomReward =

    rewards[
      Math.floor(
        Math.random() *
        rewards.length
      )
    ];

    showPopup(randomReward);

  },5000);

});

/* ========================= */
/* LOGO CENTRE */
/* ========================= */

const centerLogo =
document.querySelector(".center-logo");

centerLogo.addEventListener("click", () => {

  showPopup(
    "Bienvenue sur Baby Cash Coin"
  );

});

/* ========================= */
/* ACTIONS */
/* ========================= */

const actionButtons =
document.querySelectorAll(
  ".action-btn"
);

actionButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    showPopup(
      "Fonction bientôt disponible"
    );

  });

});
