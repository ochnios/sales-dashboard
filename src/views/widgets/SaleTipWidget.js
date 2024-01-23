import { useSelector } from "react-redux";

export default function SaleTipWidget() {
  let strings = useSelector((state) => state.settings.strings);
  let theme = useSelector((state) => state.settings.theme);

  return (
    <div className="widget">
      <h3>{strings.tipHeader}</h3>
      <div className="container text-center p-3">
        <p className="m-0">{strings.tipText}</p>
      </div>
    </div>
  );
}
