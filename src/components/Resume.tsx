import { Experience } from '../models/experience.model';

const Resume = () => {
  const educationList: Experience[] = [
    {
      workTitle: 'Ingeniero INformático',
      startDate: '09-2014',
      endDate: '07-2019',
      companyData: 'Universidad Tecnológica de la Habana “José Antonio Echeverría”, CUJAE, Cuba',
      workDescription: 'Trabajó en el desarrollo tanto del front-end (JSF, Primefaces), como del back-end de la aplicación escrita en Java. Estudió y aplicó algoritmos metaheurísticos en el problema de formación de equipos.',
    },
  ];

  const experienceList: Experience[] = [
    {
      workTitle: 'Desarrollador de Software Senior',
      startDate: '10-2021',
      endDate: 'Actualidad',
      companyData: 'SOAINT, Madrid, España',
      workDescription:
        'Trabajó como desarrollador web para las diferentes oficinas de la empresa. Utilizó los lenguajes esenciales de la web (HTML5, CSS3, Javascript), herramientas de gestión de proyectos y código (Git, Github, Jira, GitLab). Y numerosas tecnologías como: Angular, Nx, Module Federation, SCSS, PWA, Typescript, NgRx, Bootstrap y Material. Trabajó también como líder técnico, liderando equipos de desarrolladores frontend. Participó tanto en procesos de estimación como de desarrollo, diseñando, desarrollando y revisando implementaciones.',
    },
    {
      workTitle: 'Consultor Exteno',
      startDate: '04-2023',
      endDate: '12-2023',
      companyData: 'INDRA, Madrid, España',
      workDescription:
        'Trabajó con el equipo de Transformación Digital como consultor externo/líder técnico en el desarrollo frontend de una aplicación para la Tesorería General de la Seguridad Social. Participó tanto en procesos de estimación como de desarrollo. Trabajó con los lenguajes esenciales de la web (HTML5, CSS3, Javascript) y herramientas de gestión de proyectos y código (Git, Jira, GitLab).',
    },
  ];

  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Educación y experiencia </h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Resumen</h3>
            <div className="resume-item pb-0">
              <h4>Alejandro Durán</h4>
              <p>
                <em>
                  Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing
                  user-centered digital/print marketing material from initial concept to final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Educación</h3>
            {educationList.map((experienceElement) => {
              return (
                <div className="resume-item">
                  <h4>{experienceElement.workTitle}</h4>
                  <h5>
                    {experienceElement.startDate} - {experienceElement.endDate}
                  </h5>
                  <p>
                    <em>{experienceElement.companyData}</em>
                  </p>
                  <p>
                    {experienceElement.workDescription}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Experiencia Profesional</h3>
            {experienceList.map((experienceElement) => {
              return (
                <div className="resume-item">
                  <h4>{experienceElement.workTitle}</h4>
                  <h5>
                    {experienceElement.startDate} - {experienceElement.endDate}
                  </h5>
                  <p>
                    <em>{experienceElement.companyData}</em>
                  </p>
                  <ul>
                    <li>{experienceElement.workDescription}</li>
                    {/* <li>
                      Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the
                      project.{' '}
                    </li>
                    <li>
                      Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the
                      design
                    </li>
                    <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
