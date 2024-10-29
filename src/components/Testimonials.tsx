// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Testimonial } from '../models/testimonial.model';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import testimonials1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonials2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonials3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonials4 from '../assets/img/testimonials/testimonials-4.jpg';

const Testimonials = () => {
  const testimonialsList: Testimonial[] = [
    {
      description: 'Excelente profesional',
      authorName: 'Saul Goodman',
      authorRole: 'Ceo &amp; Founder',
      rating: 5,
      img: testimonials1,
    },
    {
      description: 'Excelente profesional',
      authorName: 'Saul Goodman',
      authorRole: 'Ceo &amp; Founder',
      rating: 5,
      img: testimonials2,
    },
    {
      description: 'Excelente profesional',
      authorName: 'Saul Goodman',
      authorRole: 'Ceo &amp; Founder',
      rating: 5,
      img: testimonials3,
    },
    {
      description: 'Excelente profesional',
      authorName: 'Saul Goodman',
      authorRole: 'Ceo &amp; Founder',
      rating: 5,
      img: testimonials4,
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonios</h2>
        <p>Algunas opiniones sobre mi</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* not included initially */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={'auto'}
          pagination={{ el: '.swiper-pagination', type: 'bullets', clickable: true }}
        >
          <div className="swiper-wrapper">
            {testimonialsList.map((testimonialElement) => {
              return (
                <SwiperSlide key={testimonialElement.authorName}>
                  <div className="testimonial-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-6">
                        <div className="testimonial-content">
                          <p>
                            <i className="bi bi-quote quote-icon-left"></i>
                            <span>{testimonialElement.description}</span>
                            <i className="bi bi-quote quote-icon-right"></i>
                          </p>
                          <h3>{testimonialElement.authorName}</h3>
                          <h4>{testimonialElement.authorRole}</h4>
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 text-center">
                        <img src={testimonialElement.img} className="img-fluid testimonial-img" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
