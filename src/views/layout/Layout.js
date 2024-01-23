import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import TopBar from "./TopBar";
import { Navigate, Outlet, useOutlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  let theme = useSelector((state) => state.settings.theme);
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, []);

  const [title, setTitle] = useState("");
  let outlet = useOutlet();

  return (
    <div className="container-fluid d-flex m-0 p-0 m-auto">
      <Navigation />
      <div className="container px-4 py-1">
        <TopBar title={title} />
        {outlet === null && <Navigate to="/dashboard" />}
        <div className="container-fluid px-0 py-4">
          <Outlet context={{ setTitle }} />
        </div>
      </div>
    </div>
  );
}
