import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import OrderWidget from "../widgets/OrderWidget";
import OfferRankingWidget from "../widgets/OfferRankingWidget";
import QualityWidget from "../widgets/QualityWidget";
import SaleTipWidget from "../widgets/SaleTipWidget";
import ReviewWidget from "../widgets/ReviewWidget";
import SaleChartWidget from "../widgets/SaleChartWidget";

export default function DashboardPage() {
  let { setTitle } = useOutletContext();
  let strings = useSelector((state) => state.settings.strings);

  useEffect(() => {
    setTitle(strings.dashboardHeader);
  }, [strings]);

  return (
    <div className="page">
      <div>
        <div className="row">
          <div className="col-xl">
            <OrderWidget />
          </div>
          <div className="col-xl">
            <QualityWidget />
          </div>
        </div>
        <div className="row">
          <div className="col-xl">
            <OfferRankingWidget />
          </div>
          <div className="col-xl">
            <ReviewWidget />
          </div>
        </div>
        <div className="col-xl-12">
          <SaleChartWidget />
        </div>
        <div className="col-xl-12">
          <SaleTipWidget />
        </div>
      </div>
    </div>
  );
}
