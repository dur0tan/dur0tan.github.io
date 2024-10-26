import { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';
import PureCounter from '@srexi/purecounterjs';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import 'waypoints/lib/noframework.waypoints.min';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import About from './components/About';
import Stats from './components/Stats';
import Banner from './components/Banner';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  setTimeout(() => setShowPreloader(false), 1000);

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  // scrollTop.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    // eslint-disable-next-line no-undef
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function () {
        // handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      },
    });
  });

  // FIXME problemas abriendo fotos
  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox',
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort,
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener(
        'click',
        function () {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
          if (typeof aosInit === 'function') {
            AOS.init({
              duration: 600,
              easing: 'ease-in-out',
              once: true,
              mirror: false,
            });
          }
        },
        false
      );
    });
  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function () {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  });

  return (
    <>
      <Header></Header>
      <main className="main">
        <Banner></Banner>
        <About></About>
        <Stats></Stats>
        <Skills></Skills>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Services></Services>
        <Testimonials></Testimonials>
        <Contact></Contact>
      </main>
      <Footer></Footer>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {showPreloader ? <div id="preloader"></div> : undefined}
    </>
  );
}

export default App;
