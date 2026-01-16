import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <h2 className="experience-heading">Professional Experience</h2>

      <div className="experience-company">
        <h3 className="company-name">
          Software Engineer I · Terralogic Software Solutions
        </h3>
        <p className="company-duration">Feb 2023 – Jul 2025</p>

        <div className="experience-role">
          <h4 className="role-title">
            Node Management Module (Telecom Platform)
          </h4>
          <ul className="role-list">
            <li>
              Built Angular (v12+) user interfaces using Reactive Forms and
              Angular Material for managing telecom nodes.
            </li>
            <li>
              Implemented add, edit, delete, and bulk-edit workflows with
              validation and error handling.
            </li>
            <li>
              Integrated REST APIs and optimized performance using lazy loading
              and RxJS techniques.
            </li>
            <li>
              Reduced manual effort of NOC teams by approximately 35% through
              streamlined UI workflows.
            </li>
          </ul>
        </div>

        <div className="experience-role">
          <h4 className="role-title">
            Learning Management System (React)
          </h4>
          <ul className="role-list">
            <li>
              Developed React-based dashboards using Hooks, Context API, and
              React Router.
            </li>
            <li>
              Implemented role-based access control (RBAC) with JWT-based
              authentication.
            </li>
            <li>
              Optimized application performance using code splitting and lazy
              loading.
            </li>
            <li>
              Collaborated with backend teams to integrate RESTful APIs and
              ensure smooth data flow.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
