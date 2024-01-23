import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Placeholder from "../../components/layout/Placeholder";

export default function OrderPage() {
  let strings = useSelector((state) => state.settings.strings);
  let { orderType } = useParams();
  let { setTitle } = useOutletContext();

  useEffect(() => {
    setTitle(
      `${strings.orderHeader} ${
        orderType !== undefined ? `(${strings.orders[orderType]})` : ""
      }`
    );
  }, [orderType, strings]);

  return (
    <div className="page">
      <Placeholder />
    </div>
  );
}
