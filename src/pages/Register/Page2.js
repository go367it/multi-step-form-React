import React, { useContext, useEffect, useState } from "react";
import LoginContext from "../../context/LoginContext";
import Slide from "react-reveal/Slide";

const Page2 = () => {
  const { nextPage, prevPage } = useContext(LoginContext);
  const [highQual, setHighQual] = useState("");
  const [mot, setMot] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [isVehicle, setIsVehicle] = useState("");
  const [areaTeach, setAreaTeach] = useState("");

  useEffect(() => {
    if (localStorage.getItem("loginPage2")) {
      const formData = JSON.parse(localStorage.getItem("loginPage2"));
      console.log(formData);
      setHighQual(formData.highQual);
      setMot(formData.mot);
      setCurrentCity(formData.currentCity);
      setIsVehicle(formData.isVehicle);
      setAreaTeach(formData.areaTeach);
    } else {
      const formData = {
        highQual: "",
        mot: "",
        currentCity: "",
        isVehicle: "",
        areaTeach: "",
      };
      localStorage.setItem("loginPage2", JSON.stringify(formData));
    }
  }, []);

  const updateLocalStorage = (value, field) => {
    let formData = JSON.parse(localStorage.getItem("loginPage2"));
    if (field == "highQual") {
      formData.highQual = value;
    } else if (field == "mot") {
      formData.mot = value;
    } else if (field == "currentCity") {
      formData.currentCity = value;
    } else if (field == "isVehicle") {
      formData.isVehicle = value;
    } else if (field == "areaTeach") {
      formData.areaTeach = value;
    }

    localStorage.setItem("loginPage2", JSON.stringify(formData));
  };

  const onInputChange = (e) => {
    console.log(e.target.id);
    if (e.target.id === "highQual") {
      console.log(e.target.value);
      setHighQual(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "mot") {
      console.log(e.target.value);
      setMot(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "currentCity") {
      console.log(e.target.value);
      setCurrentCity(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "isVehicle") {
      console.log(e.target.value);
      setIsVehicle(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    } else if (e.target.id === "areaTeach") {
      console.log(e.target.value);
      setAreaTeach(e.target.value);
      updateLocalStorage(e.target.value, e.target.id);
    }
  };

  const next = () => {
    nextPage();
  };

  const prev = () => {
    prevPage();
  };
  return (
    <>
      <Slide left>
        <div className="card">
          <div className="card-body">
            <div className="mb-3">
              <label for="highQual" className="form-label">
                Highest Qualification
              </label>
              <input
                value={highQual}
                onChange={(e) => onInputChange(e)}
                type="text"
                className="form-control"
                id="highQual"
                placeholder="qualification"
              />
            </div>
            <div className="mb-3">
              <label for="mot" className="form-label">
                Mode of Teaching
              </label>
              <select
                value={mot}
                onChange={(e) => onInputChange(e)}
                id="mot"
                className="form-select"
                aria-label="Default select example"
              >
                <option>select</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="currentCity" className="form-label">
                Current City
              </label>
              <select
                value={currentCity}
                onChange={(e) => onInputChange(e)}
                id="currentCity"
                className="form-select"
                aria-label="Default select example"
              >
                <option>select</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="bangalore">Bangalore</option>
                <option value="pune">Pune</option>
                <option value="dehradun">Dehradun</option>
                <option value="raipur">Raipur</option>
                <option value="chennai">Chennai</option>
                <option value="vijyawada">Vijyawada</option>
                <option value="mumbai">Mumbai</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="delhi">Delhi</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="isVehicle" className="form-label">
                Do you have vehicle to commute ?
              </label>
              <select
                value={isVehicle}
                onChange={(e) => onInputChange(e)}
                id="isVehicle"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="mb-3">
              <label for="areaTeach" className="form-label">
                Areas where you can teach?
              </label>
              <input
                value={areaTeach}
                onChange={(e) => onInputChange(e)}
                type="text"
                className="form-control"
                id="areaTeach"
                placeholder="areas"
              />
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-outline-dark me-md-2"
                onClick={() => prev()}
                type="button"
              >
                Prev
              </button>
              <button
                className="btn btn-dark"
                onClick={() => next()}
                type="button"
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

export default Page2;
