"use client"
import React, { useState } from 'react'
export default function Insertdemo () {
    const [name,setName] = useState("")
    const [designation,setDesignation] = useState("");
    const [salary,setSalary] = useState(0);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const empobj = {
    name: name,
    designation: designation,
    salary: salary
};
        const jdata = JSON.stringify(empobj);
        fetch(
                "https://localhost:7242/api/Employee",
                {
                    method:"POST",
                    headers:{"Content-type":"application/json"},
                    body:jdata
                }
        )
      .then((response) => {
    alert("Saved");

    setName("");
    setDesignation("");
    setSalary("");

    console.log(response);
})
        .catch((err)=>{
            alert("not saved");
            console.log(err);
        })
    };
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <div>
                <label>Employee Name</label>
                <input type='text'value={name} onChange={(e)=>{setName(e.target.value)}}></input>                
            </div>
            <div>
                <label>Designation</label>
                <input type='text'value={designation} onChange={(e)=>{setDesignation(e.target.value)}}></input>
            </div>
            <div>
                <label>Salary</label>
                <input type='number'value={salary} onChange={(e)=>{setSalary(e.target.value)}}></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

