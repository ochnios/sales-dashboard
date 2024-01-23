import { useDispatch, useSelector } from "react-redux";
import FilterElem from "../../components/widget/FilterElem";
import NoData from "../../components/widget/NoData";
import { useEffect, useState } from "react";
import ReviewItem from "../../components/widget/ReviewItem";
import { Link } from "react-router-dom";
import { switchReviewsFilter } from "../../actionCreators/settingCreators";

export default function ReviewWidget() {
  const [reviews, setReviews] = useState(null);
  let dispatch = useDispatch();
  let currentFilter = useSelector((state) => state.settings.reviewsFilter);
  let data = useSelector((state) => state.account.userData.reviews);
  let strings = useSelector((state) => state.settings.strings);

  useEffect(() => {
    if (data === null) {
      return;
    }

    let newData = structuredClone(data);

    if (currentFilter !== "all") {
      newData = newData.filter((x) => x.rating === currentFilter);
    }

    newData.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
    newData = newData.slice(0, Math.min(5, newData.length));

    setReviews(newData);
  }, [currentFilter, data]);

  return (
    <div className="widget">
      <h3>
        <Link to="/reviews">{strings.reviewHeader}</Link>
      </h3>
      {data !== null && (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <FilterElem
                title={strings.reviewFilter.all}
                isSelected={currentFilter === "all"}
                onClick={() => {
                  dispatch(switchReviewsFilter("all"));
                }}
              />
            </div>
            <div className="col-md-4">
              <FilterElem
                title={strings.reviewFilter.positive}
                isSelected={currentFilter === "positive"}
                onClick={() => {
                  dispatch(switchReviewsFilter("positive"));
                }}
              />
            </div>
            <div className="col-md-4">
              <FilterElem
                title={strings.reviewFilter.negative}
                isSelected={currentFilter === "negative"}
                onClick={() => {
                  dispatch(switchReviewsFilter("negative"));
                }}
              />
            </div>
          </div>
          <div className="px-2 py-3">
            {reviews?.map((el, idx) => (
              <ReviewItem key={idx} review={el} />
            ))}
          </div>
        </div>
      )}
      {data === null && <NoData />}
    </div>
  );
}
