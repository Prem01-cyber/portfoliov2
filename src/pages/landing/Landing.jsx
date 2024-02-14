import "./Landing.scss";
import gsap from "gsap";
import Splash from "../splash/Splash";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate("");

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="landing">
      <h1>Landing</h1>
      <div className="logo">
        <p onClick={handleLogoClick}>Logo</p>
      </div>
    </div>
  );
};

export default Landing;
