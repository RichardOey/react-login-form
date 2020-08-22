import React from "react";
import { Col } from "react-bootstrap";

const SubHeader = ({ types }) => {
  return (
    <Col className="grey pt-4 pb-4" md={12}>
      {types.map((type, key) => {
        if (type.isChecked) {
          return (
            <div key={key}>
              <h6>Hello {type.name.toLowerCase()} !</h6>
              <h6>Please fill out the form below to get started </h6>
            </div>
          );
        }
        return null;
      })}
    </Col>
  );
};

export default SubHeader;
