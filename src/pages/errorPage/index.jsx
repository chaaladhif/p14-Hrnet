import "./style.css";
import { Link } from "react-router-dom";
import cable from "../../assets/cable.png";
function ErrorPage() {
     return (
          <div className="error">
               <h1 className="error-text">Oups..</h1>
               <img src={cable} alt="error img" />
               <p className="error-text">
                    La page que vous recherchez semble introuvable
               </p>
               <Link to="/" className="error__link">
                    Retourner sur la page d’accueil
               </Link>
          </div>
     );
}

export default ErrorPage;
