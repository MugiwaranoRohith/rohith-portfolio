function Projects() {
  return (
    <section style={styles.section} id="projects">
<h2 style={styles.heading}>Selected Work</h2>
<p style={styles.subheading}>
  A few projects showcasing my frontend development experience
</p>

<div
className="fade-up"
  style={{ ...styles.card, animationDelay: "0.1s" }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.06)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
        {/* Project 1 */}
<div
className="fade-up"
  style={{ ...styles.card, animationDelay: "0.1s" }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.06)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
          <h3 style={styles.title}>Lawyer Tiptap Editor</h3>
          <p style={styles.desc}>
            Rich text editor built using Tiptap with custom toolbar,
            formatting options, and clean UI.
          </p>
          <p style={styles.tech}>React · Tiptap · JavaScript</p>
          <a style={styles.link} href="https://github.com/MugiwaranoRohith/Lawyers-tiptap" target="_blank">
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
<div
className="fade-up"
  style={{ ...styles.card, animationDelay: "0.1s" }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.06)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
          <h3 style={styles.title}>Shopify Frontend</h3>
          <p style={styles.desc}>
            Shopify frontend customization with product pages,
            reusable UI components, and responsive design.
          </p>
          <p style={styles.tech}>Shopify · HTML · CSS · JavaScript</p>
          <a style={styles.link} href="https://github.com/MugiwaranoRohith/Rohith-E" target="_blank">
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
<div
className="fade-up"
  style={{ ...styles.card, animationDelay: "0.1s" }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.06)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
          <h3 style={styles.title}>Star Wars Explorer</h3>
          <p style={styles.desc}>
            API-based React app using Star Wars API with search,
            pagination, and clean UI handling.
          </p>
          <p style={styles.tech}>React · REST API · JavaScript</p>
          <a style={styles.link} href="https://github.com/MugiwaranoRohith/Rohith_Star_Wars" target="_blank">
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 100px",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "16px",
  },
  subheading: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "60px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "40px",
  },
  card: {
border: "1px solid #f0f0f0",
borderRadius: "6px",

    padding: "32px",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  title: {
fontSize: "22px",
    marginBottom: "12px",
  },
  desc: {
fontSize: "22px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "16px",
  },
  tech: {
fontSize: "22px",
    color: "#999",
    marginBottom: "24px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  link: {
fontSize: "22px",
    color: "#111",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Projects;
