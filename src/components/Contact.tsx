const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contáctenos</h2>
        <p>Puede encontrarnos en</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Dirección</h3>
                <p>Calle, Madrid, Madrid 28026</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Llámanos</h3>
                <p>+34 XXX XX XXXX</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Escribanos</h3>
                <p>aleduranenri@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"                   
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Cargando</div>
                  <div className="error-message"></div>
                  <div className="sent-message">¡Su mensaje ha sido enviado, gracias!</div>

                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
