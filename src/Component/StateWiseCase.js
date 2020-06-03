import React from "react";
import { fetchJson } from "../Redux/RootActionCreator";
import { connect } from "react-redux";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { default as _ } from "underscore";
import { CSS_COLOR_NAMES } from "../colors/color";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { default as $ } from "jquery";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
function StateWiseCase(props) {
  //table
  const options = {
    paginationPosition: "both"
  };
  //
  //charts
  const data = {
    labels: _.pluck(props.cases, "state"),
    datasets: [
      {
        label: ["Active Cases"],
        backgroundColor: "green",
        //  _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "active")
      },
      {
        label: ["Confirmed Cases"],
        backgroundColor: "orange",
        //  _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "confirmed")
      },
      {
        label: "Deaths",
        backgroundColor: "black",
        //  _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "deaths")
      },
      {
        label: "Recovered",
        backgroundColor: "yellow",
        //  _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "recovered")
      }
    ]
  };
  const data2 = {
    labels: _.pluck(props.cases, "state"),
    datasets: [
      {
        label: ["Active Cases"],
        backgroundColor: _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "active")
      },
      {
        label: ["Confirmed Cases"],
        backgroundColor: _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "confirmed")
      },
      {
        label: "Deaths",
        backgroundColor: _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "deaths")
      },
      {
        label: "Recovered",
        backgroundColor: _.first(CSS_COLOR_NAMES, props.cases.length),
        // borderColor: "yellow",
        data: _.pluck(props.cases, "recovered")
      }
    ]
  };
  const chartOptions = { maintainAspectRatio: false };
  //
  return (
    <div>
      <Row>
        <Col md={4}>
          {" "}
          <Line data={data} height={500} width={700} options={chartOptions} />
        </Col>
        <Col md={4}>
          {" "}
          <Doughnut
            data={data2}
            height={500}
            width={700}
            options={chartOptions}
          />
        </Col>
        <Col md={4}>
          {" "}
          <Bar data={data} height={500} width={700} options={chartOptions} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <BootstrapTable data={props.cases} keyField="state">
            <TableHeaderColumn dataField="state">State</TableHeaderColumn>
            <TableHeaderColumn dataField="active">Active</TableHeaderColumn>
            <TableHeaderColumn dataField="confirmed">
              Confirmed
            </TableHeaderColumn>
            <TableHeaderColumn dataField="deaths">Deaths</TableHeaderColumn>
            <TableHeaderColumn dataField="recovered">
              Recovered
            </TableHeaderColumn>
            <TableHeaderColumn dataField="deltaconfirmed">
              Delta confirmed
            </TableHeaderColumn>
            <TableHeaderColumn dataField="deltadeaths">
              Delta Deaths
            </TableHeaderColumn>
            <TableHeaderColumn dataField="deltarecovered">
              Delta Recovered
            </TableHeaderColumn>
          </BootstrapTable>{" "}
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = state => {
  return { cases: state.cases };
};
const mapDispatchToProps = dispatch => {
  return { getStateData: dispatch(fetchJson()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateWiseCase);
