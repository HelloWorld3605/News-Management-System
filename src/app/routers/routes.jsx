import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.routers";

const routes = createBrowserRouter([...publicRoutes]);

export default routes;
