import { Routes } from "./routes.js";

const routes = new Routes();

routes.add("/", "/pages/home/home.html");
routes.add("/SPA-Universo", "/pages/home/home.html");
routes.add("/SPA-Universo/oUniverso", "/pages/oUniverso/oUniverso.html");
routes.add("/SPA-Universo/exploracao", "/pages/exploracao/exploracao.html");
routes.add('/SPA-Universo/404', "/pages/notFound/notFound.html");

routes.handle();

window.onpopstate = () => routes.handle();
window.route = () => routes.route();