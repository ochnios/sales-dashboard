import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import Placeholder from "../../components/layout/Placeholder";

export default function ReviewPage() {
  let strings = useSelector((state) => state.settings.strings);

  let { setTitle } = useOutletContext();
  useEffect(() => {
    setTitle(strings.reviewHeader);
  }, [strings]);

  return (
    <div className="page">
      <Placeholder />
    </div>
  );
}
