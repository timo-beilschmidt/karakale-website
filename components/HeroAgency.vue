<template>
  <div data-overlay="2" class="home-creative-agency">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="hero-content">
            <h1 class="hero-title">Ihre TÜV Prüfstelle in Bonn</h1>
            <!-- <img src="/img/slider/creative-agency-wave.png" alt="wave icon"> -->
            <a
              href="https://www.tuev-nord.de/de/stationen/termin-vereinbaren/?stationId=450&cHash=1bb2662b098812ec6d9a0abc7387d3a7"
            >
              <button
                type="submit"
                class="brook-btn bk-btn-theme btn-sd-size btn-rounded space-between hero-btn"
              >
                Jetzt Termin vereinbaren
              </button>
            </a>
            <!-- <h6>WENN ES MAL KRACHT ODER DIE PLAKETTE FEHLT...</h6> -->
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="hero-mail">
            <span>info@ing-karakale.de</span>
        </div> -->
    <div class="hero-social">
      <ul
        class="social-icon icon-border-rounded icon-size-medium social-vertical text-center"
      >
        <li class="facebook">
          <a href="#" class="link brook-btn" aria-label="Facebook">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li class="instagram">
          <a
            href="https://www.instagram.com/gutachten.karakale/"
            class="link brook-btn"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li class="mail">
          <a
            href="mailto: info@ing-karakale.de"
            class="link brook-btn"
            aria-label="E-Mail"
          >
            <i class="fa fa-envelope"></i>
          </a>
        </li>
        <li class="whatsapp">
          <a
            href="https://wa.me/4915737154376"
            class="link brook-btn"
            aria-label="Whatsapp"
          >
            <i class="fab fa-whatsapp"></i>
          </a>
        </li>
        <!-- <li class="calendar">
          <a
            href="https://www.tuev-nord.de/de/stationen/termin-vereinbaren/?stationId=450&cHash=1bb2662b098812ec6d9a0abc7387d3a7"
            class="link"
            aria-label="Kalendar"
          >
            <i class="fa fa-calendar-plus"></i>
          </a>
        </li> -->
        <li class="phone">
          <a
            href="tel:015737154376"
            class="link brook-btn bk-btn-theme"
            aria-label="Telefon"
          >
            <div class="coccoc-alo-ph-circle"></div>
            <i class="fa fa-phone"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [],
    };
  },
};
</script>

<style lang="scss">
.home-creative-agency {
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #111c81;
  background-image: url("/img/other/Pruefer_unter_Auto_scaled.webp");
  // res
  @media #{$sm-layout} {
    height: 600px;
    background-image: url("/img/other/Pruefer_unter_Auto_scaled.webp");
  }
  .hero-title {
    //visibility: hidden;
    font-size: 90px;
    font-weight: 700;
    color: $white;
    font-family: $secondary-font;
    span {
      font-family: $playfair-font;
      font-style: italic;
    }
    // res
    @media #{$lg-layout} {
      font-size: 70px;
    }
    @media #{$md-layout} {
      font-size: 50px;
    }
    @media #{$sm-layout} {
      font-size: 25px;
    }
    @media #{$large-mobile} {
      font-size: 35px;
    }
  }
  h6 {
    // visibility: hidden;
    color: $white;
    font-size: 18px;
    font-weight: 600;
    max-width: 570px;
    line-height: 1.6;
    margin: 30px auto 0;
    font-family: $secondary-font !important;
  }
  .hero-mail {
    position: absolute;
    left: 0;
    // res
    @media #{$sm-layout} {
      left: -60px;
    }
    @media #{$small-mobile} {
      display: none;
    }
    span {
      color: $white;
      display: block;
      font-size: 15px;
      font-weight: 500;
      font-family: $secondary-font;
      transform: matrix3d(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
  }
  .hero-social {
    position: absolute;
    right: 0;
    // res
    @media #{$small-mobile} {
      display: none;
    }
  }
}
.whatsapp {
  border-radius: 100%;
  background-color: #25d366;
}
.mail {
  border-radius: 100%;
  @media #{$small-mobile} {
    background-color: #111c81;
  }
}
.calendar {
  border-radius: 100%;
  // background-color: #111c81e3;
}
.phone {
  border-radius: 100%;
  // background-color: #111c81e3;
}
.hero-btn {
  font-size: 1rem !important;
}
.coccoc-alo-ph-circle {
  width: 80px;
  height: 80px;
  position: absolute;
  top: -14px;
  left: -15px;
  background-color: transparent;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  border: 2px solid rgba(30, 30, 30, 0.4);
  opacity: 0.2;
  -webkit-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
  -moz-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
  -ms-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
  -o-animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
  animation: coccoc-alo-circle-anim 1.2s infinite ease-in-out;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.coccoc-alo-ph-circle-fill {
  width: 40px;
  height: 40px;
  top: 50px;
  left: 50px;
  position: absolute;
  background-color: #000;
  -webkit-border-radius: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  border: 2px solid transparent;
  opacity: 0.1;
  -webkit-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
  -moz-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
  -ms-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
  -o-animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
  animation: coccoc-alo-circle-fill-anim 2.3s infinite ease-in-out;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.coccoc-alo-ph-circle {
  border-color: white;
  opacity: 0.5;
}

.coccoc-alo-ph-circle:hover {
  border-color: #75eb50;
  opacity: 0.5;
}

.coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-circle-fill,
.coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-circle-fill {
  background-color: rgba(117, 235, 80, 0.5);
  opacity: 0.75 !important;
}

.coccoc-alo-phone.coccoc-alo-green.coccoc-alo-hover .coccoc-alo-ph-img-circle,
.coccoc-alo-phone.coccoc-alo-green:hover .coccoc-alo-ph-img-circle {
  background-color: #75eb50;
}

@-moz-keyframes coccoc-alo-circle-anim {
  0% {
    transform: rotate(0) scale(0.5) skew(1deg);
    opacity: 0.1;
  }
  30% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.1;
  }
}

@-webkit-keyframes coccoc-alo-circle-anim {
  0% {
    transform: rotate(0) scale(0.5) skew(1deg);
    opacity: 0.1;
  }
  30% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.1;
  }
}

@-o-keyframes coccoc-alo-circle-anim {
  0% {
    transform: rotate(0) scale(0.5) skew(1deg);
    opacity: 0.1;
  }
  30% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.1;
  }
}

@keyframes coccoc-alo-circle-anim {
  0% {
    transform: rotate(0) scale(0.5) skew(1deg);
    opacity: 0.1;
  }
  30% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.1;
  }
}

@-moz-keyframes coccoc-alo-circle-fill-anim {
  0% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.2;
  }
  100% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
}

@-webkit-keyframes coccoc-alo-circle-fill-anim {
  0% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.2;
  }
  100% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
}

@-o-keyframes coccoc-alo-circle-fill-anim {
  0% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.2;
  }
  100% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
}

@keyframes coccoc-alo-circle-fill-anim {
  0% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
  50% {
    transform: rotate(0) scale(1) skew(1deg);
    opacity: 0.2;
  }
  100% {
    transform: rotate(0) scale(0.7) skew(1deg);
    opacity: 0.2;
  }
}
</style>
