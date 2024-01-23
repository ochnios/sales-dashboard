import { configureStore } from "@reduxjs/toolkit";
import { settingsReducer } from "./reducers/globalSettings";
import { accountReducer } from "./reducers/account";

// Restore persisted state
let persistedStateStr = localStorage.getItem("reduxState");
let persistedState;
if (persistedStateStr) {
  persistedState = JSON.parse(persistedStateStr);
  // Check and convert 'soldAt' date strings back to dates
  persistedState.account?.userData?.sales?.forEach((sale) => {
    sale.soldAt = new Date(sale.soldAt);
  });
  // Check and convert 'postedAt' date strings back to dates
  persistedState.account?.userData?.reviews?.forEach((review) => {
    review.postedAt = new Date(review.postedAt);
  });
} else {
  persistedState = {};
}

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    account: accountReducer
  },
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

// Update persisted state
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
