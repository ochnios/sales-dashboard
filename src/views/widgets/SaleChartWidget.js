import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterElem from "../../components/widget/FilterElem";
import NoData from "../../components/widget/NoData";
import {
  switchChartDataFilter,
  switchChartDateFilter,
  switchChartLastSeriesFilter,
  switchChartTypeFilter
} from "../../actionCreators/settingCreators";

import {
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer
} from "recharts";

export default function SaleChartWidget() {
  const [plotData, setPlotData] = useState(null);
  let dispatch = useDispatch();
  let currentDataFilter = useSelector(
    (state) => state.settings.chartDataFilter
  );
  let currentDateFilter = useSelector(
    (state) => state.settings.chartDateFilter
  );
  let currentTypeFilter = useSelector(
    (state) => state.settings.chartTypeFilter
  );
  let showLastSeries = useSelector(
    (state) => state.settings.chartShowLastSeries
  );
  let data = useSelector((state) => state.account.userData.sales);
  let { strings, theme } = useSelector((state) => state.settings);

  const mapNumToDay = (num) => {
    switch (num) {
      case 1:
        return strings.dayAbbr.mon;
      case 2:
        return strings.dayAbbr.tue;
      case 3:
        return strings.dayAbbr.wed;
      case 4:
        return strings.dayAbbr.thu;
      case 5:
        return strings.dayAbbr.fri;
      case 6:
        return strings.dayAbbr.sat;
      case 0:
        return strings.dayAbbr.sun;
    }
  };

  useEffect(() => {
    if (data === null) {
      return;
    }
    // uv - poprzedni
    // pv - teraz

    let newData = [];

    if (currentDateFilter === "today") {
      let uvDayData = data.filter(
        (el) => el.type === "h" && el.soldAt.getDate() === 20
      );
      let pvDayData = data.filter(
        (el) => el.type === "h" && el.soldAt.getDate() === 21
      );

      for (let i = 6; i < 22; i++) {
        newData.push({
          name: `${i}:00`,
          uv: uvDayData.find((el) => el.soldAt.getHours() === i)[
            currentDataFilter
          ],
          pv: pvDayData.find((el) => el.soldAt.getHours() === i)[
            currentDataFilter
          ]
        });
      }
    } else {
      let startingPoint = currentDateFilter === "lastWeek" ? 1 : 8;
      let uvWeekData = data.filter(
        (el) => el.type === "d" && el.soldAt.getDate() < startingPoint + 7
      );
      let pvWeekData = data.filter(
        (el) =>
          el.type === "d" &&
          el.soldAt.getDate() >= startingPoint + 7 &&
          el.soldAt.getDate() < startingPoint + 14
      );

      for (let i = startingPoint; i < startingPoint + 7; i++) {
        newData.push({
          name: mapNumToDay(i % 7),
          uv: uvWeekData.find((el) => el.soldAt.getDate() === i)[
            currentDataFilter
          ],
          pv: pvWeekData.find((el) => el.soldAt.getDate() === i + 7)[
            currentDataFilter
          ]
        });
      }
    }
    setPlotData(newData);
  }, [data, currentDataFilter, currentDateFilter, strings]);

  const handleShowLastSeries = () => {
    dispatch(switchChartLastSeriesFilter(!showLastSeries));
  };

  return (
    <div className="widget">
      <h3>{strings.plotHeader}</h3>
      {data !== null && (
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex justify-content-center gap-3">
                <FilterElem
                  title={strings.plotDataFilter.revenue}
                  isSelected={currentDataFilter === "revenue"}
                  onClick={() => {
                    dispatch(switchChartDataFilter("revenue"));
                  }}
                />
                <FilterElem
                  title={strings.plotDataFilter.amount}
                  isSelected={currentDataFilter === "sold"}
                  onClick={() => {
                    dispatch(switchChartDataFilter("sold"));
                  }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center gap-3">
                <FilterElem
                  title={strings.plotDateFilter.today}
                  isSelected={currentDateFilter === "today"}
                  onClick={() => {
                    dispatch(switchChartDateFilter("today"));
                  }}
                />
                <FilterElem
                  title={strings.plotDateFilter.thisWeek}
                  isSelected={currentDateFilter === "thisWeek"}
                  onClick={() => {
                    dispatch(switchChartDateFilter("thisWeek"));
                  }}
                />
                <FilterElem
                  title={strings.plotDateFilter.lastWeek}
                  isSelected={currentDateFilter === "lastWeek"}
                  onClick={() => {
                    dispatch(switchChartDateFilter("lastWeek"));
                  }}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex justify-content-center gap-3">
                <FilterElem
                  title={strings.plotTypeFilter.line}
                  isSelected={currentTypeFilter === "line"}
                  onClick={() => {
                    dispatch(switchChartTypeFilter("line"));
                  }}
                />
                <FilterElem
                  title={strings.plotTypeFilter.bar}
                  isSelected={currentTypeFilter === "bar"}
                  onClick={() => {
                    dispatch(switchChartTypeFilter("bar"));
                  }}
                />
              </div>
            </div>
          </div>
          {plotData !== null && (
            <div className="row pt-3 pe-2">
              <div className="col-md-12 ms-n3">
                <ResponsiveContainer width="100%" height={300}>
                  {currentTypeFilter === "line" ? (
                    <LineChart data={plotData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        tick={{
                          fill: theme === "dark" ? "#dee2e6" : "#212529"
                        }}
                      />
                      <YAxis
                        tick={{
                          fill: theme === "dark" ? "#dee2e6" : "#212529"
                        }}
                      />
                      <Tooltip
                        contentStyle={
                          theme === "dark"
                            ? {
                                backgroundColor: "#303030",
                                borderColor: "#606060"
                              }
                            : {
                                backgroundColor: "#f8f9fa",
                                borderColor: "#bfbfbf"
                              }
                        }
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        name={
                          currentDateFilter === "today"
                            ? strings.plotLegend.today
                            : strings.plotLegend.now
                        }
                        unit={currentDataFilter === "revenue" && "zł"}
                        dataKey="pv"
                        stroke="#8884d8"
                      />
                      {showLastSeries && (
                        <Line
                          type="monotone"
                          name={
                            currentDateFilter === "today"
                              ? strings.plotLegend.yesterday
                              : strings.plotLegend.prev
                          }
                          unit={currentDataFilter === "revenue" && "zł"}
                          dataKey="uv"
                          stroke="#82ca9d"
                        />
                      )}
                    </LineChart>
                  ) : (
                    <BarChart data={plotData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        tick={{
                          fill: theme === "dark" ? "#dee2e6" : "#212529"
                        }}
                      />
                      <YAxis
                        tick={{
                          fill: theme === "dark" ? "#dee2e6" : "#212529"
                        }}
                      />
                      <Tooltip
                        contentStyle={
                          theme === "dark"
                            ? {
                                backgroundColor: "#303030",
                                borderColor: "#606060"
                              }
                            : {
                                backgroundColor: "#f8f9fa",
                                borderColor: "#bfbfbf"
                              }
                        }
                        cursor={{
                          fill: "none",
                          stroke: theme === "light" ? "#afb3b7" : "#595c5f"
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="pv"
                        name={
                          currentDateFilter === "today"
                            ? strings.plotLegend.today
                            : strings.plotLegend.now
                        }
                        unit={currentDataFilter === "revenue" && "zł"}
                        fill="#8884d8"
                      />
                      {showLastSeries && (
                        <Bar
                          name={
                            currentDateFilter === "today"
                              ? strings.plotLegend.yesterday
                              : strings.plotLegend.prev
                          }
                          unit={currentDataFilter === "revenue" && "zł"}
                          dataKey="uv"
                          fill="#82ca9d"
                        />
                      )}
                    </BarChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          )}
          <div className="px-2 pb-3">
            <div className="form-check col-md-12">
              <input
                type="checkbox"
                defaultChecked={showLastSeries}
                onChange={handleShowLastSeries}
                className="form-check-input"
              />
              <label className="form-check-label">
                {strings.plotPrevInterv}
              </label>
            </div>
          </div>
        </div>
      )}
      {data === null && <NoData />}
    </div>
  );
}
