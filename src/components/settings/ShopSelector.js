import { useDispatch, useSelector } from "react-redux";
import { switchStore } from "../../actionCreators/accountCreators";
import { useNavigate } from "react-router-dom";

export default function ShopSelector() {
  const navigate = useNavigate();
  let user = useSelector((state) => state.account.selectedUser);
  let store = useSelector((state) => state.account.selectedStore);
  let strings = useSelector((state) => state.settings.strings);
  let dispatch = useDispatch();

  return (
    <div>
      {user !== null && (
        <div>
          <select
            className="form-select"
            value={store?.id ?? "default"}
            onChange={(e) => {
              e.preventDefault();
              let wasInitiallySet = store !== null;

              dispatch(switchStore(e.target.value));

              if (!wasInitiallySet) navigate("/dashboard");
            }}
          >
            <option value="default" disabled hidden>
              {strings.selectStorePlaceholder}
            </option>
            {user.shopAccounts.map((el) => (
              <option key={el.id} value={el.id}>
                {el.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
