import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./views/layout/Layout";
import DashboardPage from "./views/pages/DashboardPage";
import OrderPage from "./views/pages/OrderPage";
import QualityPage from "./views/pages/QualityPage";
import ReviewPage from "./views/pages/ReviewPage";
import LoginPage from "./views/pages/LoginPage";
import SettingsPage from "./views/pages/SettingsPage";
import AuthorizeView from "./views/layout/AuthorizeView";
import UserPage from "./views/pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: (
          <AuthorizeView>
            <DashboardPage />
          </AuthorizeView>
        )
      },
      {
        path: "orders",
        element: (
          <AuthorizeView>
            <OrderPage />
          </AuthorizeView>
        ),
        children: [
          {
            path: ":orderType"
          }
        ]
      },
      {
        path: "quality",
        element: (
          <AuthorizeView>
            <QualityPage />
          </AuthorizeView>
        )
      },
      {
        path: "reviews",
        element: (
          <AuthorizeView>
            <ReviewPage />
          </AuthorizeView>
        )
      },
      {
        path: "login",
        element: <LoginPage />
      },
      {
        path: "settings",
        element: <SettingsPage />
      },
      {
        path: "user",
        element: <UserPage />
      }
    ]
  }
]);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
