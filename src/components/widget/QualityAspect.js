export default function QualityAspect({ title, rating }) {
  return (
    <div className="col-md-4 text-center px-2">
      <div className="default-box p-2">
        <p className="m-0">{title}</p>
        <h4 className="m-0">{rating}/10</h4>
      </div>
    </div>
  );
}
