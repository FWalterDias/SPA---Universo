import { Routes } from "./routes.js";

const routes = new Routes();

routes.add("/", "./pages/home.html");
routes.add("/oUniverso", "./pages/oUniverso.html");
routes.add("/exploracao", "./pages/exploracao.html");
routes.add(404, "./pages/notFound.html")

routes.handle();

window.onpopstate = () => routes.handle();
window.route = () => routes.route();