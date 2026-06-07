<template>
  <footer
    class="page-footer bg_color--3 pl--150 pr--150 pl_lp--70 pr_lp--70 pl_lg--70 pr_lg--70 pl_md--50 pr_md--50 pl_sm--30 pr_sm--30"
  >
    <div
      class="bk-footer-inner pt--150 pb--60 pt_md--90 pt_sm--90 pb_md--30 pb_sm--20"
    >
      <div class="row">
        <div class="col-lg-5 col-xl-7 col-sm-6">
          <div class="footer-widget">
            <div class="logo">
              <n-link to="/">
                <img
                  src="/img/logo/logo-white.svg"
                  alt="Logo von Kfz Gutachten Karakale in weiß"
                  loading="lazy"
                />
              </n-link>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-xl-2 col-sm-6 mt_mobile--40">
          <div class="footer-widget menu--about">
            <h2 class="widgettitle">Über Uns</h2>
            <div class="footer-menu">
              <ul class="ft-menu-list bk-hover">
                <li>
                  <n-link to="/about/">Über Uns</n-link>
                </li>
                <li>
                  <n-link to="/leistungen/">Leistungen</n-link>
                </li>
                <li>
                  <n-link to="/kontakt/">Kontakt</n-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-3 col-sm-6 mt_md--40 mt_sm--40">
          <div class="footer-widget menu--contact">
            <h2 class="widgettitle">Kontakt</h2>
            <div class="footer-address bk-hover mb--20">
              <p>Siemensstr. 1, 53121 Bonn</p>
              <p>
                <a href="mailto:info@ing-karakale.de">info@ing-karakale.de</a>
              </p>
              <p>
                <a href="tel:022896699180">Telefon: 0228-96699180</a>
              </p>
              <p>
                <a href="tel:015737154376">Mobil: 01573-7154376</a>
              </p>
            </div>
            <div class="social-share social--transparent text-white">
              <a
                href="https://www.facebook.com/CarKarakale/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <SiteIcon name="facebook" />
              </a>
              <a
                href="https://www.instagram.com/gutachten.karakale/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <SiteIcon name="instagram" />
              </a>
              <a
                href="https://wa.me/4915737154376"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <SiteIcon name="whatsapp" />
              </a>
            </div>
            <br />
            <h2 class="widgettitle hidden">
              Wenn es mal kracht oder die Plakette fehlt...
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Copyright Area -->
    <div class="copyright ptb--50">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="copyright-left text-left">
            <ul
              class="bk-copyright-menu d-flex justify-content-center justify-content-md-start bk-hover"
            >
              <li>
                <n-link to="/galerie/">Galerie</n-link>
              </li>
              <li>
                <n-link to="/kontakt/">Kontakt</n-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="copyright-right text-center text-md-right">
            <p>&copy; 2026 <b>Kfz Gutachten Karakale</b></p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Copyright Area -->

    <transition name="slideFromBottom">
      <div
        v-if="isCookieOpen"
        id="myCookiePanel"
        ref="myCookiePanel"
        class="cookie-banner"
      >
        <header class="cookie-banner__header">Datenschutz-Einstellungen</header>
        <div class="cookie-banner__body">
          <span>
            Wir verwenden Cookies und ähnliche Technologien, um Zugriffe auf
            unsere Website zu analysieren.
          </span>
          <span v-if="showMore">
            (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren,
            Medien von Drittanbietern einzubinden oder Zugriffe auf unsere
            Website zu analysieren. Die Datenverarbeitung kann auch erst in
            Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit
            Dritten, die wir in den Privatsphäre-Einstellungen benennen. Die
            Datenverarbeitung kann mit deiner Einwilligung oder auf Basis eines
            berechtigten Interesses erfolgen, dem du in den
            Privatsphäre-Einstellungen widersprechen kannst. Du hast das Recht,
            nicht einzuwilligen und deine Einwilligung zu einem späteren
            Zeitpunkt zu ändern oder zu widerrufen. Weitere Informationen zur
            Verwendung deiner Daten findest du in unserer
            <a
              href="https://kfzgutachten-karakale.de/datenschutz/"
              target="_blank"
              rel="noopener noreferrer"
            >Datenschutzerklärung</a>. Einige Services verarbeiten personenbezogene Daten in den USA.
            Indem du der Nutzung dieser Services zustimmst, erklärst du dich
            auch mit der Verarbeitung deiner Daten in den USA gemäß Art. 49 (1)
            lit. a DSGVO einverstanden. Die USA werden vom EuGH als ein Land mit
            einem unzureichenden Datenschutzniveau nach EU-Standards angesehen.
            Insbesondere besteht das Risiko, dass deine Daten von US-Behörden zu
            Kontroll- und Überwachungszwecken verarbeitet werden, unter
            Umständen ohne die Möglichkeit eines Rechtsbehelfs. Du bist unter 16
            Jahre alt? Dann kannst du nicht in optionale Services einwilligen.
            Du kannst deine Eltern oder Erziehungsberechtigten bitten, mit dir
            in diese Services einzuwilligen. Wenn du alle Services akzeptierst,
            erlaubst du, dass optionale Google-Tags wie Google Analytics und,
            sofern im Google Tag Manager aktiviert, Google Ads Conversion
            Tracking geladen werden.
          </span>
          <span v-if="!showMore"> ... </span>
          <br />
          <p
            v-if="!showMore"
            class="show-more-btn align-end"
            @click="toggleShowMore"
          >
            Mehr anzeigen
          </p>
          <p v-if="showMore" class="show-more-btn" @click="toggleShowMore">
            Weniger anzeigen
          </p>
        </div>
        <div class="cookie-banner__actions">
          <button type="button" class="cookie-banner__button cookie-banner__button--decline" @click="cookieClickedDecline">
            Ablehnen
          </button>
          <button type="button" class="cookie-banner__button cookie-banner__button--accept" @click="cookieClickedAccept">
            Akzeptieren
          </button>
        </div>
      </div>
    </transition>
  </footer>
</template>

<script>
import SiteIcon from "@/components/SiteIcon";

const COOKIE_STORAGE_KEY = "vue-cookie-accept-decline-myCookiePanel";

export default {
  components: {
    SiteIcon,
  },
  data() {
    return {
      isCookieOpen: false,
      status: null,
      showMore: false,
    };
  },
  mounted() {
    this.initCookiePanel();
  },
  methods: {
    initCookiePanel() {
      const status = this.getStoredCookieStatus();
      this.status = status;
      this.isCookieOpen = !status;
      this.cookieStatus(status);
    },
    getStoredCookieStatus() {
      if (typeof window === "undefined") {
        return null;
      }

      try {
        return window.localStorage.getItem(COOKIE_STORAGE_KEY);
      } catch (error) {
        const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_STORAGE_KEY}=([^;]*)`));
        return match ? decodeURIComponent(match[1]) : null;
      }
    },
    setStoredCookieStatus(status) {
      if (typeof window === "undefined") {
        return;
      }

      try {
        window.localStorage.setItem(COOKIE_STORAGE_KEY, status);
      } catch (error) {
        document.cookie = `${COOKIE_STORAGE_KEY}=${encodeURIComponent(status)}; path=/; max-age=31536000; SameSite=Lax`;
      }
    },
    cookieStatus(status) {
      this.status = status;
      if (status === "accept") {
        this.grantAnalyticsConsent();
      }
      if (status === "decline") {
        this.denyAnalyticsConsent();
      }
    },
    cookieClickedAccept() {
      this.status = "accept";
      this.isCookieOpen = false;
      this.setStoredCookieStatus("accept");
      this.grantAnalyticsConsent();
    },
    cookieClickedDecline() {
      this.status = "decline";
      this.isCookieOpen = false;
      this.setStoredCookieStatus("decline");
      this.denyAnalyticsConsent();
    },
    cookieClickedPostpone() {
      this.status = "postpone";
      this.isCookieOpen = false;
      this.setStoredCookieStatus("postpone");
    },
    cookieRemovedCookie() {
      this.status = null;
      this.initCookiePanel();
    },
    removeCookie() {
      if (typeof window === "undefined") {
        return;
      }

      try {
        window.localStorage.removeItem(COOKIE_STORAGE_KEY);
      } catch (error) {
        document.cookie = `${COOKIE_STORAGE_KEY}=; path=/; max-age=0; SameSite=Lax`;
      }

      this.cookieRemovedCookie();
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    grantAnalyticsConsent() {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          functionality_storage: "granted",
          personalization_storage: "granted",
          security_storage: "granted",
          wait_for_update: 500,
        });
      }
    },
    denyAnalyticsConsent() {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: "denied",
          analytics_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          functionality_storage: "denied",
          personalization_storage: "denied",
          security_storage: "granted",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cookie-banner {
  background: #fff;
  border: 0.1rem solid #505050;
  bottom: 24px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
  color: #222;
  left: 24px;
  max-height: 70vh;
  max-width: 95%;
  overflow: auto;
  position: fixed;
  width: 40rem;
  z-index: 9999;

  @media (max-width: (730px)) {
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 32px);
  }
}

.cookie-banner__header {
  border-bottom: 1px solid #e5e5e5;
  font-weight: 700;
  padding: 16px 20px;
}

.cookie-banner__body {
  line-height: 1.65;
  padding: 18px 20px 8px;
}

.cookie-banner__actions {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 0 20px 18px;
}

.cookie-banner__button {
  border: 1px solid #222;
  cursor: pointer;
  font-weight: 700;
  min-width: 110px;
  padding: 10px 18px;
}

.cookie-banner__button--accept {
  background: #222;
  color: #fff;
}

.cookie-banner__button--decline {
  background: #fff;
  color: #222;
}

.slideFromBottom-enter-active,
.slideFromBottom-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slideFromBottom-enter,
.slideFromBottom-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 730px) {
  .slideFromBottom-enter,
  .slideFromBottom-leave-to {
    transform: translate(-50%, 20px);
  }
}

p {
  &.show-more-btn {
    border: 0;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    color: rgb(70, 107, 155);
    display: inline-block;
    margin-top: 12px;
    transition: 0.3s;
    cursor: pointer;
    i {
      font-size: 12px;
      left: auto;
      right: auto;
      -webkit-transform: none;
      -ms-transform: none;
      transform: none;
      margin-left: 15px;
      color: $theme-color;
      transition: 0.3s;
    }
    &:hover {
      color: #0038e3;
    }
  }
}
</style>
