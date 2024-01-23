import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FilterElem from "../../components/widget/FilterElem";
import OfferRankingItem from "../../components/widget/OfferRankingItem";
import NoData from "../../components/widget/NoData";
import { switchOffersFilter } from "../../actionCreators/settingCreators";

export default function OfferRankingWidget() {
  const [offers, setOffers] = useState(null);
  let dispatch = useDispatch();
  let currentFilter = useSelector((state) => state.settings.offersFilter);
  let data = useSelector((state) => state.account.userData.offers);
  let strings = useSelector((state) => state.settings.strings);

  useEffect(() => {
    if (data === null) {
      return;
    }

    let offers = structuredClone(data);
    if (currentFilter !== "best-selling") {
      offers = offers.sort((a, b) => {
        return a.sold === b.sold ? a.revenue - b.revenue : a.sold - b.sold;
      });
    } else {
      offers = offers.sort((a, b) => {
        return a.sold === b.sold ? a.views - b.views : b.sold - a.sold;
      });
    }
    offers = offers.slice(0, Math.min(5, offers.length));
    setOffers(offers);
  }, [currentFilter, data]);

  return (
    <div className="widget">
      <h3>{strings.offerRankingHeader}</h3>
      {data !== null && (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <FilterElem
                title={strings.bestSellingFilter}
                isSelected={currentFilter === "best-selling"}
                onClick={() => {
                  dispatch(switchOffersFilter("best-selling"));
                }}
              />
            </div>
            <div className="col-md-6">
              <FilterElem
                title={strings.worstSellingFilter}
                isSelected={currentFilter === "worst-selling"}
                onClick={() => {
                  dispatch(switchOffersFilter("worst-selling"));
                }}
              />
            </div>
          </div>
          <div className="px-2 py-3">
            {offers?.map((offer, idx) => (
              <OfferRankingItem key={idx} offer={offer} mode={currentFilter} />
            ))}
          </div>
        </div>
      )}
      {data === null && <NoData />}
    </div>
  );
}
