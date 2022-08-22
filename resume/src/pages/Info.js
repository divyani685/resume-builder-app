import React from "react";
// import DefaultLayout from "../components/DefaultLayout";
import "../resources/authentication.css";
import { Link } from "react-router-dom";
function Info() {
  const val = "->";
  return (
    <>
      <body className="infobody">
        <div className="card text-white bg-dark " style={{ maxWidth: "25rem" }}>
          <div className="cheader">Process to download your Resume</div>
          <div className="divider mt-3"></div>
          <div className="card-body">
            <div className="d-flex mx-4" style={{ textAlign: "left" }}>
              <p>
                <b>Step 1 : </b>
              </p>
              <p className="mx-2">Register {val} Login</p>
            </div>
            <div className="d-flex mx-4" style={{ textAlign: "left" }}>
              <p>
                <b>Step 2 : </b>
              </p>
              <p className="mx-2">
                Right corner of Navbar {val} <br />
                click on username {val} Profile
              </p>
            </div>
          </div>
          <div className="d-flex mx-5" style={{ textAlign: "left" }}>
            <p>
              <b>Step 3 : </b>
            </p>
            <p className="mx-2">Fill all the details</p>
          </div>
          <div className="d-flex mx-5" style={{ textAlign: "left" }}>
            <p>
              <b>Step 4 : </b>
            </p>
            <p className="mx-2">Update it</p>
          </div>
          <div className="d-flex mx-5" style={{ textAlign: "left" }}>
            <p>
              <b>Step 5 : </b>
            </p>
            <p className="mx-2">
              click on Home from dropdown / <br />
              click on div-Resume
            </p>
          </div>
          <div className="d-flex mx-5" style={{ textAlign: "left" }}>
            <p>
              <b>Step 6 : </b>
            </p>
            <p className="mx-2">Select any template</p>
          </div>
          <div className="d-flex mx-5" style={{ textAlign: "left" }}>
            <p>
              <b>Step 7 : </b>
            </p>
            <p className="mx-2">Print {val} LogOut</p>
          </div>
        </div>

        <div
          className="link mt-5"
          style={{ textAlign: "center" }}
        >
          <Link to="/login">
            <b>Go to sign in page</b>
          </Link>
        </div>
      </body>
    </>
  );
}

export default Info;
