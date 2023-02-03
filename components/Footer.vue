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
                  <n-link to="/about">Über Uns</n-link>
                </li>
                <li>
                  <n-link to="/leistungen">Leistungen</n-link>
                </li>
                <li>
                  <n-link to="/kontakt">Kontakt</n-link>
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
                <a href="tel::022896699180">Telefon: 0228-96699180</a>
              </p>
              <p>
                <a href="tel::015737154376">Mobil: 01573-7154376</a>
              </p>
            </div>
            <div class="social-share social--transparent text-white">
              <a href="#" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/gutachten.karakale/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/4915737154376" target="_blank">
                <i class="fab fa-whatsapp"></i>
              </a>
              <ShareNetwork
                network="WhatsApp"
                url="https://news.vuejs.org/issues/180"
                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                ><i class="fa fa-share-alt"></i
              ></ShareNetwork>
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
                <n-link to="/galerie">Galerie</n-link>
              </li>
              <li>
                <n-link to="/kontakt">Kontakt</n-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="copyright-right text-center text-md-right">
            <p>&copy; 2022 <b>Kfz Gutachten Karakale</b></p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Copyright Area -->

    <VueCookieAcceptDecline
      :debug="false"
      :disableDecline="false"
      :showPostponeButton="false"
      @clicked-accept="cookieClickedAccept"
      @clicked-decline="cookieClickedDecline"
      @clicked-postpone="cookieClickedPostpone"
      @removed-cookie="cookieRemovedCookie"
      @status="cookieStatus"
      elementId="myCookiePanel"
      position="bottom-left"
      ref="myCookiePanel"
      transitionName="slideFromBottom"
      type="floating"
      class="cookie-banner"
    >
      <!-- Optional -->
      <template #postponeContent>&times;</template>

      <!-- Optional -->
      <template #message>
        <b-card-header header-tag="header">Cookies!</b-card-header>
        <b-card-body>
          <span>
            Wir verwenden Cookies und ähnliche Technologien auf unserer Website
            und verarbeiten personenbezogene Daten von dir
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
            <b-link
              href="https://kfzgutachten-karakale.de/datenschutz/"
              target="_blank"
              >Datenschutzerklärung</b-link
            >. Einige Services verarbeiten personenbezogene Daten in den USA.
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
            erlaubst du, dass Google Analytics und Google Ads Conversion
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
        </b-card-body>
      </template>

      <!-- Optional -->
      <template #declineContent
        ><b-button class="btn-pimary">Ablehnen</b-button></template
      >

      <!-- Optional -->
      <template #acceptContent><b-button>Verstanden!</b-button></template>
    </VueCookieAcceptDecline>
  </footer>
</template>

<script>
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
export default {
  components: {
    VueCookieAcceptDecline,
  },
  data() {
    return {
      status: null,
      showMore: false,
    };
  },
  methods: {
    cookieStatus(status) {
      this.status = status;
    },
    cookieClickedAccept() {
      this.status = "accept";
      if (gtag) {
        gtag("consent", "accepted", {
          ad_storage: "granted",
          analytics_storage: "granted",
          functionality_storage: "granted",
          personalization_storage: "granted",
          security_storage: "granted",
          wait_for_update: 500,
        });
      }
    },
    cookieClickedDecline() {
      this.status = "decline";
    },
    cookieClickedPostpone() {
      this.status = "postpone";
    },
    cookieRemovedCookie() {
      this.status = null;
      this.$refs.myCookiePanel.init();
    },
    removeCookie() {
      this.$refs.myCookiePanel.removeCookie();
    },
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<style lang="scss" scoped>
.cookie-banner {
  width: 40rem;
  max-width: 95%;
  max-height: 70vh;
  border: 0.1rem solid #505050;
  overflow: auto;
  margin-right: -15em;
  @media (max-width: (730px)) {
    left: 50%;
    transform: translateX(-50%);
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
