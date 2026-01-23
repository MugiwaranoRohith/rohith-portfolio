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
      Developed a React-based frontend module to manage telecom network nodes with reusable components and clean UI architecture.
    </li>
    <li>
      Designed CRUD and bulk update workflows with client-side validation and error handling.
    </li>
    <li>
      Consumed RESTful APIs and improved performance using lazy loading and optimized state handling.
    </li>
    <li>
      Improved operational efficiency for NOC teams by reducing manual processes by ~35%.
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
