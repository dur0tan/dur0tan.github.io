import masonryPortfolio1 from '../assets/img/masonry-portfolio/masonry-portfolio-1.jpg';
import masonryPortfolio2 from '../assets/img/masonry-portfolio/masonry-portfolio-2.jpg';
import masonryPortfolio3 from '../assets/img/masonry-portfolio/masonry-portfolio-3.jpg';
import masonryPortfolio4 from '../assets/img/masonry-portfolio/masonry-portfolio-4.jpg';
import masonryPortfolio5 from '../assets/img/masonry-portfolio/masonry-portfolio-5.jpg';
import masonryPortfolio6 from '../assets/img/masonry-portfolio/masonry-portfolio-6.jpg';
import masonryPortfolio7 from '../assets/img/masonry-portfolio/masonry-portfolio-7.jpg';
import masonryPortfolio8 from '../assets/img/masonry-portfolio/masonry-portfolio-8.jpg';
import masonryPortfolio9 from '../assets/img/masonry-portfolio/masonry-portfolio-9.jpg';
import { Proyect } from '../models/proyect.model';

const Portfolio = () => {
  const proyectList: Proyect[] = [
    {
      category: 'app',
      img: masonryPortfolio1,
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'product',
      img: masonryPortfolio2,
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'branding',
      img: masonryPortfolio3,
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'app',
      img: masonryPortfolio4,
      title: 'App 2',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'product',
      img: masonryPortfolio5,
      title: 'Product 2',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'branding',
      img: masonryPortfolio6,
      title: 'Branding 2',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'app',
      img: masonryPortfolio7,
      title: 'App 3',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'product',
      img: masonryPortfolio8,
      title: 'Product 3',
      description: 'Lorem ipsum, dolor sit',
    },
    {
      category: 'branding',
      img: masonryPortfolio9,
      title: 'Branding 3',
      description: 'Lorem ipsum, dolor sit',
    },
  ];
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portafolio</h2>
        <p>
          Algunos de mis proyectos.
        </p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Card</li>
            <li data-filter=".filter-branding">Web</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {proyectList.map((proyectElement) => {
              return (
                <div
                  key={proyectElement.title}
                  className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${proyectElement.category}`}
                >
                  <img src={proyectElement.img} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>{proyectElement.title}</h4>
                    <p>{proyectElement.description}</p>
                    <a
                      href={proyectElement.img}
                      title={proyectElement.title}
                      data-gallery={`portfolio-gallery-${proyectElement.category}`}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a href="portfolio-details.html" title="More Details" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
