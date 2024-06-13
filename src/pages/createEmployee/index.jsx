import { useState } from "react";
import "./style.css";
import Form from "../../components/form/index";
import Loader from "../../components/loader/index";
//import Modal from "../../components/modal/index";
import { addEmployee } from "../../store";
import Modal from "chaalaa-modal";
//import "../../../node_modules/chaalaa-modal/dist/style.css"; // Import du style

function CreateEmployee() {
     const [showConfirmation, setShowConfirmation] = useState(false);
     const [loading, setLoading] = useState(false); // Initialisez loading à false

     const handleFormSubmit = async () => {
          setLoading(true);
          await addEmployee();
          setLoading(false); // Met fin au chargement une fois l'employé ajouté
          // setShowConfirmation(true); // Affiche le modal de confirmation une fois l'employé ajouté
     };

     return (
          <div className="create-employee-container">
               <h2 className="create-title">Create Employee</h2>
               <Form
                    setShowConfirmation={setShowConfirmation}
                    onSubmit={handleFormSubmit}
               />
               {loading && <Loader />}
               {/* Affichez le loader si loading est true */}
               <Modal
                    isOpen={showConfirmation}
                    onClose={() => setShowConfirmation(false)}
                    text="Employee Created!"
               />
          </div>
     );
}

export default CreateEmployee;
