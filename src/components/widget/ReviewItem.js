import { useSelector } from "react-redux";

export default function ReviewItem({ review }) {
  let strings = useSelector((state) => state.settings.strings);
  let theme = useSelector((state) => state.settings.theme);

  return (
    <div className="default-box d-flex mb-1">
      <div className="container p-2">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h6 className="mb-0">{strings.reviewType[review.rating]}</h6>
            <span className="reviewer-name">
              &ensp;|&ensp;{review.reviewerName}
            </span>
          </div>
          <span>{review.postedAt.toLocaleDateString()}</span>
        </div>
        <div className="d-flex">
          <p className="m-0 fst-italic">{review.comment}</p>
        </div>
      </div>
    </div>
  );
}
