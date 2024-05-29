import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Whole_Movies from "./Components/Whole_Movies.jsx";
// import Footer from './Components/Footer.jsx';
import Team from "./Components/Team.jsx";
import LiveEvents from "./Components/LiveEvents.jsx";
import LiveSports from "./Components/LiveSports.jsx";
import Offers from "./Components/Offers.jsx";
import AI from "./Components/AI.jsx";
import Content from "./Components/Content.jsx";
import Bookings from "./Components/Bookings.jsx";
import Error from "./Components/Error.jsx";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.jsx";
import LoginButton from "./Components/login";
import RegLogForm from "./Components/RegLogForm.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/movies",
        element: <Whole_Movies />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/events",
        element: <LiveEvents />,
      },
      {
        path: "/sports",
        element: <LiveSports />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/askai",
        element: <AI />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/google-login",
        element: <LoginButton />,
      },
      {
        path: "*",
        element: <Error />,
      }
      // {
      //   path:"/main-page",
      //   element:<App/>
      // }
    ],
  },
  {
    path:"/reglogform",
    element: <RegLogForm />
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0ProviderWithNavigate>
      <RouterProvider router={router} />
    </Auth0ProviderWithNavigate>
  </React.StrictMode>
);
