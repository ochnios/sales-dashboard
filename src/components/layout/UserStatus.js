import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actionCreators/accountCreators";
import { ReactComponent as PersonIcon } from "bootstrap-icons/icons/person-circle.svg";
import ShopSelector from "../settings/ShopSelector";

export default function UserStatus() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { selectedUser } = useSelector((state) => state.account);
  let { strings, theme } = useSelector((state) => state.settings);

  return (
    <div
      className={`user-status d-flex align-items-center justify-content-between gap-3 bar-item-${theme}`}
    >
      <ShopSelector />
      <div className="d-flex flex-column align-items-start text-end">
        <span>
          {selectedUser === null
            ? strings.guest
            : `${selectedUser.name} ${selectedUser.surname}`}
        </span>
        <span className="align-self-end small mt-n1">
          {selectedUser === null ? (
            <Link to="/login" className="sign-link">
              {strings.loginButton}
            </Link>
          ) : (
            <a
              className="sign-link"
              onClick={() => {
                dispatch(logout());
              }}
            >
              {strings.logoutButton}
            </a>
          )}
        </span>
      </div>
      <PersonIcon className="top-bar-icon" />
    </div>
  );
}
