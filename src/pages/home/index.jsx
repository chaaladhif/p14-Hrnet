import "./style.css";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/index";
import Card from "../../components/card";
const features = [
     {
          title: "Employee Management",
          content: "Easily manage all your employee records in one place.",
     },
     {
          title: "Performance Tracking",
          content: "Track and analyze the performance of your employees.",
     },
     {
          title: "Secure Data",
          content: "Ensure your employee data is secure and confidential.",
     },
];
function Home() {
     return (
          <>
               <Banner />
          </>
     );
}

export default Home;
