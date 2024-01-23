export const switchLang = (lang) => {
  return { type: "SWITCH_LANG", payload: lang };
};

export const switchTheme = (theme) => {
  return { type: "SWITCH_THEME", payload: theme };
};

export const switchOffersFilter = (filter) => {
  return { type: "SWITCH_OFFERS_FILTER", payload: filter };
};

export const switchReviewsFilter = (filter) => {
  return { type: "SWITCH_REVIEWS_FILTER", payload: filter };
};

export const switchChartDataFilter = (filter) => {
  return { type: "SWITCH_CHART_DATA_FILTER", payload: filter };
};

export const switchChartDateFilter = (filter) => {
  return { type: "SWITCH_CHART_DATE_FILTER", payload: filter };
};

export const switchChartTypeFilter = (filter) => {
  return { type: "SWITCH_CHART_TYPE_FILTER", payload: filter };
};

export const switchChartLastSeriesFilter = (filter) => {
  return { type: "SWITCH_CHART_LAST_SERIES_FILTER", payload: filter };
};
