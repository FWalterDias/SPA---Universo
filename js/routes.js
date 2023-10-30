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

        this.background(pathname);
    }

    background(pathname){
        const page = document.querySelector(".app");
        
        switch (pathname) {
            case '/':
                page.style.background = "url('./assets/home.png') no-repeat center /cover";
                break;

            case '/oUniverso':
                page.style.background = "url('./assets/universo.png') no-repeat center /cover";
                break;

            case '/exploracao':
                page.style.background = "url('./assets/exploracao.png') no-repeat center /cover";
                break;

            default:
                break;
        }
    }
} 