import React from "react";
import { Form, Button, Container, Row, Col, Image } from "react-bootstrap";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { useAuthRequest } from "../../hooks/useAuthRequest";
import { useAuthContext } from "../../contexts/Auth";
import { validationSchema } from "./validation";

export default function Login() {
  const { authRequest } = useAuthRequest();
  const { authenticate } = useAuthContext();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const authResponse = await authRequest(values);
      if (authResponse.error) {
        return Swal.fire("Error", authResponse.error, "error");
      }
      authenticate(authResponse);
      history.push("/");
    },
  });
  return (
    <Container>
      <Row className="shadow p-3 mt-5 bg-white rounded">
        <Col
          md="6"
          className="d-flex justify-content-center align-items-center"
        >
          <Image
            src="https://res.cloudinary.com/devfrancosilva/image/upload/v1633018726/superheroes_bxuon5.jpg"
            rounded
            width="100%"
          />
        </Col>
        <Col>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                name="email"
                onChange={formik.handleChange}
                type="email"
                placeholder="mail@mail.com"
                isInvalid={!!formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                placeholder="*******"
                isInvalid={!!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
