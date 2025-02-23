// src/components/SpotGrid.jsx
import '../Styles/Home.css';

const SpotGrid = () => {
  return (
    <section className="spots">
      <div className="spot-grid">
        <div className="spot">
          <img
            src="https://placehold.co/600x400/grey/yellow?text=SPOT1"
            alt="Spot 1"
            className="spot-image"
          />
        </div>
        <div className="spot">
          <img
            src="https://placehold.co/600x400/grey/yellow?text=SPOT2"
            alt="Spot 2"
            className="spot-image"
          />
        </div>
        <div className="spot">
          <img
            src="https://placehold.co/600x400/grey/yellow?text=SPOT3"
            alt="Spot 3"
            className="spot-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SpotGrid;
