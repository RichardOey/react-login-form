import React from "react";
import { Button, Image, Badge, Row, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Avatar = ({ types, onHandleClick }) => {
  return (
    <Col md={12}>
      {types.map((type) => {
        return (
          <>
            <Button
              className="avatar-button"
              xs={6}
              md={4}
              variant="outline-info"
              key={type.id}
              onClick={() => onHandleClick(type.id)}
            >
              <Image src={type.url} rounded />
              <Row md={12}>
                <Col md={12}>
                  <h6 className="label-align-center ">{type.name}</h6>
                </Col>
              </Row>
              <Badge className="check-icon">
                {type.isChecked ? (
                  <span className="fa-layers fa-fw">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="white"
                      size="2x"
                    />
                    <FontAwesomeIcon icon={faCheckCircle} size="2x" />
                  </span>
                ) : (
                  <span />
                )}
              </Badge>
            </Button>
          </>
        );
      })}
    </Col>
  );
};

export default Avatar;
