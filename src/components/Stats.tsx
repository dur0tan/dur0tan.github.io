export interface Counter {
  icon: string;
  value: number;
  text: string;
}

const Stats = () => {
  const counters: Counter[] = [
    { icon: 'bi bi-emoji-smile', value: 232, text: 'Happy Clients' },
    { icon: 'bi bi bi-journal-richtext', value: 521, text: 'Projects' },
    { icon: 'bi bi-headset', value: 1463, text: 'Hours Of Support' },
    { icon: 'bi bi-people', value: 15, text: 'Hard Workers' },
  ];
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {counters.map((counterElement) => {
            return (
              <div key={counterElement.text} className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className={counterElement.icon}></i>
                <div className="stats-item">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={counterElement.value}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>{counterElement.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
