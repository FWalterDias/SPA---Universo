export class Routes {
    routes = {};

    add(routeName, page) {
        this.routes[routeName] = page;
    }

    route(e) {
        e = e || window.event;
        e.preventDefault();

        window.history.pushState({}, "", e.target.href);

        this.handle();
    }

    handle() {
        const { pathname } = window.location;

        const route = this.routes[pathname] || 404;

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#main").innerHTML = html;
        });
    }
} 