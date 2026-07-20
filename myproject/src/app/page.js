import Insertdemo from "./insertdemo/page";
import Selectdemo from "./selectdemo/page";

export default function Home() {
  return (
    <>
      <div className="header">
        <h1>Employee Management System</h1>
        <p>React + ASP.NET Core Web API + SQL Server</p>
      </div>

      <Insertdemo />
      <Selectdemo />
    </>
  );
}