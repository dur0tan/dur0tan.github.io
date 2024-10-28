import profileImg from '../assets/img/profile-img.jpg';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Sobre mí</h2>
        <p>
          Temet Nosce
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src={profileImg} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 content">
            <h2>Frontend Web Developer</h2>
            <p className="fst-italic py-3">
              Desarrollador web de la Habana, apasionado de la tecnología y el aprendizaje. Estudió en la Universidad
              Tecnológica de la Habana “José Antonio Echeverría” graduándose como Ingeniero Informático en 2019. Centró
              sus estudios en el diseño y desarrollo de aplicaciones web, campo favorito. Desde entonces continúa
              trabajando y estudiando, programando como desarrollador móvil y full-stack. Disfruta trabajar en equipo,
              dar y recibir feedback y los nuevos proyectos desafiantes. Se especializa en el trabajo con frameworks
              front-end como Angular, Vue y React. Domina frameworks back-end como Spring y NodeJS. Posee un buen nivel
              de inglés, siendo perfectamente capaz de leer, escribir y comunicarse.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                     {/* TODO Posible emailto*/}
                     <i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>aleduranenri@gmail.com</span>
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
