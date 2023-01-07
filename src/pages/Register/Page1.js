import React from "react";

const Page1 = () => {
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Firstname
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="firstname"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Lastname
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="lastname"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="email"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="phone number"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Gender
        </label>
        <select
          id="exampleFormControlInput1"
          className="form-select"
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">Male</option>
          <option value="2">Female</option>
          <option value="3">Other</option>
        </select>
      </div>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary">
          Next
        </button>
      </div>
    </>
  );
};

export default Page1;
