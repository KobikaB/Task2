import React, { useState } from "react";

const Form = ({Name}) => {
  
 
  const [error, setError] = useState("");
  
  const [submitted, setSubmitted] = useState(false);
  const [formData,setFormData] = useState({
    name:"",
    password:""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setError("");
    setSubmitted(false);
   
   try{
    if(formData.name.trim() == "" || formData.password.length != 8) {
      if(formData.name.trim() == ""){
        setError("Name is require"); 
      }else if(formData.password.length != 8){
      setError("password must be exactly 8 charactors");
    }

   } else{
    setSubmitted(true);
   }
   
  }catch (err) {
      setError("please try again");
    } 
    finally {
      
      
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center items-center justify-center bg-fixed overflow-hidden border-4 "
      style={{ backgroundImage: "url('/image/image4.jpeg')" }}
    >
      <div className="  translate-y-40 h-120 translate-x-90 bg-amber-200 bg-cover rounded-2xl p-7 w-xl justify-center m-3  ">
        <h1 className="text-2xl text-black text-center font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4 h-60">
          <img
            src="/image/8792047.png"
            alt="Logo"
            className="w-15 h-15 mx-auto mb-4"
          />
          <div className="">
            <label className="mb-1 block">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-white w-md rounded-2xl h-12 flex "
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name:e.target.value })}
            />
          </div>

          <div>
            <label className="mb-1 block">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-white w-md rounded-xl h-12"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData,password:e.target.value })}
            />
          </div>

          {error && <p className="text-red-600 text-center">{error}</p>}

          {submitted && (
            <p className="text-green-700 text-center">
              submitted successfully...
            </p>
          )}

          <br />

          <div className="flex justify-center">
            <button
              
              className=" pr-5 my-6 justify-center bg-amber-700 p-2  rounded-xl hover:bg-blue-400 text-cyan-900 al"
              type="submit"
            >
              {Name}
           
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
