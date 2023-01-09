import React, { useContext, useEffect } from "react";
import LoginContext from "../context/LoginContext";
import Page1 from "./Register/Page1";
import Page2 from "./Register/Page2";
import Page3 from "./Register/Page3";

const Homepage = () => {
  const { loginPage } = useContext(LoginContext);

  useEffect(() => {
    if (!localStorage.getItem("loginPage1")) {
      console.log("present");
      const formData = {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        gender: "",
      };
      localStorage.setItem("loginPage1", JSON.stringify(formData));
    } else {
      console.log(localStorage.getItem("loginPage1"));
    }
  }, []);

  return (
    <div className="p-4 d-flex justify-content-center">
      <div className="w-100">
        <div className="w-100 d-flex justify-content-center">
          <div className="card w-50">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <h5 className="card-title">Register</h5>
              </div>
              {loginPage == 1 ? (
                <Page1 />
              ) : loginPage == 2 ? (
                <Page2 />
              ) : loginPage == 3 ? (
                <Page3 />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
