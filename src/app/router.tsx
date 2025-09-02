import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";
import { protectedLoader, ProtectedRoute } from "./protected-route";
import { AntdProvider } from "./antd-provider";
import { Layout } from "@/features/layout/layout";

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <AntdProvider>
          <App />
        </AntdProvider>
      </Providers>
    ),
    children: [
      {
        loader: protectedLoader,
        element: <ProtectedRoute />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: ROUTES.HOME,
                lazy: () => import("@/features/home/home.page"),
              },
            ],
          },
        ],
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import("@/features/auth/login.page"),
      },
    ],
  },
]);
