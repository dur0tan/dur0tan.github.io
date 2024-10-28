import masonryPortfolio1 from '../assets/img/masonry-portfolio/masonry-portfolio-1.jpg';
import masonryPortfolio2 from '../assets/img/masonry-portfolio/masonry-portfolio-2.jpg';
import masonryPortfolio3 from '../assets/img/masonry-portfolio/masonry-portfolio-3.jpg';
import masonryPortfolio4 from '../assets/img/masonry-portfolio/masonry-portfolio-4.jpg';
import masonryPortfolio5 from '../assets/img/masonry-portfolio/masonry-portfolio-5.jpg';
import masonryPortfolio6 from '../assets/img/masonry-portfolio/masonry-portfolio-6.jpg';
import masonryPortfolio7 from '../assets/img/masonry-portfolio/masonry-portfolio-7.jpg';
import masonryPortfolio8 from '../assets/img/masonry-portfolio/masonry-portfolio-8.jpg';
import masonryPortfolio9 from '../assets/img/masonry-portfolio/masonry-portfolio-9.jpg';

const Portfolio = () => {
  return (
    
    <section id="portfolio" className="portfolio section">
    <div className="container section-title" data-aos="fade-up">
      <h2>Portafolio</h2>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
        consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
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
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img src={masonryPortfolio1} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio1}
                title="App 1"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img src={masonryPortfolio2} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Product 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio2}
                title="Product 1"
                data-gallery="portfolio-gallery-product"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img src={masonryPortfolio3} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Branding 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio3}
                title="Branding 1"
                data-gallery="portfolio-gallery-branding"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img src={masonryPortfolio4} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio4}
                title="App 2"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img src={masonryPortfolio5} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Product 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio5}
                title="Product 2"
                data-gallery="portfolio-gallery-product"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img src={masonryPortfolio6} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Branding 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio6}
                title="Branding 2"
                data-gallery="portfolio-gallery-branding"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img src={masonryPortfolio7} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio7}
                title="App 3"
                data-gallery="portfolio-gallery-app"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img src={masonryPortfolio8} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Product 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio8}
                title="Product 3"
                data-gallery="portfolio-gallery-product"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img src={masonryPortfolio9} className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Branding 3</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a
                href={masonryPortfolio9}
                title="Branding 2"
                data-gallery="portfolio-gallery-branding"
                className="glightbox preview-link"
              >
                <i className="bi bi-zoom-in"></i>
              </a>
              <a href="portfolio-details.html" title="More Details" className="details-link">
                <i className="bi bi-link-45deg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio