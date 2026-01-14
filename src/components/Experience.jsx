function Experience() {
  return (
    <section style={styles.section} id="experience">
      <h2 style={styles.heading}>Professional Experience</h2>

      <div style={styles.company}>
        <h3 style={styles.companyName}>
          Software Engineer I · Terralogic Software Solutions
        </h3>
        <p style={styles.duration}>Feb 2023 – Jul 2025</p>

        <div style={styles.role}>
          <h4 style={styles.roleTitle}>Node Management Module (Telecom Platform)</h4>
          <ul style={styles.list}>
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

        <div style={styles.role}>
          <h4 style={styles.roleTitle}>Learning Management System (React)</h4>
          <ul style={styles.list}>
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

const styles = {
  section: {
    padding: "120px 100px",
    borderTop: "1px solid #eee",
paddingTop: "140px",

    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "60px",
  },
  company: {
    maxWidth: "900px",
  },
  companyName: {
    fontSize: "22px",
    marginBottom: "8px",
  },
  duration: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "32px",
  },
  role: {
    marginBottom: "32px",
  },
  roleTitle: {
    fontSize: "18px",
    marginBottom: "12px",
  },
  list: {
    paddingLeft: "18px",
    color: "#444",
    lineHeight: "1.7",
    fontSize: "14px",
  },
};

export default Experience;
