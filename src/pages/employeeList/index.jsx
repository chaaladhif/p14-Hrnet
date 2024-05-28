import "./style.css";
import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";

function EmployeeList() {
     const employees = useSelector((state) => state.employee.employees);

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

     return (
          <div className="list-employee-container">
               <h2>Employee List</h2>
               <DataTable
                    columns={columns}
                    data={employees}
                    pagination
                    highlightOnHover
                    striped
               />
          </div>
     );
}

export default EmployeeList;
