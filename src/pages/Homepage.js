import React from "react";
import Page1 from "./Register/Page1";
import Page2 from "./Register/Page2";
import Page3 from "./Register/Page3";

const Homepage = () => {
  return (
    <div className="p-4 d-flex justify-content-center">
      <div className="w-100">
        <div className="w-100 d-flex justify-content-center">
          <div className="card w-50">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <h5 className="card-title">Register</h5>
              </div>
              <Page1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
