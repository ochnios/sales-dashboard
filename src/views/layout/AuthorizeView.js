import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AuthorizeView(props) {
  let { selectedUser, selectedStore } = useSelector((state) => state.account);

  return (
    <>
      {selectedUser === null || selectedStore === null ? (
        <div>
          <Navigate to={selectedUser !== null ? "/user" : "/login"} />
        </div>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
