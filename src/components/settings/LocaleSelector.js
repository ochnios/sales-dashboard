import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLang } from "../../actionCreators/settingCreators";

export default function LocaleSelector() {
  let lang = useSelector((state) => state.settings.lang);
  let strings = useSelector((state) => state.settings.strings);
  let dispatch = useDispatch();
  let sel = useRef();

  return (
    <div className="mb-3">
      <label className="form-label col-4">{strings.languageLabel}</label>
      <select
        className="form-select col-8"
        ref={sel}
        onChange={(e) => {
          e.preventDefault();
          dispatch(switchLang(sel.current.value));
        }}
        value={lang}
      >
        <option value="en">English</option>
        <option value="pl">polski</option>
      </select>
    </div>
  );
}
