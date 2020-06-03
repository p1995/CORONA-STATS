import React from "react";
import { Route, Switch } from "react-router-dom";
import CoronaCases from "./CoronaCases";
import StateWiseCase from "./StateWiseCase";
import Home from "./Home";
function Main() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CoronaCases" component={CoronaCases} />
        <Route path="/StateWiseCases" component={StateWiseCase} />
      </Switch>
    </div>
  );
}

export default Main;
