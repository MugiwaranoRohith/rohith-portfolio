function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Rohith E</div>
<ul style={styles.menu}>
  <li><a href="#about" style={styles.navLink}>About</a></li>
  <li><a href="#projects" style={styles.navLink}>Portfolio</a></li>
  <li><a href="#contact" style={styles.navLink}>Contact</a></li>
</ul>


   
    </nav>
  );
}

const styles = {
  nav: {
    height: "60px",
backgroundColor: "#111",
borderBottom: "1px solid #222",

    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  menu: {
    listStyle: "none",
    display: "flex",
    gap: "30px",
  },
  socials: {
    display: "flex",
    gap: "20px",
    fontSize: "14px",
  },
  navLink: {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
},

};

export default Navbar;
