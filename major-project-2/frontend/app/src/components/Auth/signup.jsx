import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import Loader from "../loader";
import Message from "../message";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const [messsage, setMessage] = useState("");
  const [show, changeshow] = useState("fa fa-eye-slash");

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    termsAccepted: false,
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
    validateField(name, newValue);
  };

  const getValidationClass = (name) => {
    if (formValues[name] === "") return "";
    return formErrors[name] ? "is-invalid" : "is-valid";
  };

  const clearForm = () => {
    setFormValues({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      termsAccepted: false,
    });
  };

  const validateField = (name, value) => {
    let errorMessage = null;

    switch (name) {
      case "firstname":
      case "lastname":
        if (!value) {
          errorMessage = "This field is required...";
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = "Invalid email format..";
        }
        break;

      case "password":
        const minLength = 6;
        const passwordRegex =
          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[_$@!*])[A-Za-z0-9_$@!*]{6,}$/;
        if (value.length < minLength || !passwordRegex.test(value)) {
          errorMessage =
            "Password must include atleast [1-9][a-z][A-Z][_$@!*] & 6 Characters";
        }
        break;

      case "confirmpassword":
        if (value !== formValues.password) {
          errorMessage = "Password do not match..";
        }
        break;

      case "termsAccepted":
        if (!value) {
          errorMessage = "You must accept the term and conditions..";
        }
        break;

      default:
        break;
    }

    setFormErrors({
      ...formErrors,
      [name]: errorMessage,
    });
  };

  const isFormValid = () => {
  return (
    Object.values(formErrors).every(error => error === null) &&
    Object.values(formValues).every(
      (value) => value !== "" && value !== false
    )
  );
};

const showPassword = () => {
  var x = document.getElementById("pass1");
  var z = document.getElementById("pass2");
  if (x.type === "password" && z.type === "password") {
    x.type = "text";
    z.type = "text";
    changeshow('fa fa-eye');
  } else {
    x.type = "password";
    z.type = "password";
    changeshow('fa fa-eye-slash');
  }
};










  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1>Join Us</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Signup;
