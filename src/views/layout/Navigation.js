import { NavigationItem } from "../../components/layout/NavigationItem";
import { useSelector } from "react-redux";
import { ReactComponent as DashboardIcon } from "bootstrap-icons/icons/grid.svg";
import { ReactComponent as OrdersIcon } from "bootstrap-icons/icons/cart-fill.svg";
import { ReactComponent as QualityIcon } from "bootstrap-icons/icons/award-fill.svg";
import { ReactComponent as ReviewsIcon } from "bootstrap-icons/icons/chat-right-text-fill.svg";
import NavigationLogo from "../../components/layout/NavigationLogo";
import SettingsPanel from "../../components/layout/SettingsPanel";

export default function Navigation() {
  let strings = useSelector((state) => state.settings.strings);
  let { selectedUser, selectedStore } = useSelector((state) => state.account);

  return (
    <div className="menu d-flex flex-column flex-shrink-0 shadow">
      <NavigationLogo />
      {selectedUser !== null && selectedStore !== null && (
        <ul className="nav nav-pills flex-column mb-auto">
          <NavigationItem
            to="dashboard"
            text={strings.dashboardLink}
            icon={<DashboardIcon className="nav-icon" />}
          />
          <NavigationItem
            to="orders"
            text={strings.orderHeader}
            icon={<OrdersIcon className="nav-icon" />}
          />
          <NavigationItem
            to="quality"
            text={strings.qualityHeader}
            icon={<QualityIcon className="nav-icon" />}
          />
          <NavigationItem
            to="reviews"
            text={strings.reviewHeader}
            icon={<ReviewsIcon className="nav-icon" />}
          />
        </ul>
      )}
      <div className="d-flex h-100 align-items-end justify-content-center">
        <div className="p-3">
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}
