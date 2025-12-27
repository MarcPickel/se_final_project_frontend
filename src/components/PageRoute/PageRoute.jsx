import "./PageRoute.css";

function PageRoute({ text }) {
  return (
    <section className="page-route">
      <p className="page-route__text">{text}</p>
      <span className="page-route__arrows">&gt;&gt;</span>
    </section>
  );
}

export default PageRoute;
