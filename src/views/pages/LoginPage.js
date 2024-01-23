import { useEffect, useRef, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actionCreators/accountCreators";
import { ReactComponent as WarningIcon } from "bootstrap-icons/icons/exclamation-triangle-fill.svg";

export default function LoginPage() {
  const [error, setError] = useState(false);
  let loginRef = useRef(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let strings = useSelector((state) => state.settings.strings);
  let { setTitle } = useOutletContext();
  let selectedUser = useSelector((state) => state.account.selectedUser);

  useEffect(() => {
    setTitle(strings.loginHeader);
  }, [strings]);

  useEffect(() => {
    if (selectedUser !== null) {
      navigate("/user");
    }
  }, [selectedUser]);

  return (
    <div className="page container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="form col-xl-4 col-md-6 col-sm-12 p-3">
          {error && (
            <div className="alert alert-danger d-flex align-items-center gap-3">
              <WarningIcon />
              <div>{strings.loginError}</div>
            </div>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              let username = loginRef.current.value;

              dispatch(login(username, setError));
            }}
          >
            <div className="d-flex flex-column">
              {/* <label className="form-label">{strings.loginLabel}</label> */}
              <input
                onChange={() => {
                  if (error) setError(false);
                }}
                ref={loginRef}
                className="form-control mb-2"
                type="text"
                required
                placeholder={strings.loginLabel}
              />
              <input
                className="form-control"
                type="password"
                required
                placeholder={strings.passwordLabel}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mt-3">
                {strings.loginButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
