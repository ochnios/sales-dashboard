import { useSelector } from "react-redux";

export default function Placeholder() {
  let strings = useSelector((state) => state.settings.strings);

  return (
    <div>
      <h3>Placeholder</h3>
      <p>{strings.placeholderLabel}</p>
    </div>
  );
}
