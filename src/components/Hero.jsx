function Hero() {
  return (
  <section style={styles.hero} id="about">
  <div style={styles.bg}></div>

  {/* LEFT */}
  <div style={{ ...styles.textBlock, left: "10%" }}>
    <h1 style={styles.leftTitle}>designer</h1>
    <p style={styles.subtitle}>
      Frontend developer specializing in UI
      design and clean design systems.
    </p>
  </div>

  {/* IMAGE */}
  <img src="/hero.png" alt="Hero" style={styles.image} />

  {/* RIGHT */}
  <div style={{ ...styles.textBlock, right: "10%", textAlign: "right" }}>
    <h1 style={styles.rightTitle}>&lt;coder&gt;</h1>
    <p style={styles.subtitle}>
      Frontend developer who writes
      clean, elegant and efficient code.
    </p>
  </div>
</section>

  );
}

const styles = {
  hero: {
    position: "relative",
    height: "calc(100vh - 60px)",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  image: {
    height: "142%",
    zIndex: 19,
  },

  textBlock: {
    position: "absolute",
maxWidth: "1400px",
margin: "0 auto",
    zIndex: 3,
  },

  leftTitle: {
    fontSize: "70px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#222",
  },

  rightTitle: {
    fontSize: "70px",
fontWeight: "600",
    marginBottom: "12px",
    color: "#222",
    fontFamily: "monospace",
  },

  subtitle: {
    fontSize: "14px",
    color: "#777",
lineHeight: "1.8",
  },

  codeBg: {
    marginTop: "20px",
    fontSize: "11px",
    lineHeight: "1.4",
    color: "#000",
    opacity: 0.06,
    fontFamily: "monospace",
  },
  bg: {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  background: `
    radial-gradient(circle at 20% 30%, rgba(255, 200, 150, 0.25), transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(150, 200, 255, 0.25), transparent 40%),
    radial-gradient(circle at 50% 80%, rgba(180, 255, 200, 0.25), transparent 40%)
  `,
  animation: "floatBg 20s ease-in-out infinite",
},

};

export default Hero;
