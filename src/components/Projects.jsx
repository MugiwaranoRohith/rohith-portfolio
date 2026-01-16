import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Selected Work</h2>

      <p className="projects-subheading">
        A few projects showcasing my frontend development experience
      </p>

      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <h3 className="project-title">Lawyer Tiptap Editor</h3>
          <p className="project-desc">
            Rich text editor built using Tiptap with custom toolbar,
            formatting options, and clean UI.
          </p>
          <p className="project-tech">
            React · Tiptap · JavaScript
          </p>
          <a
            className="project-link"
            href="https://github.com/MugiwaranoRohith/Lawyers-tiptap"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3 className="project-title">Shopify Frontend</h3>
          <p className="project-desc">
            Shopify frontend customization with product pages,
            reusable UI components, and responsive design.
          </p>
          <p className="project-tech">
            Shopify · HTML · CSS · JavaScript
          </p>
          <a
            className="project-link"
            href="https://github.com/MugiwaranoRohith/Rohith-E"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-title">Star Wars Explorer</h3>
          <p className="project-desc">
            API-based React app using Star Wars API with search,
            pagination, and clean UI handling.
          </p>
          <p className="project-tech">
            React · REST API · JavaScript
          </p>
          <a
            className="project-link"
            href="https://github.com/MugiwaranoRohith/Rohith_Star_Wars"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
