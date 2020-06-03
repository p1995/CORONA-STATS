import React from "react";
import { Route, Switch } from "react-router-dom";
import CoronaCases from "./CoronaCases";
import StateWiseCase from "./StateWiseCase";
function Main() {
  return (
    <div>
      <Switch>
        <Route path="/" component={CoronaCases} />
        <Route path="/StateWiseCases" component={StateWiseCase} />
      </Switch>
    </div>
  );
}

export default Main;
