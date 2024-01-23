// odpowiada za akcje typu logowanie/wylogowanie/przełączanie konta sklepowego

import { createReducer, current } from "@reduxjs/toolkit";
import accounts from "../data/accounts";
import offers from "../data/offers";
import orders from "../data/orders";
import quality from "../data/quality";
import reviews from "../data/reviews";
import sales from "../data/sales";

const initialState = {
  selectedUser: null,
  selectedStore: null,
  userData: {
    offers: null,
    orders: null,
    quality: null,
    reviews: null,
    sales: null
  }
};

export const accountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("LOGIN", (state, action) => {
      let userLogin = action.payload.login; // inputted account username
      let user = accounts.find((acc) => acc.login === userLogin);

      if (user === undefined) {
        let errorFunc = action.payload.setError;
        errorFunc(true);

        return;
      }

      return { ...initialState, selectedUser: user }; // ensure no leftover data
    })
    .addCase("SELECT_STORE", (state, action) => {
      var storeAccId = parseInt(action.payload); // shop account id
      let currentUser = current(state).selectedUser;
      let store = currentUser.shopAccounts.find((x) => x.id === storeAccId);

      if (store === undefined) {
        return;
      }

      state["selectedStore"] = store;

      // pick up data
      state["userData"] = {
        offers:
          offers?.find((offer) => offer.shopAccountId === storeAccId)?.data ??
          null,
        orders:
          orders?.find((order) => order.shopAccountId === storeAccId)?.data ??
          null,
        quality:
          quality?.find((qty) => qty.shopAccountId === storeAccId)?.data ??
          null,
        reviews:
          reviews?.find((rev) => rev.shopAccountId === storeAccId)?.data ??
          null,
        sales:
          sales?.find((sale) => sale.shopAccountId === storeAccId)?.data ?? null
      };
    })
    .addCase("LOGOUT", () => {
      return initialState;
    });
});
