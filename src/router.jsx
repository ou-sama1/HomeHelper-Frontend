import {
    RootLayout,
    HomePage,
    ErrorPage,
} from "./pages";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { 
            index: true, 
            element: <HomePage />
         },
      ],
    },
]);
  
export default router;