import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import Placeholder from "../../components/layout/Placeholder";

export default function QualityPage() {
  let strings = useSelector((state) => state.settings.strings);

  let { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle(strings.qualityHeader);
  }, [strings]);

  return (
    <div className="page">
      <Placeholder />
    </div>
  );
}
