function Contact() {
  return (
    <section style={styles.section} id="contact">
      <h2 style={styles.heading}>Get in Touch</h2>
      <p style={styles.text}>
        I’m open to frontend roles and freelance opportunities. Feel free to
        reach out.
      </p>

      <div style={styles.links}>
      <a
        className="contact-link"

  style={styles.link}
  href="https://mail.google.com/mail/?view=cm&to=rohithashoka100@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  Email
</a>

        <a
          className="contact-link"

          style={styles.link}
          href="https://github.com/MugiwaranoRohith"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className="contact-link"

          style={styles.link}
          href="https://www.linkedin.com/in/rohith-e-37a5ba246

"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "120px 100px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "16px",
  },
  text: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "40px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
  },
  
 link: {
  fontSize: "14px",
  color: "#111",
  textDecoration: "none",
  fontWeight: "600",
  position: "relative",
  paddingBottom: "4px",


  
},

};

export default Contact;
