import { Skill } from '../models/skill.model';

const Skills = () => {
  const skillsList: Skill[] = [
    { name: 'HTML', value: 100 },
    { name: 'CSS', value: 90 },
    { name: 'JavaScript', value: 90 },
  ];

  const skillsList2: Skill[] = [
    { name: 'React', value: 80 },
    { name: 'Angular', value: 90 },
    { name: 'Vue', value: 65 },
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Habilidades</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            {skillsList.map((skillElement) => {
              return (
                <div key={skillElement.name} className="progress">
                  <span className="skill">
                    <span>{skillElement.name}</span> <i className="val">{skillElement.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skillElement.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6">
            {skillsList2.map((skillElement) => {
              return (
                <div key={skillElement.name} className="progress">
                  <span className="skill">
                    <span>{skillElement.name}</span> <i className="val">{skillElement.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={skillElement.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
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

export default Skills;
