const GTM_ID = 'GTM-5GGHFT2';
const COOKIE_STORAGE_KEY = 'vue-cookie-accept-decline-myCookiePanel';

const DENIED_CONSENT = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  functionality_storage: 'denied',
  personalization_storage: 'denied',
  security_storage: 'granted',
  wait_for_update: 500,
};

const GRANTED_CONSENT = {
  ad_storage: 'granted',
  analytics_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'granted',
  security_storage: 'granted',
  wait_for_update: 500,
};

function scheduleIdle(callback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 3000 });
    return;
  }

  window.setTimeout(callback, 2500);
}

function getStoredCookieStatus() {
  try {
    return window.localStorage.getItem(COOKIE_STORAGE_KEY);
  } catch {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_STORAGE_KEY}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  }
}

function textFromElement(element) {
  return (element.getAttribute('aria-label') || element.textContent || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function routePath(route) {
  if (!route || !route.fullPath) {
    return window.location.pathname + window.location.search;
  }

  return route.fullPath;
}

function eventFromTrackedLink(link) {
  const eventName = link.dataset.analyticsEvent;

  if (!eventName) {
    return null;
  }

  const payload = {
    event: eventName,
    link_url: link.href,
    link_text: textFromElement(link),
  };

  if (link.dataset.leadMethod) {
    payload.lead_method = link.dataset.leadMethod;
  }

  if (link.dataset.serviceName) {
    payload.service_name = link.dataset.serviceName;
  }

  if (link.dataset.outboundName) {
    payload.outbound_name = link.dataset.outboundName;
  }

  return payload;
}

function eventFromHref(link) {
  const href = link.getAttribute('href') || '';
  const linkText = textFromElement(link);

  if (href.startsWith('tel:')) {
    return {
      event: 'generate_lead',
      lead_method: 'phone',
      link_url: href,
      link_text: linkText,
    };
  }

  if (href.startsWith('mailto:')) {
    return {
      event: 'generate_lead',
      lead_method: 'email',
      link_url: href,
      link_text: linkText,
    };
  }

  if (href.includes('wa.me')) {
    return {
      event: 'generate_lead',
      lead_method: 'whatsapp',
      link_url: href,
      link_text: linkText,
    };
  }

  if (!link.hostname || link.hostname === window.location.hostname) {
    return null;
  }

  return {
    event: 'outbound_click',
    outbound_name: link.hostname,
    link_url: link.href,
    link_text: linkText,
  };
}

export default defineNuxtPlugin(() => {
  const router = useRouter();
  const { proxy, consent, load } = useScriptGoogleTagManager({
    id: GTM_ID,
    trigger: 'manual',
    defaultConsent: DENIED_CONSENT,
    warmupStrategy: false,
  });

  function pushEvent(payload) {
    proxy.dataLayer.push(payload);
  }

  function loadGtm() {
    Promise.resolve(load()).catch(() => {});
  }

  function pageView(route) {
    pushEvent({
      event: 'page_view',
      page_path: routePath(route),
      page_location: window.location.href,
      page_title: document.title,
    });
  }

  function grantConsent() {
    consent.update(GRANTED_CONSENT);
    loadGtm();
  }

  function denyConsent() {
    consent.update(DENIED_CONSENT);
  }

  window.$karakaleAnalytics = {
    push: pushEvent,
    pageView,
    grantConsent,
    denyConsent,
  };
  window.loadKarakaleGTM = loadGtm;

  if (getStoredCookieStatus() === 'accept') {
    grantConsent();
  } else {
    scheduleIdle(loadGtm);
  }

  window.setTimeout(() => pageView(router.currentRoute.value), 0);

  router.afterEach((to) => {
    window.setTimeout(() => pageView(to), 0);
  });

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const link = event.target.closest('a');

    if (!link) {
      return;
    }

    const payload = eventFromTrackedLink(link) || eventFromHref(link);

    if (payload) {
      pushEvent(payload);
    }
  });
});
