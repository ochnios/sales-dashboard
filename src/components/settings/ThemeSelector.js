import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../../actionCreators/settingCreators";

export default function ThemeSelector() {
  let theme = useSelector((state) => state.settings.theme);
  let strings = useSelector((state) => state.settings.strings);
  let dispatch = useDispatch();
  let sel = useRef();

  return (
    <div>
      <label className="form-label col-4">{strings.themeLabel}</label>
      <select
        className="form-select col-8"
        ref={sel}
        onChange={(e) => {
          e.preventDefault();
          dispatch(switchTheme(sel.current.value));
          document.documentElement.setAttribute(
            "data-bs-theme",
            sel.current.value
          );
        }}
        value={theme}
      >
        <option value="light">{strings.theme.light}</option>
        <option value="dark">{strings.theme.dark}</option>
      </select>
    </div>
  );
}
