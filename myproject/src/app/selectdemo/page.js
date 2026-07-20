"use client";


import React,{useEffect,useState} from "react";


export default function Selectdemo(){


const [employees,setEmployees]=useState([]);

const [editId,setEditId]=useState(null);

const [name,setName]=useState("");

const [designation,setDesignation]=useState("");

const [salary,setSalary]=useState("");

const [search,setSearch]=useState("");




const loadEmployees=()=>{


fetch("https://localhost:7242/api/Employee")

.then(res=>res.json())

.then(data=>setEmployees(data))

.catch(err=>console.log(err));


};




useEffect(()=>{

loadEmployees();

},[]);






const handleDelete=(id)=>{


if(!confirm("Are you sure you want to delete this employee?"))

return;



fetch(`https://localhost:7242/api/Employee/${id}`,
{

method:"DELETE"

})


.then(()=>{

alert("Employee Deleted Successfully!");

loadEmployees();

})


.catch(err=>console.log(err));


};







const handleEdit=(emp)=>{


setEditId(emp.id);

setName(emp.name);

setDesignation(emp.designation);

setSalary(emp.salary);


};








const handleUpdate=(e)=>{


e.preventDefault();


// Validation

if(name.trim()==="")
{
alert("Employee name is required");
return;
}


if(designation.trim()==="")
{
alert("Designation is required");
return;
}


if(Number(salary)<=0)
{
alert("Salary must be greater than 0");
return;
}





const updatedEmp={

name,

designation,

salary:Number(salary)

};





fetch(`https://localhost:7242/api/Employee/${editId}`,
{

method:"PUT",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify(updatedEmp)


})


.then(()=>{


alert("Employee Updated Successfully!");


setEditId(null);

setName("");

setDesignation("");

setSalary("");


loadEmployees();


})


.catch(err=>console.log(err));


};






const filteredEmployees = employees.filter((emp)=>

emp.name.toLowerCase().includes(search.toLowerCase())

);






return(


<div className="container">





{
editId &&


<div className="card">


<h2>
Update Employee
</h2>



<form onSubmit={handleUpdate}>


<label>
Employee Name
</label>


<input

value={name}

onChange={(e)=>setName(e.target.value)}

/>




<label>
Designation
</label>


<input

value={designation}

onChange={(e)=>setDesignation(e.target.value)}

/>





<label>
Salary
</label>


<input

type="number"

value={salary}

onChange={(e)=>setSalary(e.target.value)}

/>





<button type="submit">

 Update Employee

</button>




</form>


</div>

}






<div className="card">



<h2>
Employee List
</h2>



<h3>

Total Employees: {employees.length}

</h3>




<input

type="text"

placeholder="Search Employee"

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>






<table>


<thead>


<tr>

<th>ID</th>

<th>Name</th>

<th>Designation</th>

<th>Salary</th>

<th>Actions</th>


</tr>


</thead>





<tbody>



{
filteredEmployees.map((emp)=>(


<tr key={emp.id}>


<td>{emp.id}</td>


<td>{emp.name}</td>


<td>{emp.designation}</td>


<td>
₹ {emp.salary}
</td>



<td>



<button

onClick={()=>handleEdit(emp)}

>

 Edit

</button>




<button

onClick={()=>handleDelete(emp.id)}

>

 Delete

</button>



</td>



</tr>


))


}




</tbody>



</table>





</div>





</div>


);



}