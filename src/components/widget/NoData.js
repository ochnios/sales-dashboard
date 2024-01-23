import { useSelector } from "react-redux";

export default function NoData() {
  let strings = useSelector((state) => state.settings.strings);

  return (
    <div className="container text-center p-3">
      <p className="m-0">{strings.noData}</p>
    </div>
  );
}
