import Typed from 'typed.js';
import heroBg from '../assets/img/hero-bg.jpg';
import { useEffect, useRef } from 'react';

const Banner = () => {
  /**
   * Init typed.js
   */
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <img src={heroBg} alt="" />

      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h2>Alejandro Durán</h2>
            <p>
              I&apos;m <span ref={el}>Designer</span>
              <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
            </p>
            <div className="social-links">
              <a href="#">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://github.com/dur0tan" target='_blank'>
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/alejandro-duran-enriquez/" target='_blank'>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
