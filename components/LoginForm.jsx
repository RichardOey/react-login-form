import React from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
});

const LoginForm = () => {
  return (
    <Col md={12} xs={12}>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let username = values.username.split("");
          let password = values.password.split("");
          let countSame = 0;
          let inOrder = false;

          let i = 0,
            j = 0;
          while (i < username.length) {
            while (j < password.length) {
              if (inOrder && username[i] !== password[j] && countSame !== 6) {
                inOrder = false;
                countSame = 0;
              }

              if (username[i] === password[j]) {
                inOrder = true;
                countSame++;
                j++;
                break;
              }

              j++;
            }

            if (j >= password.length && countSame < 6) {
              j = 0;
            }
            i++;
          }

          setTimeout(() => {
            if (countSame >= 6) {
              alert(
                "Wrong! Username and Password couldn't contain 6 same characters in order"
              );
            } else {
              alert("Logged In !");
            }
            console.log(values);
            setSubmitting(false);
          }, 500);
        }}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className="">
            <Row md={12}>
              <Col md={12} className="label-align-left">
                <Form.Group controlId="formUserName">
                  <Form.Label>Username</Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        id="inputGroupPrepend"
                        className="bg-white"
                      >
                        @
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.username}
                      className={
                        touched.username && errors.username ? "error" : null
                      }
                    />
                  </InputGroup>

                  {touched.username && errors.username ? (
                    <div className="error-message">{errors.username}</div>
                  ) : null}
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password :</Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        id="inputGroupPrepend"
                        className="bg-white"
                      >
                        <FontAwesomeIcon
                          icon={faLock}
                          className="grey-font "
                          size="1x"
                        />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      values={values.password}
                      className={
                        touched.password && errors.password ? "error" : null
                      }
                    />
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        id="forgotGroupPostpend"
                        className="forgot-button"
                      >
                        <a href="/#">Forgot ?</a>
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                  </InputGroup>
                  {touched.password && errors.password ? (
                    <div className="error-message">{errors.password}</div>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row md={12}>
              <Col md={8} xs={8} className="label-align-left">
                <h6 className="grey">
                  No Account? <span className="blue">Signup</span>{" "}
                </h6>
              </Col>
              <Col md={4} xs={4} className="grey label-align-right">
                <Button
                  size="sm"
                  variant="info"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Login
                </Button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
    </Col>
  );
};

export default LoginForm;
