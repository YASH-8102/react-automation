import "./index.css";

import {
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import React, { Component, useState } from "react";

import Toast from "react-bootstrap/Toast";

// class Cont extends Component {
//   static yn = (y) => {
//     console.log(y);
//   };
//   render() {
//     return <div>hello</div>;
//   }
// }

const Cont = (props) => {
  console.log(props);
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.bg,
        display: "flex",
        justifyContent: props.jc,
        alignItems: props.ai,
      }}
    ></div>
  );
};

function App() {
  const [myComponents, setmyComponents] = useState(<h1>hello</h1>);

  const [currentComponent, setcurrentComponent] = useState({
    name: "mycomponent",
    props: { width: 100, height: 100, bg: "black", jc: "center", ai: "center" },
    widthUnit: "px",
    heightUnit: "px",
  });

  const changeWidthUnit = (e) => {
    let yn = currentComponent;
    if (e == "") {
      yn.widthUnit = e;
      yn.props.width = parseInt(yn.props.width);
    } else {
      yn.widthUnit = e;
      yn.props.width = parseInt(yn.props.width) + e;
    }

    setcurrentComponent(yn);
    setmyComponents(<Cont {...currentComponent.props} />);
  };
  const changeHeightUnit = (e) => {
    let yn = currentComponent;
    if (e == "") {
      yn.heightUnit = e;
      yn.props.height = parseInt(yn.props.height);
    } else {
      yn.heightUnit = e;
      yn.props.height = parseInt(yn.props.height) + e;
    }

    setcurrentComponent(yn);
    setmyComponents(<Cont {...currentComponent.props} />);
  };
  return (
    <div className="Container">
      <div className="leftpannel">
        <div
          onClick={() => {
            setmyComponents(<Cont {...currentComponent.props} />);
          }}
          className="mytab"
        >
          {currentComponent.name}
        </div>

        <div className="styleform">
          <Col style={{ marginTop: 10 }} sm="10">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Height"
                onChange={(e) => {
                  let yn = currentComponent;
                  yn.props.height =
                    e.target.value + currentComponent.heightUnit;
                  console.log(yn);
                  setcurrentComponent(yn);
                  setmyComponents(<Cont {...currentComponent.props} />);
                }}
              />
              <Dropdown sm={"6"}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {currentComponent.heightUnit}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(e) => {
                      changeHeightUnit(e.target.innerText);
                    }}
                  >
                    %
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      changeHeightUnit("");
                    }}
                    href="#/action-2"
                  >
                    none
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      changeHeightUnit(e.target.innerText);
                    }}
                    href="#/action-3"
                  >
                    px
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </InputGroup>
          </Col>

          <Col style={{ marginTop: 10 }} sm="10">
            <InputGroup>
              <Form.Control
                onChange={(e) => {
                  let yn = currentComponent;
                  yn.props.width = e.target.value + currentComponent.widthUnit;
                  console.log(yn);
                  setcurrentComponent(yn);
                  setmyComponents(<Cont {...currentComponent.props} />);
                }}
                type="text"
                placeholder="Width"
              />
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {currentComponent.widthUnit}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(e) => {
                      changeWidthUnit(e.target.innerText);
                    }}
                  >
                    %
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      changeWidthUnit("");
                    }}
                    href="#/action-2"
                  >
                    none
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={(e) => {
                      changeWidthUnit(e.target.innerText);
                    }}
                    href="#/action-3"
                  >
                    px
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </InputGroup>
          </Col>

          <Col style={{ marginTop: 10 }} sm="10">
            <InputGroup className="mb-6">
              <Form.Control
                onChange={(e) => {
                  let yn = currentComponent;
                  yn.props.bg = e.target.value;
                  console.log(yn);
                  setcurrentComponent(yn);
                  setmyComponents(<Cont {...currentComponent.props} />);
                }}
                type="text"
                placeholder="color"
              />
            </InputGroup>
          </Col>

          <ButtonGroup
            style={{ marginTop: 10 }}
            as={Row}
            sm="10"
            aria-label="Basic example"
          >
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary  ">Right</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="middlepannel">
        <div className="iphone-x">
          <i>Speaker</i>
          <b>Camera</b>

          {myComponents}
          <Cont />
        </div>
      </div>
      <div className="rightpannel"></div>
    </div>
  );
}

export default App;
