import "./style.css";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { useState } from "react";
function EmployeeList() {
     const employees = useSelector((state) => state.employee.employees);
     const [filterText, setFilterText] = useState("");

     const columns = [
          {
               name: "First Name",
               selector: (row) => row.firstname,
               sortable: true,
          },
          {
               name: "Last Name",
               selector: (row) => row.lastname,
               sortable: true,
          },
          {
               name: "Start Date",
               selector: (row) => row.startDate,
               sortable: true,
          },
          {
               name: "Department",
               selector: (row) => row.department,
               sortable: true,
          },
          {
               name: "Date of Birth",
               selector: (row) => row.dateOfBirth,
               sortable: true,
          },
          { name: "Street", selector: (row) => row.street, sortable: true },
          { name: "City", selector: (row) => row.city, sortable: true },
          { name: "State", selector: (row) => row.state, sortable: true },
          { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
     ];
     const filteredEmployees = employees.filter(
          (employee) =>
               employee.firstname
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.lastname
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.startDate
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.department
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.dateOfBirth
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.street
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.city.toLowerCase().includes(filterText.toLowerCase()) ||
               employee.state
                    .toLowerCase()
                    .includes(filterText.toLowerCase()) ||
               employee.zipCode.toString().includes(filterText.toLowerCase())
     );
     return (
          <div className="list-employee-container">
               <h2>Employee List</h2>
               <div className="search-container">
                    <input
                         type="text"
                         placeholder="Search"
                         className="search-bar"
                         value={filterText}
                         onChange={(e) => setFilterText(e.target.value)}
                    />
                    <i className="fa-solid fa-magnifying-glass"></i>
               </div>
               <DataTable
                    columns={columns}
                    data={filteredEmployees}
                    pagination
                    highlightOnHover
                    striped
               />
          </div>
     );
}

export default EmployeeList;
