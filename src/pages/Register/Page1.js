import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/LoginContext";
import Slide from "react-reveal/Slide";

const Page1 = () => {
  const { nextPage } = useContext(LoginContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (localStorage.getItem("loginPage1")) {
      const formData = JSON.parse(localStorage.getItem("loginPage1"));
      console.log(formData);
      setFirstName(formData.firstname);
      setLastName(formData.lastname);
      setEmail(formData.email);
      setPhone(parseInt(formData.phone));
      setGender(formData.gender);
    }
  }, []);

  const updateLocalStorage = (value, field) => {
    let formData = JSON.parse(localStorage.getItem("loginPage1"));
    if (field == "firstname") {
      formData.firstname = value;
    } else if (field == "lastname") {
      formData.lastname = value;
    } else if (field == "email") {
      formData.email = value;
    } else if (field == "phone") {
      formData.phone = value;
    } else if (field == "gender") {
      formData.gender = value;
    }

    localStorage.setItem("loginPage1", JSON.stringify(formData));
  };

  const onInputChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "firstname") {
      console.log(e.target.value);
      setFirstName(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "lastname") {
      console.log(e.target.value);
      setLastName(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "email") {
      console.log(e.target.value);
      setEmail(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "phone") {
      console.log(e.target.value);
      setPhone(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "gender") {
      console.log(e.target.value);
      setGender(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    }
  };

  const next = () => {
    nextPage();
  };

  return (
    <>
      <Slide left>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label for="firstname" className="form-label">
                Firstname
              </label>
              <input
                onChange={(e) => onInputChange(e)}
                type="text"
                value={firstName}
                className="form-control"
                id="firstname"
                placeholder="firstname"
              />
            </div>
            <div className="mb-3">
              <label for="lastname" className="form-label">
                Lastname
              </label>
              <input
                onChange={(e) => onInputChange(e)}
                value={lastName}
                type="text"
                className="form-control"
                id="lastname"
                placeholder="lastname"
              />
            </div>
            <div className="mb-3">
              <label for="email" classFName="form-label">
                email
              </label>
              <input
                value={email}
                onChange={(e) => onInputChange(e)}
                type="email"
                className="form-control"
                id="email"
                placeholder="email"
              />
            </div>
            <div className="mb-3">
              <label for="phone" className="form-label">
                Phone
              </label>
              <input
                value={parseInt(phone)}
                type="number"
                onChange={(e) => onInputChange(e)}
                className="form-control"
                id="phone"
                placeholder="phone number"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
                className="form-select"
                aria-label="Default select example"
                placeholder="select"
              >
                <option>select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => next()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Slide>
    </>
  );
};

export default Page1;
