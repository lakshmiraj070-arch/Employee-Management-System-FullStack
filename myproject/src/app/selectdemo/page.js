"use client";
import React, { useEffect, useState } from 'react';
export default function Selectdemo () {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [salary, setSalary] = useState("");
  // FETCH DATA
  const loadEmployees = () => {
    fetch("https://localhost:7242/api/Employee")
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.log(err))
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  // DELETE
  const handleDelete = (id) => {
    if (!confirm("Are you sure?")) return;

    fetch(`https://localhost:7242/api/Employee/${id}`, {
      method: "DELETE"
    })
    .then(() => {
      alert("Deleted");
      loadEmployees();
    })
    .catch(err => console.log(err));
  };

  // LOAD DATA INTO FORM
  const handleEdit = (emp) => {
  setEditId(emp.id);
  setName(emp.name);
  setDesignation(emp.designation);
  setSalary(emp.salary);
};

  // UPDATE
  const handleUpdate = (e) => {
    e.preventDefault();

   const updatedEmp = {
    name: name,
    designation: designation,
    salary: salary
};

    fetch(`https://localhost:7242/api/Employee/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmp)
    })
    .then(() => {
      alert("Updated");
      setEditId(null);
      setName("");
      setDesignation("");
      setSalary("");
      loadEmployees();
    })
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>All Employees</h1>

      {/* UPDATE FORM */}
      {editId && (
        <form onSubmit={handleUpdate}>
          <h3>Update Employee</h3>
          <input value={name} onChange={e => setName(e.target.value)} />
          <input value={designation} onChange={e => setDesignation(e.target.value)} />
          <input type="number" value={salary} onChange={e => setSalary(e.target.value)} />
          <button type="submit">Update</button>
        </form>
      )}

      <table border="5" rules="all">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESIGNATION</th>
            <th>SALARY</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
  employees.map(emp => (
    <tr key={emp.id}>
      <td>{emp.id}</td>
      <td>{emp.name}</td>
      <td>{emp.designation}</td>
      <td>{emp.salary}</td>
      <td>
        <button onClick={() => handleEdit(emp)}>Edit</button>
        <button onClick={() => handleDelete(emp.id)}>Delete</button>
      </td>
    </tr>
  ))
}
        </tbody>
      </table>
    </div>
  );
};

