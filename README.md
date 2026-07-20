# Employee Management System - Full Stack

## Overview

Employee Management System is a Full Stack web application developed using React.js, ASP.NET Core Web API, Entity Framework Core, and Microsoft SQL Server. The application enables users to perform complete CRUD (Create, Read, Update, Delete) operations on employee records through a responsive user interface integrated with RESTful APIs.

This project demonstrates frontend-backend integration, REST API development, database management, and modern web application development using the .NET technology stack.

---

## Features

- Add Employee
- View Employee List
- Update Employee Details
- Delete Employee
- Responsive User Interface
- REST API Integration
- SQL Server Database Connectivity
- Entity Framework Core Code First
- Form Validation

---

## Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Fetch API

### Backend

- ASP.NET Core Web API
- C#
- Entity Framework Core
- REST API

### Database

- Microsoft SQL Server

### Development Tools

- Visual Studio 2022
- Visual Studio Code
- SQL Server Management Studio (SSMS)
- Git
- GitHub

---

## Project Architecture

```
React.js Frontend
        |
     Fetch API
        |
ASP.NET Core Web API
        |
Entity Framework Core
        |
Microsoft SQL Server
```

---

## Project Structure

```
Employee-Management-System-FullStack

├── Frontend (React.js)
│   ├── src
│   ├── public
│   └── package.json
│
├── Backend (ASP.NET Core Web API)
│   ├── Controllers
│   ├── Models
│   ├── Data
│   ├── Migrations
│   ├── appsettings.json
│   └── Program.cs
```

---

## Functionalities

### Create

- Add new employee records using the React interface.

### Read

- Display all employee records retrieved from the Web API.

### Update

- Modify employee information and save changes to the database.

### Delete

- Remove employee records from SQL Server.

---

## Database

Database Name

```
EmployeeManagementDB
```

Table Name

```
Employee
```

---

## How to Run the Project

1. Clone the repository.
2. Open the backend project in Visual Studio 2022.
3. Configure the SQL Server connection string in `appsettings.json`.
4. Run EF Core migrations.
5. Start the ASP.NET Core Web API.
6. Open the React project in Visual Studio Code.
7. Install dependencies:

```bash
npm install
```

8. Start the React application:

```bash
npm start
```

9. Open:

```
http://localhost:3000
```

---

## Future Enhancements

- JWT Authentication
- Role-Based Authorization
- Search and Filtering
- Pagination
- Dashboard
- Export to Excel/PDF

---

## Author

**Lakshmi Priya**

GitHub: https://github.com/lakshmiraj070-arch

---

## License

This project is developed for learning and portfolio purposes.
