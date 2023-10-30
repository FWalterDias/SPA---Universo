import { Routes } from "./routes.js";

const routes = new Routes();

routes.add("/", "/SPA-Universo/pages/home/home.html");
routes.add("/oUniverso", "/SPA-Universo/pages/oUniverso/oUniverso.html");
routes.add("/exploracao", "/SPA-Universo/pages/exploracao/exploracao.html");
routes.add(404, "/SPA-Universo/pages/notFound/notFound.html");

routes.handle();

window.onpopstate = () => routes.handle();
window.route = () => routes.route();