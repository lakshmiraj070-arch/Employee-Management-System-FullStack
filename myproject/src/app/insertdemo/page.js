"use client";

import React, { useState } from "react";

export default function Insertdemo() {

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();


    // Validation
    if(name.trim() === "")
    {
      alert("Employee name is required");
      return;
    }

    if(designation.trim() === "")
    {
      alert("Designation is required");
      return;
    }

    if(Number(salary) <= 0)
    {
      alert("Salary must be greater than 0");
      return;
    }


    const empobj = {

      name:name,
      designation:designation,
      salary:Number(salary)

    };


    fetch("https://localhost:7242/api/Employee",
    {
      method:"POST",

      headers:
      {
        "Content-Type":"application/json"
      },

      body:JSON.stringify(empobj)

    })

    .then((response)=>{

      alert("Employee Added Successfully!");

      setName("");
      setDesignation("");
      setSalary("");

      console.log(response);

    })

    .catch((err)=>{

      alert("Employee Not Saved");
      console.log(err);

    });

  };


  return (

    <div className="container">

      <div className="card">

        <h2>Add Employee</h2>


        <form onSubmit={handleSubmit}>


          <label>
            Employee Name
          </label>

          <input

            type="text"

            placeholder="Enter employee name"

            value={name}

            onChange={(e)=>setName(e.target.value)}

          />



          <label>
            Designation
          </label>


          <input

            type="text"

            placeholder="Enter designation"

            value={designation}

            onChange={(e)=>setDesignation(e.target.value)}

          />



          <label>
            Salary
          </label>


          <input

            type="number"

            placeholder="Enter salary"

            value={salary}

            onChange={(e)=>setSalary(e.target.value)}

          />



          <button type="submit">

            Add Employee

          </button>



        </form>


      </div>


    </div>

  );

}