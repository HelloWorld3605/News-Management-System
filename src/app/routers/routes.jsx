import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./public.routers";
import adminRoutes from "./admin.routers";

const routes = createBrowserRouter([...publicRoutes, ...adminRoutes]);

export default routes;
