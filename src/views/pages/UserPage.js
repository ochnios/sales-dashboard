import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import ShopSelector from "../../components/settings/ShopSelector";
import { ReactComponent as InfoIcon } from "bootstrap-icons/icons/info-circle-fill.svg";

export default function UserPage() {
  let strings = useSelector((state) => state.settings.strings);
  let { setTitle } = useOutletContext();
  let navigate = useNavigate();
  let { selectedUser, selectedStore } = useSelector((state) => state.account);

  useEffect(() => {
    if (selectedUser === null) {
      navigate("/login");
    }
    setTitle(strings.userHeader);
  }, [selectedUser, strings]);

  return (
    <div className="page container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="form col-xl-4 col-md-6 col-sm-12 p-3">
          {selectedStore === null && (
            <div className="alert alert-info d-flex align-items-center gap-3">
              <InfoIcon />
              <div>{strings.storeSelectLabel}</div>
            </div>
          )}
          <ShopSelector />
        </div>
      </div>
    </div>
  );
}
