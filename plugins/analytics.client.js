function getDataLayer() {
    window.dataLayer = window.dataLayer || [];
    return window.dataLayer;
}

function pushEvent(payload) {
    getDataLayer().push(payload);
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

function pushPageView(route) {
    pushEvent({
        event: 'page_view',
        page_path: routePath(route),
        page_location: window.location.href,
        page_title: document.title,
    });
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

export default ({ app }) => {
    getDataLayer();

    window.gtag = window.gtag || function gtag() {
        getDataLayer().push(arguments);
    };

    window.$karakaleAnalytics = {
        push: pushEvent,
        pageView: pushPageView,
    };

    window.setTimeout(() => pushPageView(app.router.currentRoute), 0);

    app.router.afterEach((to) => {
        window.setTimeout(() => pushPageView(to), 0);
    });

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a');

        if (!link) {
            return;
        }

        const payload = eventFromTrackedLink(link) || eventFromHref(link);

        if (payload) {
            pushEvent(payload);
        }
    });
};
