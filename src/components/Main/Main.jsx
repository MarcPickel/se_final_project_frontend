import "./Main.css";
import Banner from "../Banner/Banner.jsx";
import ship from "../../assets/old-style-ship-kenilworth-honorable-james-richmond.jpg";

function Main() {
  return (
    <div className="main">
      <Banner />
      <section className="main__intro">
        <img
          className="main__image main__image_ship"
          src={ship}
          alt="Old style ship, 'Kenilworth', by James Richmond"
        />
        <h1 className="main__intro-title">
          Man's search for reading good books
        </h1>
        <div className="main__intro-column">
          <p className="main__intro-text">
            Jostled by a stormy sea of entertainment, man longs to find a true
            port. Man's Search For Reading provides a safehaven for men to
            gather in friendship and discuss eternal truths rediscovered through
            the traditional pastime of reading good books.
          </p>
          <button className="main__act-button" type="button">
            JOIN TODAY
          </button>
        </div>
      </section>
      <section className="main__page-route">
        Start searching for good books <span>&gt;&gt;</span>
      </section>
      <section className="main__christo-centric">
        <img />
        <div className="main__christo-centric-column">
          <h2 className="main__christo-centric-subtitle">
            Christo-centric imagination
          </h2>
          <p className="main__christo-centric-text">
            With an emphasis placed on the Christian imagination, you will find
            Christ at the heart of literature in the most unexpected ways.
          </p>
        </div>
      </section>
      <section className="main__fraternity">
        <h2 className="main__fraternity-subtitle">Literary fraternity</h2>
        <p className="main__fraternity-text">
          In the adventurous pursuit of the true, good, and beautiful, you will
          be joined by men just like yourself.
        </p>
        <button className="main__act-button" type="button">
          JOIN TODAY
        </button>
      </section>
      <section className="main__page-route">
        Check out this year's line-up <span>&gt;&gt;</span>
      </section>
      <section className="main__wisdom-virtue">
        <h2 className="main__wisdom-virtue-subtitle">Wisdom and virtue</h2>
        <p className="main__wisdom-virtue-text">
          Learn from our literary forefathers what truly makes for an exemplary
          man, one who has put on the armor of wisdom and armed himself with
          virtue.
        </p>
      </section>
      <section className="main__page-route">
        Want to learn more? <span>&gt;&gt;</span>
      </section>
      <section className="main__take-and-read">
        <h2 className="main__take-and-read-subtitle">Tolle lege!</h2>
        <p className="main__take-and-read-text">
          Take up and read the good books of the Western Canon that have been
          passed down as part of our Western and Christian heritage.
        </p>
        <button className="main__act-button" type="button">
          JOIN TODAY
        </button>
      </section>
    </div>
  );
}

export default Main;
