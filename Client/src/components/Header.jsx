// src/components/Header.jsx
import { Link } from "react-router-dom";
import '../Styles/Home.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://placehold.co/600x400/black/white?text=LOGO"
              alt="Freaky Fashion Logo"
              className="logo-image"
            />
          </Link>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Sök produkt" className="search-bar" />
          <div className="icons">
            <Link to="#" className="icon-heart-link">
              <span className="icon-heart-header">
                <i className="bi bi-heart-fill"></i>
              </span>
            </Link>
            <Link to="#" className="icon-basket-link">
              <span className="icon-basket">
                <i className="bi bi-basket2-fill"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="navigation-menu">
        <p><Link to="#">Nyheter</Link></p>
        <p><Link to="#">Topplistan</Link></p>
        <p><Link to="#">Rea</Link></p>
        <p><Link to="#">Kampanjer</Link></p>
      </div>
    </header>
  );
};

export default Header;