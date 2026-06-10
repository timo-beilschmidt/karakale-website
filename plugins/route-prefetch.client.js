const PRIMARY_ROUTES = [
    '/leistungen/',
    '/kfz-gutachten-bonn/',
    '/unfallgutachten-bonn/',
    '/hauptuntersuchung-tuev-bonn/',
    '/galerie/',
    '/about/',
    '/kontakt/',
];

function scheduleIdle(callback) {
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback, { timeout: 4000 });
        return;
    }

    window.setTimeout(callback, 1500);
}

function loadAsyncComponent(component) {
    if (typeof component !== 'function' || component.cid) {
        return;
    }

    let result;

    try {
        result = component();
    } catch (error) {
        return;
    }

    if (result && typeof result.catch === 'function') {
        result.catch(() => {});
    }
}

export default ({ app }) => {
    if (!app.router) {
        return;
    }

    scheduleIdle(() => {
        PRIMARY_ROUTES
            .filter((path) => path !== app.router.currentRoute.path)
            .forEach((path) => {
                const resolved = app.router.resolve(path);
                const components = app.router.getMatchedComponents(resolved.route);

                components.forEach(loadAsyncComponent);
            });
    });
};
