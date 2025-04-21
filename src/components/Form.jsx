import React, { useState } from "react";


const Form = ({ Name }) => {
  const [submitted, setSubmitted] = useState(false);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setNameError("");
    setPasswordError("");
    setSubmitted(false);

    let isValid = true;

    if (formData.name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    }

    if (formData.password.length < 8) {
      setPasswordError("Password must be minimum 8 characters");
      isValid = false;
    }

    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center border-4"
      style={{ backgroundImage: "url('/image/image4.jpeg')" }}
    >
      <div className="flex justify-center">
        <div className="bg-amber-200 rounded-3xl w-xl h-auto mt-40">
          <h1 className="text-2xl text-black text-center font-bold">Login</h1>
          <form onSubmit={handleSubmit}>
            <img
              src="/image/8792047.png"
              alt="Logo"
              className="w-15 h-15 mx-auto"
            />

            <div className="p-3 ml-3 flex flex-col">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-white w-md rounded-2xl h-12 pl-4"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {nameError && (
                <p className="text-red-600 text-sm mt-1">{nameError}</p>
              )}
            </div>

            <div className="p-3 ml-3 flex flex-col">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="bg-white w-md rounded-xl h-12 pl-4"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {passwordError && (
                <p className="text-red-600 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            {submitted && (
              <p className="text-green-700 text-center">
                Submitted successfully...
              </p>
            )}

            <div className="flex justify-center">
              <button
                className="p-3 m-4 bg-amber-600  rounded-xl hover:bg-amber-800 text-cyan-900"
                type="submit"
              >
                {Name}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
