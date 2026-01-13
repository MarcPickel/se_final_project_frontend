import "./About.css";

import manReading from "../../assets/gentleman-reading.jpg";
import mp from "../../assets/noir-mp-distance.jpg";

function About() {
  return (
    <div>
      <section className="about">
        <h1 className="about__main-header">About Us</h1>
        <div className="about__container">
          <img className="about__image" src={manReading} alt="" />
          <div className="about__content">
            <h2 className="about__header">The Goal</h2>
            <p className="about__text">
              The goal isn&apos;t just to &quot;get through books,&quot; but to
              read in a way that actually forms us through the gift of
              friendship. It&apos;s deliberately simple: good books, real
              conversation, and friendship. No pressure to be an expert, just a
              willingness to read the book, show up, and engage in the
              conversation.
            </p>
          </div>
        </div>
        <div className="about__container">
          <div className="about__content">
            <h2 className="about__header">The Story</h2>
            <p className="about__text">
              &quot;Man&apos;s Search for Reading grew pretty organically. A few
              of us were already reading serious books on our own and having
              good conversations, but we felt something was missing, namely, a
              shared commitment and a space where men could read together with
              intention. Viktor Frankl&apos;s{" "}
              <span className="about__text about__text_italic">
                &#160;Man&apos;s Search for Meaning&#160;
              </span>
              was a big influence for me personally, especially the idea that
              meaning isn&apos;t something you invent, but something you respond
              to. The name came out of that conviction.&quot;
            </p>

            <p className="about__text">- Tyler Supalla</p>

            <p className="about__text">
              As it presently stands, Man&apos;s Search For Reading began in
              Kansas City, Missouri with Tyler Supalla. After meeting success
              there, the idea was proposed by his sister to start a group in
              Sioux Falls, South Dakota, led by Marc Pickelman.
            </p>

            <p className="about__text">
              Marc Pickelman was born and raised in the Midwest. He applies
              himself to both intellectual pursuits and the Trades. He would see
              that every man, white-collar and blue-collar, could sit in the
              same room, realizing their equality in Jesus Christ, to share in
              their love for God, for each other, and for reading good books.
            </p>
          </div>
          <img className="about__image" src={mp} alt="" />
        </div>
      </section>
    </div>
  );
}

export default About;
