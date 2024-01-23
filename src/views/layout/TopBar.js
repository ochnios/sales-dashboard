import { ReactComponent as SettingsIcon } from "bootstrap-icons/icons/gear-fill.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserStatus from "../../components/layout/UserStatus";

export default function TopBar({ title }) {
  let navigate = useNavigate();
  let { strings, theme } = useSelector((state) => state.settings);

  return (
    <div className="top-bar d-flex py-2">
      <h1>{title}</h1>
      <div className="d-flex gap-3">
        <UserStatus className="bar-item" />
        <div
          onClick={() => {
            navigate("/settings");
          }}
          className={`d-flex align-items-center justify-content-between bar-item-${theme}`}
        >
          <div title={strings.settingsHeader}>
            <SettingsIcon className="top-bar-icon clickable" />
          </div>
        </div>
      </div>
    </div>
  );
}
