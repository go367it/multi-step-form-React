import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/LoginContext";
import Slide from "react-reveal/Slide";
import cogoToast from "cogo-toast";

const Page3 = () => {
  const { prevPage } = useContext(LoginContext);
  const [subjectTeach, setSubjectTeach] = useState("");
  const [extraCurricular, setExtraCurricular] = useState("");
  const [availableTime, setAvailableTime] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (localStorage.getItem("loginPage3")) {
      const formData = JSON.parse(localStorage.getItem("loginPage3"));
      console.log(formData);
      setSubjectTeach(formData.subjectTeach);
      setExtraCurricular(formData.extraCurricular);
      setAvailableTime(formData.availableTime);
      setAddress(formData.address);
    } else {
      const formData = {
        subjectTeach: "",
        extraCurricular: "",
        availableTime: "",
        address: "",
      };
      localStorage.setItem("loginPage3", JSON.stringify(formData));
    }
  },[]);

  const updateLocalStorage = (value, field) => {
    let formData = JSON.parse(localStorage.getItem("loginPage3"));
    if (field == "subjectTeach") {
      formData.subjectTeach = value;
    } else if (field == "extraCurricular") {
      formData.extraCurricular = value;
    } else if (field == "availableTime") {
      formData.availableTime = value;
    } else if (field == "address") {
      formData.address = value;
    }

    localStorage.setItem("loginPage3", JSON.stringify(formData));
  };

  const onInputChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "subjectTeach") {
      console.log(e.target.value);
      setSubjectTeach(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "extraCurricular") {
      console.log(e.target.value);
      setExtraCurricular(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "availableTime") {
      console.log(e.target.value);
      setAvailableTime(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "address") {
      console.log(e.target.value);
      setAddress(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    }
  };

  const submitForm = () =>{
    cogoToast.success("Thanks for your Response",{ position: 'bottom-center', heading: 'Submitted Successfully!' })
  }

  const prev = () => {
    prevPage();
  };
  return (
    <>
      <Slide left>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label for="subjectTeach" className="form-label">
                Subjects you can teach (Specify with class and syllabus)
              </label>
              <textarea
                value={subjectTeach}
                onChange={(e) => onInputChange(e)}
                type="text"
                className="form-control"
                id="subjectTeach"
                placeholder="subjects"
              />
            </div>
            <div className="mb-3">
              <label for="extraCurricular" className="form-label">
                Extra curricular activity you can teach
              </label>
              <input
                value={extraCurricular}
                onChange={(e) => onInputChange(e)}
                type="text"
                className="form-control"
                id="extraCurricular"
                placeholder="extra curricular"
              />
            </div>
            <div className="mb-3">
              <label for="availableTime" className="form-label">
                Time of Availablity/Comment
              </label>
              <input
                value={availableTime}
                onChange={(e) => onInputChange(e)}
                type="email"
                className="form-control"
                id="availableTime"
                placeholder="availablity"
              />
            </div>
            <div className="mb-3">
              <label for="address" className="form-label">
                Your Address
              </label>
              <textarea
                value={address}
                onChange={(e) => onInputChange(e)}
                type="textfield"
                className="form-control"
                id="address"
                placeholder="address"
              />
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                I have read and accept Tutor Terms and Conditions.
              </label>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-primary me-md-2"
                onClick={() => prev()}
                type="button"
              >
                Prev
              </button>
              <button onClick={()=>submitForm()} className="btn btn-primary" type="button">
                Submit
              </button>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Page3;
