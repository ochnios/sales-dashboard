import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import LocaleSelector from "../../components/settings/LocaleSelector";
import ThemeSelector from "../../components/settings/ThemeSelector";

export default function SettingsPage() {
  let strings = useSelector((state) => state.settings.strings);
  let { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle(strings.settingsHeader);
  }, [strings]);

  return (
    <div className="page container">
      <div className="row d-flex justify-content-center mt-5">
        <div className="form col-xl-4 col-md-6 col-sm-12 p-3">
          <LocaleSelector />
          <ThemeSelector />
        </div>
      </div>
    </div>
  );
}
