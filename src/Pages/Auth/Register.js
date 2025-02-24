// // SignupPage.js
// import { useCallback, useEffect, useState } from "react";
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import "./auth.css";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { registerAPI } from "../../utils/ApiRequest";
// import axios from "axios";

// const Register = () => {

//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if(localStorage.getItem('user')){
//       navigate('/');
//     }
//   }, [navigate]);

//   const particlesInit = useCallback(async (engine) => {
//     // console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     // await console.log(container);
//   }, []);

//   const [values, setValues] = useState({
//     name : "",
//     email : "",
//     password : "",

//   });

//   const toastOptions = {
//     position: "bottom-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: false,
//     draggable: true,
//     progress: undefined,
//     theme: "dark",
//   }

//   const handleChange = (e) => {
//     setValues({...values , [e.target.name]: e.target.value});
//   }

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //     const {name, email, password} = values;

//   //     setLoading(false);
     
//   //     const {data} = await axios.post(registerAPI, {
//   //       name,
//   //       email,
//   //       password
//   //     });
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true); // Move this to the start

//     const { name, email, password } = values;

//     try {
//         const { data } = await axios.post(registerAPI, {
//             name,
//             email,
//             password
//         });

//         if (data.success) {
//             delete data.user.password;
//             localStorage.setItem("user", JSON.stringify(data.user));
//             toast.success(data.message, toastOptions);
//             navigate("/");
//         } else {
//             toast.error(data.message, toastOptions);
//         }
//     } catch (error) {
//         toast.error("Registration failed! Try again.", toastOptions);
//     }

//     setLoading(false); // Only reset loading at the end
// };


//     //   if(data.success === true){
//     //     delete data.user.password;
//     //     localStorage.setItem("user", JSON.stringify(data.user));
//     //     toast.success(data.message, toastOptions);
//     //     setLoading(true);
//     //     navigate("/");
//     //   }
//     //   else{
//     //     toast.error(data.message, toastOptions);
//     //     setLoading(false);
//     //   }
//     // };

//   return (
//     <>
//     <div style={{ position: 'relative', overflow: 'hidden' }}>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             color: {
//               value: '#000',
//             },
//           },
//           fpsLimit: 60,
//           particles: {
//             number: {
//               value: 200,
//               density: {
//                 enable: true,
//                 value_area: 800,
//               },
//             },
//             color: {
//               value: '#ffcc00',
//             },
//             shape: {
//               type: 'circle',
//             },
//             opacity: {
//               value: 0.5,
//               random: true,
//             },
//             size: {
//               value: 3,
//               random: { enable: true, minimumValue: 1 },
//             },
//             links: {
//               enable: false,
//             },
//             move: {
//               enable: true,
//               speed: 2,
//             },
//             life: {
//               duration: {
//                 sync: false,
//                 value: 3,
//               },
//               count: 0,
//               delay: {
//                 random: {
//                   enable: true,
//                   minimumValue: 0.5,
//                 },
//                 value: 1,
//               },
//             },
//           },
//           detectRetina: true,
//         }}
//         style={{
//           position: 'absolute',
//           zIndex: -1,
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//         }}
//       />

//       <Container className="mt-5" style={{position: 'relative', zIndex: "2 !important", color:"white !important"}}>
//       <Row>
//         <h1 className="text-center">
//           <AccountBalanceWalletIcon sx={{ fontSize: 40, color: "white"}}  className="text-center" />
//         </h1>
//         <h1 className="text-center text-white">Welcome to Expense Management System</h1>
//         <Col md={{ span: 6, offset: 3 }}>
//           <h2 className="text-white text-center mt-5" >Registration</h2>
//           <Form>
//             <Form.Group controlId="formBasicName" className="mt-3" >
//               <Form.Label className="text-white">Name</Form.Label>
//               <Form.Control type="text"  name="name" placeholder="Full name" value={values.name} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="formBasicEmail" className="mt-3">
//               <Form.Label className="text-white">Email address</Form.Label>
//               <Form.Control type="email"  name="email" placeholder="Enter email" value={values.email} onChange={handleChange}/>
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword" className="mt-3">
//               <Form.Label className="text-white">Password</Form.Label>
//               <Form.Control type="password"  name="password" placeholder="Password" value={values.password} onChange={handleChange} />
//             </Form.Group>
//             <div style={{width: "100%", display: "flex" , alignItems:"center", justifyContent:"center", flexDirection: "column"}} className="mt-4">
//               <Link to="/forgotPassword" className="text-white lnk" >Forgot Password?</Link>

//               {/* <Button
//                   type="submit"
//                   className=" text-center mt-3 btnStyle"
//                   onClick={!loading ? handleSubmit : null}
//                   disabled={loading}
//                 >
//                   {loading ? "Registering..." : "Signup"}
//                 </Button> */}
//                 <Form onSubmit={handleSubmit}>
//   <Button
//     type="submit"
//     className="text-center mt-3 btnStyle"
//     disabled={loading}
//   >
//     {loading ? "Registering..." : "Signup"}
//   </Button>
// </Form>

//               <p className="mt-3" style={{color: "#9d9494"}}>Already have an account? <Link to="/login" className="text-white lnk" >Login</Link></p>
//             </div>
//           </Form>
//         </Col>
//       </Row>
//     <ToastContainer />
//     </Container>
//     </div>
//     </>
//   )
// }

// export default Register

import { useCallback, useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerAPI } from "../../utils/ApiRequest";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

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

    const { name, email, password } = values;

    try {
      const { data } = await axios.post(registerAPI, {
        name,
        email,
        password,
      });

      if (data.success) {
        delete data.user.password;
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Registration successful!", toastOptions);
        navigate("/");
      } else {
        toast.error(data.message, toastOptions);
      }
    } catch (error) {
      toast.error("Registration failed! Try again.", toastOptions);
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
            <h2 className="text-white mt-3">Sign Up</h2>
          </Col>
        </Row>

        <Row className="w-100" style={{ maxWidth: "400px" }}>
          <Col>
            <Form onSubmit={handleSubmit} className="p-4 rounded" style={{ backgroundColor: "#222", boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}>
              <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label className="text-white">Full Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" value={values.name} onChange={handleChange} required />
              </Form.Group>

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
                  {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
                </Button>
              </div>

              <div className="text-center mt-3">
                <Link to="/forgotPassword" className="text-white">Forgot Password?</Link>
              </div>

              <p className="mt-3 text-center text-white">
                Already have an account? <Link to="/login" className="text-warning">Login</Link>
              </p>
            </Form>
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
};

export default Register;
