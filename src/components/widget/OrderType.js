import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrderType({ type, amount }) {
  let strings = useSelector((state) => state.settings.strings);

  return (
    <div className="col-md-4 text-center px-2">
      <div className={"order-type py-2 " + type}>
        <div className="order-type-link">
          <Link to={`/orders/${type}`}>{strings.orders[type]}</Link>
        </div>
        <h4 className="m-0 order-type-amount">{amount}</h4>
      </div>
    </div>
  );
}
