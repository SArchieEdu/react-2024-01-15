import { Provider } from "react-redux";
import { store } from "./redux";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/component";
import { HomePage } from "./pages/home";
import { ContactsPage } from "./pages/contacts";
import { AboutUsPage } from "./pages/about-us";
import { HeadphonePage } from "./pages/headphone";
import { Headphone } from "./components/headphone/component";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />,
      },
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "headphones",
        element: <HeadphonePage />,
        children: [
          {
            index: true,
            element: <Navigate to="/headphones/MLXJ2LLA" replace />,
          },
          { path: ":headphoneId", element: <Headphone /> },
        ],
      },
    ],
  },
  { path: "ad", element: <div>AdPage</div> },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
