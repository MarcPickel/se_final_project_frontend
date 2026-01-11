import "./About.css";

import immaculate from "../../assets/cathedral-immaculate-conception-kc-mo.jpg";
import mp from "../../assets/noir-mp-distance.jpg";

function About() {
  return (
    <div>
      <section className="about">
        <h1 className="about__main-header">About Us</h1>
        <div className="about__container">
          <img className="about__image" src={immaculate} alt="" />
          <div className="about__content">
            <h2 className="about__header">The Mission</h2>
            <p className="about__text">
              Man's Search For Reading works to revive the pastime of reading
              for men, who so popularly believe, nowadays, that it is boring, by
              introducing them to the good books and good poetry that real men
              wrote back in the day and that every man read.
            </p>
          </div>
        </div>
        <div className="about__container">
          <div className="about__content">
            <h2 className="about__header">The Story</h2>
            <p className="about__text">
              As it presently stands, Man's Search For Reading began in Kansas
              City, Missouri. After meeting success there, the idea was proposed
              to start a group in Sioux Falls, South Dakota, led by Marc
              Pickelman.
              <hr className="about__text-break" />
              Marc Pickelman was born and raised in the Midwest. He applies
              himself to both intellectual pursuits and the Trades. He would see
              that every man, white-collar and blue-collar, could sit in the
              same room, realizing their equality in Jesus Christ, to share in
              their love for reading good books.
            </p>
          </div>
          <img className="about__image" src={mp} alt="" />
        </div>
      </section>
    </div>
  );
}

export default About;
