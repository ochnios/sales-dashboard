import { useSelector } from "react-redux";
import OrderType from "../../components/widget/OrderType";
import NoData from "../../components/widget/NoData";

export default function OrderWidget() {
  let data = useSelector((state) => state.account.userData.orders);
  let strings = useSelector((state) => state.settings.strings);

  return (
    <div className="widget orders-widget">
      <h3>{strings.orderHeader}</h3>
      {data !== null && (
        <div className="container">
          <div className="row px-2 py-3">
            <OrderType type="toPay" amount={data.toPay} />
            <OrderType type="toSend" amount={data.toSend} />
            <OrderType type="returns" amount={data.returns} />
          </div>
        </div>
      )}
      {data === null && <NoData />}
    </div>
  );
}
