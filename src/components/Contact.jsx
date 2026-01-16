
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-heading">Get in Touch</h2>

      <p className="contact-text">
        I’m open to frontend roles and freelance opportunities. Feel free to
        reach out.
      </p>

      <div className="contact-links">
        <a
          className="contact-link"
          href="https://mail.google.com/mail/?view=cm&to=rohithashoka100@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>

        <a
          className="contact-link"
          href="https://github.com/MugiwaranoRohith"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="contact-link"
          href="https://www.linkedin.com/in/rohith-e-37a5ba246"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
