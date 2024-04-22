import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Startseite</Link>
      <Link to="/impressum">Impressum</Link>
      <Link to="/datenschutz">Datenschutz</Link>
    </div>
  );
};
export default Navbar;
