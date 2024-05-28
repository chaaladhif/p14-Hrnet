import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import {
     setFirstname,
     setLastname,
     setDateOfBirth,
     setStartDate,
     setStreet,
     setCity,
     setState,
     setZipCode,
     setDepartment,
     addEmployee,
} from "../../store";

function Form({ setShowConfirmation }) {
     const dispatch = useDispatch();
     const employee = useSelector((state) => state.employee.employee);

     const saveEmployee = (event) => {
          event.preventDefault();
          dispatch(addEmployee());
          setShowConfirmation(true);
          setTimeout(() => setShowConfirmation(false), 5000);
     };

     return (
          <form onSubmit={saveEmployee} id="create-employee">
               <div className="form-field">
                    <div className="field-label">
                         <label htmlFor="first-name">First Name</label>
                         <input
                              type="text"
                              id="first-name"
                              value={employee.firstname}
                              onChange={(e) =>
                                   dispatch(setFirstname(e.target.value))
                              }
                         />
                    </div>
                    <div className="field-label">
                         <label htmlFor="last-name">Last Name</label>
                         <input
                              type="text"
                              id="last-name"
                              value={employee.lastname}
                              onChange={(e) =>
                                   dispatch(setLastname(e.target.value))
                              }
                         />
                    </div>
               </div>
               <div className="form-field">
                    <div className="field-label">
                         <label htmlFor="date-of-birth">Date of Birth</label>
                         <DatePicker
                              id="date-of-birth"
                              selected={
                                   employee.dateOfBirth
                                        ? new Date(employee.dateOfBirth)
                                        : null
                              }
                              onChange={(date) =>
                                   dispatch(setDateOfBirth(date.toISOString()))
                              }
                              dateFormat="MM/dd/yyyy"
                         />
                    </div>
                    <div className="field-label">
                         <label htmlFor="start-date">Start Date</label>
                         <DatePicker
                              id="start-date"
                              selected={
                                   employee.startDate
                                        ? new Date(employee.startDate)
                                        : null
                              }
                              onChange={(date) =>
                                   dispatch(setStartDate(date.toISOString()))
                              }
                              dateFormat="MM/dd/yyyy"
                         />
                    </div>
               </div>
               <fieldset className="address">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input
                         id="street"
                         type="text"
                         value={employee.street}
                         onChange={(e) => dispatch(setStreet(e.target.value))}
                    />
                    <label htmlFor="city">City</label>
                    <input
                         id="city"
                         type="text"
                         value={employee.city}
                         onChange={(e) => dispatch(setCity(e.target.value))}
                    />
                    <label htmlFor="state">State</label>
                    <select
                         id="state"
                         value={employee.state}
                         onChange={(e) => dispatch(setState(e.target.value))}
                    >
                         <option value="">Select a state</option>
                         <option value="CA">California</option>
                         <option value="NY">New York</option>
                         <option value="TX">Texas</option>
                    </select>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input
                         id="zip-code"
                         type="number"
                         value={employee.zipCode}
                         onChange={(e) => dispatch(setZipCode(e.target.value))}
                    />
               </fieldset>
               <label htmlFor="department">Department</label>
               <select
                    id="department"
                    value={employee.department}
                    onChange={(e) => dispatch(setDepartment(e.target.value))}
               >
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
               </select>
               <button type="submit" className="button-save">
                    Save
               </button>
          </form>
     );
}

export default Form;
