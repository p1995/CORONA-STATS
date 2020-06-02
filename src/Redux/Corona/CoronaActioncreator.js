import { StateWiseData, CaseTimeSeries } from "./CoronaActionTypes";
export const getstatewisedata = data => {
  return { type: StateWiseData, payload: data };
};
export const getCaseTimeSeries = data => {
  return { type: CaseTimeSeries, payload: data };
};
export const fetchJson = () => {
  return dispatch => {
    fetch("https://api.covid19india.org/data.json")
      .then(res => res.json())
      .then(result => {
        dispatch(getstatewisedata(result["statewise"]));
        dispatch(getCaseTimeSeries(result["cases_time_series"]));
      });
  };
};
