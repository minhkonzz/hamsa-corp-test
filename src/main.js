import "./css/global.css";
import "./css/header.css";
import "./css/hero.css";

document.querySelector("#app").innerHTML = `
  <header>
    <button id="mobile-menu-toggle" aria-label="Open Mobile Menu">
      <div id="mobile-menu-icon"></div>
    </button>
    <svg id="header__logo" fill="none">
      <use href="/icons.svg#logo"></use>
    </svg>
    <ul id="header__nav">
      <li><a class="header__nav__ref" href="#">HOME</a></li>
      <li class="has-mega-menu">
        <a class="header__nav__ref" href="#">CATALOGS</a>
        <div id="mega-menu">
          <div id="mega-menu__inner">
            <ul id="mega-menu__nav">
            ${["Activity", "Equipment", "Women's", "Men's"]
              .map((item) => `
              <li class="mega-menu__nav__link">
                <a class="mega-menu__nav__ref" href="#">
                  ${item}
                  <svg class="mega-menu__nav__chevron" fill="none">
                    <use href="/icons.svg#chevron-right"></use>
                  </svg>
                </a>
              </li>`).join("")}
            </ul>
            <div id="mega-menu__content">
            ${[
              { img: "boots", label: "Boots" },
              { img: "helmets", label: "Helmets" },
              { img: "goggles", label: "Goggles" },
              { img: "binding", label: "Binding" },
              { img: "6", label: "Skis" },
            ].map((item) => `
              <a href="#" class="mega-menu__item">
                <img src="/img/${item.img}.webp" alt="${item.label}">
                <span>${item.label}</span>
              </a>`).join("")}
            </div>
          </div>
        </div>
      </li>
      <li><a class="header__nav__ref" href="#">BLOG</a></li>
      <li><a class="header__nav__ref" href="#">SHOP</a></li>
      <li><a class="header__nav__ref" href="#">CONTACT US</a></li>
    </ul>
    <div id="header__feats">
      ${[
        { icon: "search", label: "Search" },
        { icon: "heart", label: "Favorites" },
        { icon: "user", label: "Profile" },
        { icon: "cart", label: "Cart" }
      ].map((feat) => `
      <button class="header__feats__btn" aria-label="${feat.label}">
        <svg class="header__feats__icon" fill="none">
          <use href="/icons.svg#${feat.icon}"></use>
        </svg>
      </button>`).join("")}
    </div>
  </header>
  <main>
    <div id="temp"></div>
    <div id="hero__socials">
      <div id="hero__socials-content">
        <p id="hero__socials-copyright">&copy; 2023 Dotcreativemarket</p>
        <div>
          <p id="hero__socials-title">FOLLOW US</p>
          <ul id="hero__socials-list">
            ${[
              { svg: "linkedin",  label: "Linkedin"  },
              { svg: "facebook",  label: "Facebook"  },
              { svg: "twitter" ,  label: "Twitter"   },
              { svg: "instagram", label: "Instagram" }
            ].map((social) => `
            <li>
              <a href="#" class="hero__socials-link" aria-label="Our ${social.label}">
                <svg class="hero__socials-icon">
                  <use href="/icons.svg#${social.svg}"></use>
                </svg>
              </a>
            </li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
    <div id="sections">
      <section id="hero">
        <svg id="hero__number">
          <use href="/icons.svg#hero-number"></use>
        </svg>
        <div id="hero__content">
          <div id="hero__content__title">
            <p>BEGIN BREAKING YOUR LIMIT</p>
            <h1>Know your limits. Ski beyond them.</h1>
            <button id="view-more">VIEW MORE</button>
          </div>
          <img 
            src="/img/1.webp" 
            alt="hero-image" 
            width="910" 
            height="729"
            decoding="async"
            sizes="
              /img/1-480w.webp 480w,
              /img/1-885w.webp 768w,
              /img/1-910w.webp 1024w
            "
          >
        </div>
        <div id="hero__navigators">
          <button 
            class="slide-btn" 
            id="slide-btn__left" 
            aria-label="Previous Slide"
          >
            <svg class="slide-btn__icon" id="slide-btn__icon-left" fill="none">
              <use href="/icons.svg#arrow"></use>
            </svg>
          </button>
          <button 
            class="slide-btn" 
            id="slide-btn__right" 
            aria-label="Next Slide"
          >
            <svg class="slide-btn__icon" fill="none">
              <use href="/icons.svg#arrow"></use>
            </svg>
          </button>
        </div>
      </section>
    </div>
  </main>
`;

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("header__nav");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");

  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileMenuIcon.classList.toggle("active");
  });
});
