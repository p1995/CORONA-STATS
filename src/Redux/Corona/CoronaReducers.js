// import React from "react";
import { StateWiseData, CaseTimeSeries } from "./CoronaActionTypes";
const initstate = { cases: [], CaseswithTimeSeries: [] };
export const CoronaReducers = (state = initstate, action) => {
  switch (action.type) {
    case StateWiseData:
      return { ...state, cases: action.payload };
    case CaseTimeSeries:
      return { ...state, CaseswithTimeSeries: action.payload };
    default:
      return state;
  }
};
