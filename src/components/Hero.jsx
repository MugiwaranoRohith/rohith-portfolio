import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="about">
      <div className="hero-bg"></div>

      {/* LEFT */}
      <div className="hero-block hero-left">
        <h1 className="hero-title left-title">designer</h1>
        <p className="hero-subtitle">
          Frontend developer specializing in UI
          design and clean design systems.
        </p>
      </div>

      {/* CENTER */}
      <div className="hero-block hero-center">
        <h1 className="hero-title main-title">Rohith E</h1>
      </div>

      {/* RIGHT */}
      <div className="hero-block hero-right">
        <h1 className="hero-title right-title">&lt;coder&gt;</h1>
        <p className="hero-subtitle">
          Frontend developer who writes
          clean, elegant and efficient code.
        </p>
      </div>
    </section>
  );
}

export default Hero;
