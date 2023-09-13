import './Logo.css';
import { Link } from "react-router-dom"

export default function Logo() {
  return (
    <div className="logo-container">
      <Link to="/"></Link>
      <img src="https://i.imgur.com/KNw3FBhl.png" alt="company logo"/>
    </div>
  );
}
