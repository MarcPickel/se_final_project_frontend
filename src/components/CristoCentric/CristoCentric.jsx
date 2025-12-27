import "./CristoCentric.css";

import lamb from "../../assets/behold-the-lamb-of-god.jpg";

function CristoCentric() {
  return (
    <section className="christo-centric">
      <div className="christo-centric-content">
        <img className="christo-centric__image" src={lamb} alt="Lamb of God" />
        <h2 className="christo-centric__subtitle">
          Christo-centric imagination
        </h2>
        <p className="christo-centric__text">
          With an emphasis placed on the Christian imagination, you will find
          Christ at the heart of literature in the most unexpected ways.
        </p>
      </div>
    </section>
  );
}

export default CristoCentric;
