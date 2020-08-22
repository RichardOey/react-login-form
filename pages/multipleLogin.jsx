import React, { Component } from "react";
import Header from "../components/Header";
import Avatar from "../components/Avatar";
import SubHeader from "../components/SubHeader";
import LoginForm from "../components/LoginForm";
import { Container, Row, Col } from "react-bootstrap";

class MultipleLogin extends Component {
  state = {
    types: [
      {
        id: 1,
        url: "./doctor.svg",
        name: "Doctor",
        isChecked: false
      },
      {
        id: 2,
        url: "./patient.svg",
        name: "Patient",
        isChecked: true
      }
    ]
  };

  handleClick = (id) => {
    let types = this.state.types;

    for (let i = 0; i < types.length; i++) {
      types[i] = {
        ...types[i],
        isChecked: false
      };
    }

    let typeIndexChecked = types.findIndex((type) => type.id === id);
    let newTypes = [...types];

    newTypes[typeIndexChecked] = {
      ...newTypes[typeIndexChecked],
      isChecked: true
    };

    this.setState({
      types: newTypes
    });
  };

  render() {
    return (
      <Container>
        <Row md={12}>
          <Col md={6}>
            <Row>
              <Header />
            </Row>
            <Row>
              <Avatar
                types={this.state.types}
                onHandleClick={this.handleClick}
              />
            </Row>
          </Col>
          <Col md={6}>
            <SubHeader types={this.state.types} />
            <LoginForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MultipleLogin;
