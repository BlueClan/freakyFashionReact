// src/components/Footer.jsx

import React, { useState } from 'react';  // React is imported for JSX and hooks
import '../Styles/Home.css';
const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (section) => {
    if (activeAccordion === section) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(section);
    }
  };

  return (
    <footer>
      {/* Accordion Section */}
      <button
        className="accordion"
        onClick={() => toggleAccordion("shopping")}
      >
        Shopping
      </button>
      <div
        className="panel"
        style={{ maxHeight: activeAccordion === "shopping" ? "200px" : "0" }}
      >
        <p>Vinterjackor</p>
        <p>Pufferjackor</p>
        <p>Kappa</p>
        <p>Trenchcoats</p>
      </div>

      <button
        className="accordion"
        onClick={() => toggleAccordion("myAccount")}
      >
        Mina Sidor
      </button>
      <div
        className="panel"
        style={{ maxHeight: activeAccordion === "myAccount" ? "200px" : "0" }}
      >
        <p>Mina Ordrar</p>
        <p>Mitt Konto</p>
      </div>

      <button
        className="accordion"
        onClick={() => toggleAccordion("customerService")}
      >
        Kundtjänst
      </button>
      <div
        className="panel"
        style={{
          maxHeight: activeAccordion === "customerService" ? "200px" : "0",
        }}
      >
        <p>Returnpolicy</p>
        <p>Integritetspolicy</p>
      </div>

      {/* Footer Links Section */}
      <div className="footer-content">
        <div className="footer-column">
          <h4>Shopping</h4>
          <p>Vinterjackor</p>
          <p>Pufferjackor</p>
          <p>Kappa</p>
          <p>Trenchcoats</p>
        </div>
        <div className="footer-column">
          <h4>Mina Sidor</h4>
          <p>Mina Ordrar</p>
          <p>Mitt Konto</p>
        </div>
        <div className="footer-column">
          <h4>Kundtjänst</h4>
          <p>Returnpolicy</p>
          <p>Integritetspolicy</p>
        </div>
      </div>

      {/* Footer Trademark Section */}
      <p className="footer-trademark">&copy; Freaky Fashion</p>
    </footer>
  );
};

export default Footer;
