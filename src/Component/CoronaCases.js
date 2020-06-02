import React from "react";
import { fetchJson } from "../Redux/RootActionCreator";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { connect } from "react-redux";
import { default as _ } from "underscore";
import { CSS_COLOR_NAMES } from "../colors/color";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { default as $ } from "jquery";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
function CoronaCases(props) {
  const options = {
    paginationPosition: "both"
  };
  return (
    <div>
      {/* {JSON.stringify(props)} */}

      <Row>
        <Col md={12}>
          <BootstrapTable
            striped
            hover
            data={props.CaseswithTimeSeries}
            options={options}
            pagination
          >
            <TableHeaderColumn isKey dataField="date" dataSort={true}>
              Date
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="dailyconfirmed"
              filter={{
                type: "NumberFilter",
                delay: 1000,
                numberComparators: ["=", ">", "<="]
              }}
            >
              {" "}
              Confirmed
            </TableHeaderColumn>
            <TableHeaderColumn dataField="dailydeceased">
              Deceased
            </TableHeaderColumn>
            <TableHeaderColumn dataField="dailyrecovered">
              Recovered
            </TableHeaderColumn>
            <TableHeaderColumn dataField="totalconfirmed">
              Total Confirmed
            </TableHeaderColumn>
            <TableHeaderColumn dataField="totaldeceased">
              Total Deceased
            </TableHeaderColumn>
            <TableHeaderColumn dataField="totalrecovered">
              Total Recovered
            </TableHeaderColumn>
          </BootstrapTable>
        </Col>
      </Row>
    </div>
  );
}
const mapStateToProps = state => {
  return { cases: state.cases, CaseswithTimeSeries: state.CaseswithTimeSeries };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchdata: dispatch(fetchJson())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoronaCases);
