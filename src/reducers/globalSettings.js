// odpowiada za zmianę motywu/języka

import { createReducer } from "@reduxjs/toolkit";
import localisation from "../data/localisation";

const initialState = {
  lang: "pl",
  theme: "dark",
  strings: localisation.find((el) => el.name === "pl").strings,
  offersFilter: "best-selling",
  reviewsFilter: "all",
  chartDataFilter: "revenue",
  chartDateFilter: "today",
  chartTypeFilter: "line",
  chartShowLastSeries: false
};

export const settingsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("SWITCH_LANG", (state, action) => {
      let selectedLang = action.payload;

      switch (selectedLang) {
        case "en":
        case "pl":
          state["lang"] = selectedLang;
          break;
        default:
          state["lang"] = "pl";
          break;
      }

      state["strings"] = localisation.find(
        (el) => el.name === state["lang"]
      ).strings;
    })
    .addCase("SWITCH_THEME", (state, action) => {
      let selectedTheme = action.payload;

      switch (selectedTheme) {
        case "dark":
        case "light":
          state["theme"] = selectedTheme;
          break;
        default:
          state["theme"] = "light";
          break;
      }
    })
    .addCase("SWITCH_OFFERS_FILTER", (state, action) => {
      let selectedFilter = action.payload;
      switch (selectedFilter) {
        case "best-selling":
        case "worst-selling":
          state["offersFilter"] = selectedFilter;
          break;
        default:
          state["offersFilter"] = "best-selling";
          break;
      }
    })
    .addCase("SWITCH_REVIEWS_FILTER", (state, action) => {
      let selectedFilter = action.payload;
      switch (selectedFilter) {
        case "all":
        case "positive":
        case "negative":
          state["reviewsFilter"] = selectedFilter;
          break;
        default:
          state["reviewsFilter"] = "all";
          break;
      }
    })
    .addCase("SWITCH_CHART_DATA_FILTER", (state, action) => {
      let selectedFilter = action.payload;
      console.log(selectedFilter);
      switch (selectedFilter) {
        case "revenue":
        case "sold":
          state["chartDataFilter"] = selectedFilter;
          break;
        default:
          state["chartDataFilter"] = "revenue";
          break;
      }
    })
    .addCase("SWITCH_CHART_DATE_FILTER", (state, action) => {
      let selectedFilter = action.payload;
      switch (selectedFilter) {
        case "today":
        case "thisWeek":
        case "lastWeek":
          state["chartDateFilter"] = selectedFilter;
          break;
        default:
          state["chartDateFilter"] = "today";
          break;
      }
    })
    .addCase("SWITCH_CHART_TYPE_FILTER", (state, action) => {
      let selectedFilter = action.payload;
      switch (selectedFilter) {
        case "line":
        case "bar":
          state["chartTypeFilter"] = selectedFilter;
          break;
        default:
          state["chartTypeFilter"] = "line";
          break;
      }
    })
    .addCase("SWITCH_CHART_LAST_SERIES_FILTER", (state, action) => {
      let selectedFilter = action.payload;
      if (selectedFilter == true) {
        state["chartShowLastSeries"] = selectedFilter;
      } else {
        state["chartShowLastSeries"] = false;
      }
    });
});
