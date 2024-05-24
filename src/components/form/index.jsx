import "./style.css";

function Form() {
     return (
          <div id="create-employee">
               <div className="form-field">
                    <div className="field-label">
                         <label htmlFor="first-name">First Name</label>
                         <input type="text" id="first-name" />
                    </div>
                    <div className="field-label">
                         <label htmlFor="last-name">Last Name</label>
                         <input type="text" id="last-name" />
                    </div>
               </div>
               <div className="form-field">
                    <div className="field-label">
                         <label htmlFor="date-of-birth">Date of Birth</label>
                         <input id="date-of-birth" type="text" />
                    </div>
                    <div className="field-label">
                         <label htmlFor="start-date">Start Date</label>
                         <input id="start-date" type="text" />
                    </div>
               </div>
               <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select id="state">
                         {/* Remplacez par les options réelles des états */}
                         <option value="">Select a state</option>
                         <option value="CA">California</option>
                         <option value="NY">New York</option>
                         <option value="TX">Texas</option>
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
               </fieldset>

               <label htmlFor="department">Department</label>
               <select id="department">
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
               </select>

               <button type="submit" className="button-save">
                    Save
               </button>
          </div>
     );
}

export default Form;
