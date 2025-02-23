// src/components/Hero.jsx
import '../Styles/Home.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src="https://placehold.co/600x400/white/black?text=HERO"
          alt="Hero Image"
          className="hero-image"
        />
        <div className="hero-text">
          <h2>Lorem ipsum dolor</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure
            sapiente dolores et nostrum totam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;