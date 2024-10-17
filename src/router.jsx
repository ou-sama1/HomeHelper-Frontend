import {
    RootLayout,
    HomePage,
    SignupPage,
    LoginPage,
    ErrorPage,
} from "./pages";

import { checkGuestLoader, tokenLoader } from "./utils/Auth";
import { AuthLayout } from "./layouts";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        loader: checkGuestLoader,
        children: [
          {
            path: "signup",
            element: <SignupPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
]);
  
export default router;