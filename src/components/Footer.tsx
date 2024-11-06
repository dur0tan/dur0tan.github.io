const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">Alejandro Durán</h3>
        <p>
          Temet Nosce
        </p>
        <div className="social-links d-flex justify-content-center">
          <a href="#">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://github.com/dur0tan" target="_blank">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/alejandro-duran-enriquez/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        {/* Footer con copyright NO MODIFICAR!!! */}
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">Alex Smith</strong>{' '}
            <span>All Rights Reserved</span>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
          <div className="credits">
            Picture by <a href="https://freepik.com/">Freepick</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
