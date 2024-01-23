import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";

export function NavigationItem({ to, text, icon }) {
  const match = useMatch("/:page");
  return (
    <li className="nav-item">
      <NavLink
        to={to}
        className={"nav-link " + (match?.params?.page === to && "active")}
      >
        <span className="nav-icon">{icon}</span>
        {text}
      </NavLink>
    </li>
  );
}
