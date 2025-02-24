// import { useCallback, useEffect, useState } from "react";

import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginAPI } from "../../utils/ApiRequest";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";


const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const [values, setValues] = useState({ email: "", password: "" });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { email, password } = values;

    try {
      const { data } = await axios.post(loginAPI, { email, password });

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success(data.message, toastOptions);
        navigate("/");
      } else {
        toast.error(data.message, toastOptions);
      }
    } catch (error) {
      toast.error("Login failed! Please try again.", toastOptions);
    }

    setLoading(false);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <Particles
        id="tsparticles"
        init={useCallback(async (engine) => await loadFull(engine), [])}
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#ffcc00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />

      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}>
        <Row className="w-100" style={{ maxWidth: "400px" }}>
          <Col className="text-center">
            <AccountBalanceWalletIcon sx={{ fontSize: 50, color: "white" }} />
            <h2 className="text-white mt-3">Login</h2>
          </Col>
        </Row>

        <Row className="w-100" style={{ maxWidth: "400px" }}>
          <Col>
            <Form onSubmit={handleSubmit} className="p-4 rounded" style={{ backgroundColor: "#222", boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label className="text-white">Email Address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange} required />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" value={values.password} onChange={handleChange} required />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="w-100 btnStyle" disabled={loading} style={{ backgroundColor: "#ffcc00", border: "none", color: "#000", fontWeight: "bold", padding: "10px", borderRadius: "5px" }}>
                  {loading ? <Spinner animation="border" size="sm" /> : "Login"}
                </Button>
              </div>

              <div className="text-center mt-3">
                <Link to="/forgotPassword" className="text-white">Forgot Password?</Link>
              </div>

              <p className="mt-3 text-center text-white">
                Don't have an account? <Link to="/register" className="text-warning">Register</Link>
              </p>
            </Form>
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
};

export default Login;
