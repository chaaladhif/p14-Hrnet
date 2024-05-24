import "./style.css";
import Form from "../../components/form";
function CreateEmployee() {
     return (
          <div className="create-employee-container">
               <Form />
               {/*}
               {showConfirmation && (
                    <div id="confirmation" className="modal">
                         Employee Created!
                    </div>
               )}*/}
          </div>
     );
}

export default CreateEmployee;
