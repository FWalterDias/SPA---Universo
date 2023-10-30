import { Routes } from "./routes.js";

const routes = new Routes();

routes.add("/", "./pages/home/home.html");
routes.add("/oUniverso", "./pages/oUniverso/oUniverso.html");
routes.add("/exploracao", "./pages/exploracao/exploracao.html");
routes.add(404, "./pages/notFound/notFound.html");

routes.handle();

window.onpopstate = () => routes.handle();
window.route = () => routes.route();