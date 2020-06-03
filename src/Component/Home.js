import React from "react";
import { connect } from "react-redux";
import { fetchJson } from "../Redux/RootActionCreator";
import { default as _ } from "underscore";
import CountUp from "react-countup";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Home(props) {
  const latestdata = _.last(props.CaseswithTimeSeries);
  console.log(latestdata);

  const confirmed = !_.isEmpty(latestdata)
    ? parseInt(latestdata.dailyconfirmed)
    : 0;

  const deceased = !_.isEmpty(latestdata)
    ? parseInt(latestdata.dailydeceased)
    : 0;

  const recovery = !_.isEmpty(latestdata)
    ? parseInt(latestdata.dailyrecovered)
    : 0;

  const totalconfirmed = !_.isEmpty(latestdata)
    ? parseInt(latestdata.totalconfirmed)
    : 0;

  const totaldeceased = !_.isEmpty(latestdata)
    ? parseInt(latestdata.totaldeceased)
    : 0;

  const totalrecovered = !_.isEmpty(latestdata)
    ? parseInt(latestdata.totalrecovered)
    : 0;

  return (
    <div className="container">
      <Row>
        <Col>
          <h2>All cases on {!_.isEmpty(latestdata) && latestdata.date}</h2>
        </Col>
      </Row>
      <Row style={{ marginTop: "16px" }}>
        <Col md={4}>
          <Card bg="warning" key="0" text="white" style={{ width: "18rem" }}>
            <Card.Header>
              <b>Confirmed</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {/* {!_.isEmpty(latestdata) && latestdata.date} */}
                <CountUp start={0} end={confirmed} duration={5} delay={1} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="danger" key="0" text="white" style={{ width: "18rem" }}>
            <Card.Header>
              <b>Deceased</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {/* {!_.isEmpty(latestdata) && latestdata.date} */}
                <CountUp start={0} end={deceased} duration={5} delay={1} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" key="0" text="white" style={{ width: "18rem" }}>
            <Card.Header>
              <b>Recovery</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {/* {!_.isEmpty(latestdata) && latestdata.date} */}
                <CountUp start={0} end={recovery} duration={5} delay={1} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "16px" }}>
        <Col md={4}>
          <Card bg="warning" key="0" text="white" style={{ width: "18rem" }}>
            <Card.Header>
              <b>Total Confirmed</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {/* {!_.isEmpty(latestdata) && latestdata.date} */}
                <CountUp
                  start={0}
                  end={totalconfirmed}
                  duration={5}
                  delay={1}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="danger" key="0" text="white" style={{ width: "18rem" }}>
            <Card.Header>
              <b>Total Deceased</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {/* {!_.isEmpty(latestdata) && latestdata.date} */}
                <CountUp start={0} end={totaldeceased} duration={5} delay={1} />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" key="0" text="white" style={{ width: "18rem" }}>
            <Card.Header>
              <b>Total Recovered</b>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {/* {!_.isEmpty(latestdata) && latestdata.date} */}
                <CountUp
                  start={0}
                  end={totalrecovered}
                  duration={5}
                  delay={1}
                />
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {/* <CountUp end={100} /> */}
      </Row>
    </div>
  );
}

const mapStateToProps = state => {
  return { CaseswithTimeSeries: state.CaseswithTimeSeries };
};
const mapDispatchToProps = dispatch => {
  return { getStateData: dispatch(fetchJson()) };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
