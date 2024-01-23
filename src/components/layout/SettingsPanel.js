import { ReactComponent as SunIcon } from "bootstrap-icons/icons/sun-fill.svg";
import { ReactComponent as MoonIcon } from "bootstrap-icons/icons/moon-fill.svg";
import { useDispatch, useSelector } from "react-redux";
import { switchLang, switchTheme } from "../../actionCreators/settingCreators";

export default function SettingsPanel() {
  let dispatch = useDispatch();
  let strings = useSelector((state) => state.settings.strings);
  let theme = useSelector((state) => state.settings.theme);
  let lang = useSelector((state) => state.settings.lang);

  return (
    <div className="d-flex align-items-center justify-content-between gap-3">
      <div title={strings.switchThemeTitle}>
        {theme == "light" ? (
          <MoonIcon
            className="switch-theme"
            onClick={() => {
              dispatch(switchTheme("dark"));
              document.documentElement.setAttribute("data-bs-theme", "dark");
            }}
          />
        ) : (
          <SunIcon
            className="switch-theme"
            onClick={() => {
              dispatch(switchTheme("light"));
              document.documentElement.setAttribute("data-bs-theme", "light");
            }}
          />
        )}
      </div>
      <div title={strings.switchLangTitle}>
        <span
          className="switch-lang user-select-none"
          onClick={() => {
            dispatch(switchLang(lang === "pl" ? "en" : "pl"));
          }}
        >
          {lang === "pl" ? "EN" : "PL"}
        </span>
      </div>
    </div>
  );
}
