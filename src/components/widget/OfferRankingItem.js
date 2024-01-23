import { useSelector } from "react-redux";

export default function OfferRankingItem({ offer, mode }) {
  let strings = useSelector((state) => state.settings.strings);

  return (
    <div className="default-box d-flex mb-1 align-items-center">
      <div>
        <img
          className="offer-photo mr-3 rounded"
          src={"/assets/offers-images/" + offer.photo}
        />
      </div>
      <div className="container">
        <div className="row pt-1">
          <div className="col-md-12">
            <h6 className="mb-0">{offer.name}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <span>
              {strings.soldLabel}: {offer.sold}
            </span>
          </div>
          <div className="col-md-6">
            {mode === "best-selling" ? (
              <span>
                {`${strings.revenueLabel}: `}
                <span>
                  {offer.revenue.toLocaleString("pl-PL", {
                    style: "currency",
                    currency: "PLN"
                  })}
                </span>
              </span>
            ) : (
              <span>{`${strings.viewsLabel}: ${offer.views}`}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
