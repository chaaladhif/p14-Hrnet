import "./style.css";
import DataTable from "react-data-table-component";

function EmployeeList() {
     const columns = [
          { name: "First Name", selector: "firstName", sortable: true },
          { name: "Last Name", selector: "lastName", sortable: true },
          { name: "Start Date", selector: "startDate", sortable: true },
          { name: "Department", selector: "department", sortable: true },
          { name: "Date of Birth", selector: "dateOfBirth", sortable: true },
          { name: "Street", selector: "street", sortable: true },
          { name: "City", selector: "city", sortable: true },
          { name: "State", selector: "state", sortable: true },
          { name: "Zip Code", selector: "zipCode", sortable: true },
     ];

     return (
          <div className="list-employee-container">
               <h2>Employee List</h2>
               <DataTable columns={columns} pagination />
          </div>
     );
}

export default EmployeeList;
