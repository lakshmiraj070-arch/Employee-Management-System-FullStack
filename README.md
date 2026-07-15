# Employee Management System - Web API

## Project Overview

Employee Management System Web API is a RESTful API developed using ASP.NET Core Web API, Entity Framework Core, and SQL Server.

The API provides endpoints to manage employee data efficiently by performing CRUD (Create, Read, Update, Delete) operations. It follows REST API principles and uses Entity Framework Core for database communication.

## Features

- Create new employee records
- Retrieve employee details
- Update existing employee information
- Delete employee records
- RESTful API architecture
- SQL Server database integration
- Entity Framework Core ORM implementation
- Data management using HTTP methods

## Technologies Used

### Backend
- ASP.NET Core Web API
- C#
- Entity Framework Core
- REST API

### Database
- SQL Server

### Tools
- Visual Studio
- SQL Server Management Studio
- Git & GitHub

## API Operations

The API supports the following HTTP methods:


GET /api/Employee - Retrieve all employees

GET /api/Employee/{id} - Retrieve employee by ID

POST /api/Employee - Add new employee

PUT /api/Employee/{id} - Update employee details

DELETE /api/Employee/{id} - Delete employee


## Project Architecture

### Controller Layer
Handles HTTP requests and responses.

### Model Layer
Contains employee entity classes.

### Data Access Layer
Uses Entity Framework Core DbContext to communicate with SQL Server database.

## Database

Database: SQL Server

Entity:
- Employee

## Installation and Setup

1. Clone the repository.

2. Open the project in Visual Studio.

3. Update the SQL Server connection string in:


appsettings.json


4. Apply Entity Framework migrations:


Update-Database


5. Run the ASP.NET Core Web API application.

6. Test API endpoints using browser or API testing tools.

## Future Enhancements

- Add authentication and authorization using JWT
- Implement role-based access control
- Add pagination and search functionality
- Add API documentation using Swagger

## Author
