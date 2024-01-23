import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function QualityCategory({ rating }) {
  const [grade, setGrade] = useState("N\\A");
  let strings = useSelector((state) => state.settings.strings);

  useEffect(() => {
    if (rating <= 10) {
      setGrade("first");
    } else if (rating <= 20) {
      setGrade("second");
    } else if (rating <= 30) {
      setGrade("third");
    } else if (rating <= 40) {
      setGrade("fourth");
    } else {
      setGrade("fifth");
    }
  }, [rating]);

  return (
    <div className="default-box text-center py-1">
      <h4 className="m-0">
        <span>{rating}/50</span>&nbsp;-&nbsp;
        <span>{strings.qualityRating[grade]}</span>
      </h4>
    </div>
  );
}
