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
          <h3 className="project-title">Cosmic Exploration</h3>

          <img
            src="/cosmic.png"
            alt="Cosmic Exploration preview"
            className="project-image"
          />

          <p className="project-desc">
            A visual journey through space exploration.
          </p>

          <p className="project-tech">
            React · CSS · JavaScript
          </p>

          <div className="project-actions">
            <a
              href="https://rohithspace2.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-preview"
            >
              Live Preview
            </a>

           
          </div>
        </div>

        {/* Project 2 */}
        {/* <div className="project-card">
          <h3 className="project-title">Shopify Frontend</h3>

          <p className="project-desc">
            Shopify frontend customization with product pages, reusable UI
            components, and responsive design.
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
        </div> */}

        {/* Project 3 */}
        <div className="project-card">
          <h3 className="project-title">Star Wars Explorer</h3>

   <img
            src="/starwars.png"
            alt="Star Wars preview"
            className="project-image"
          />

          <p className="project-desc">
            API-based React app using Star Wars API with search and pagination.
          </p>

          <p className="project-tech">
            Angular · REST API · JavaScript
          </p>


 <a
              href="https://rohithstar.vercel.app/characters"
              target="_blank"
              rel="noreferrer"
              className="project-preview"
            >
              Live Preview
            </a>
       
        </div>
      </div>
    </section>
  );
}

export default Projects;
