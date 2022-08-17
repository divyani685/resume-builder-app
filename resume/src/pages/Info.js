import React from "react";
// import DefaultLayout from "../components/DefaultLayout";
import "../resources/authentication.css";
import {useNavigate } from "react-router-dom";
function Info() {
    const navigate=useNavigate()
  return (
    <>
    <body style={{backgroundImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"}}>
    <nav className="navbar bg-light">
  <form className="container-fluid justify-content-end">
    <button className="btn btn-primary me-2" type="button" onClick={()=>{navigate('/Register')}}>Sign Up</button>
    <button className="btn btn-primary" type="button" onClick={()=>{navigate('/login')}}>Sign in</button>
  </form>
</nav>
    <div className="container" style={{ backgroundColor: "rgba(0, 0, 0, 0.712)",boxShadow: "0 0 10px gray"}}>
      <div className="header1">
        <h2 style={{color:"white"}}>
          <b>Process to Download your Resume</b>
        </h2>
      </div>
      <div className="divider mt-3">
      </div>
      <div className="steps mt-5 ml-5justify-content-between">
        <div className="d-flex">
          <h5>
            <b>1st Step : </b>
          </h5>
          <p className="mx-4" >
            New User??Go for Registration by clicking SignUp <br />
            button from the right corner of the Navbar.
            <br />
            Existing User??Go for Login by clicking Signin <br />
            button from the right corner of the Navbar.
          </p>
        </div>
        <div className="d-flex">
          <h5>
            <b>2nd Step : </b>
          </h5>
          <p className="mx-4">
            After Login,Go to the right corner of <br />
            Navbar and select profile from Dropdown
          </p>
        </div>
        <div className="d-flex">
          <h5>
            <b>3rd Step : </b>
          </h5>
          <p className="mx-4">Fill your Details to all the section and update it.</p>
        </div>
        <div className="d-flex">
          <h5>
            <b>4th Step : </b>
          </h5>
          <p className="mx-4">
            Now go the home page by clicking div-Resume from
            <br /> the left corner of Navbar or select Home from dropdown
            <br /> from right corner of Navbar.
          </p>
        </div>
        <div className="d-flex">
        <h5>
            <b>5th Step : </b>
          </h5>
          <p className="mx-4">Select any template which you like.</p>
        </div>
      </div>
      <div className="d-flex">
        <h5 style={{color:"white",fontSize:"15px"}}>
            <b>6th Step : </b>
          </h5>
          <p className="mx-4">Download your Resume by clicking print button</p>
      </div>
      <div className="d-flex">
        <h5 style={{color:"white",fontSize:"15px"}}>
            <b>7th Step : </b>
          </h5>
          <p className="mx-4">Successfully Downloaded???Now you can log out.</p>
      </div>
    </div>
    </body>
    </>
  );
}

export default Info;
