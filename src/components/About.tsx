import profileImg from '../assets/img/profile-img.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre mí</h2>
        <p>Conoce más sobre mi trayectoria profesional, mi pasión por el desarrollo web y lo que me motiva a crear soluciones digitales innovadoras que marcan la diferencia.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profileImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Frontend Web Developer</h2>
            <p className="fst-italic py-3">
              Soy un jóven desarrollador web cubano radicado en Madrid, apasionado de la tecnología y el aprendizaje. Mi
              especialidad es el diseño y desarrollo front-end de aplicaciones web con frameworks Javascript como
              Angular, React y Vue. He ejercido ocasionalmente como desarrollador full-stack complementando mis
              conocimientos con frameworks backend como Express y NestJS. Disfruto trabajar en equipo, dar y recibir
              feedback y los nuevos proyectos desaﬁantes. Poseo un buen nivel de inglés (avalado por EF SET) siendo
              perfectamente capaz de leer, escribir y comunicarme. Conozco los fundamentos de SCRUM (avalado por
              CertiProf), habiendome integrado con éxito a numerosos equipos ágiles.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    {/* TODO Posible emailto*/}
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>samplemail@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Sitio web:</strong> <span>dur0tan.github.io</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Ciudad:</strong> <span>Madrid, España</span>
                  </li>
                </ul>
              </div>
              {/* <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                  </li>
                </ul>
              </div> */}
            </div>
            {/* <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et
              ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis
              quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
