// src/components/InfoGrid.jsx
import '../Styles/Home.css';
const InfoGrid = () => {
  return (
    <section className="info-grid">
      <div className="info-item">
        <i className="bi bi-globe-americas"></i>
        <span>Gratis frakt och returer</span>
      </div>
      <div className="info-item">
        <i className="bi bi-truck"></i>
        <span>Expressfrakt</span>
      </div>
      <div className="info-item">
        <i className="bi bi-shield-shaded"></i>
        <span>Säkra betalningar</span>
      </div>
      <div className="info-item">
        <i className="bi bi-emoji-smile"></i>
        <span>Nyheter varje dag</span>
      </div>
    </section>
  );
};

export default InfoGrid;
