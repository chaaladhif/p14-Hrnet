import { useState } from "react";
import "./style.css";
import Form from "../../components/form/index";

function CreateEmployee() {
     const [showConfirmation, setShowConfirmation] = useState(false);

     return (
          <div className="create-employee-container">
               <h2 className="create-title">Create Employee</h2>

               <Form setShowConfirmation={setShowConfirmation} />

               {showConfirmation && (
                    <div id="confirmation" className="modal">
                         Employee Created!
                    </div>
               )}
          </div>
     );
}

export default CreateEmployee;
