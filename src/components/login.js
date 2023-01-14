import React from "react";
import { Link } from "react-router-dom";
import Homepage from "../components/Homepage";
import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
class Logincomponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLoginClick = () => {
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    window.location.href = "/home/codes";
  };
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="4" className="logindiv">
              <h1>Login</h1>
              <Form>
                <Form.Group controlId="usernameId">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter user name"
                    value={this.state.username}
                    onChange={this.onChange}
                  />
                  <FormControl.Feedback type="invalid"></FormControl.Feedback>
                </Form.Group>

                <Form.Group controlId="passwordId">
                  <Form.Label>Your password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
              </Form>
              <Button
                className="loginbtn"
                color="primary"
                onClick={this.onLoginClick}
              >
                Login
              </Button>
              <p className="mt-2">
                Forgot your password? <Link to="/login">Fogot Password</Link>
              </p>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Logincomponent;
