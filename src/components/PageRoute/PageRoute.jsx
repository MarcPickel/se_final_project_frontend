import "./PageRoute.css";

import { NavLink } from "react-router-dom";

function PageRoute({ text, route }) {
  return (
    <NavLink to={route}>
      <section className="page-route">
        <p className="page-route__text">{text}</p>
        <span className="page-route__arrows">&gt;&gt;</span>
      </section>
    </NavLink>
  );
}

export default PageRoute;
