import "./Main.css";
import Banner from "../Banner/Banner.jsx";
import Introduction from "../Introduction/Introduction.jsx";
import CristoCentric from "../CristoCentric/CristoCentric.jsx";
import Fraternity from "../Fraternity/Fraternity.jsx";
import WisdomVirtue from "../WisdomVirtue/WisdomVirtue.jsx";
import TakeAndRead from "../TakeAndRead/TakeAndRead.jsx";
import PageRoute from "../PageRoute/PageRoute.jsx";

function Main({ onSignUpClick }) {
  return (
    <div className="main">
      <Banner onSignUpClick={onSignUpClick} />
      <Introduction onSignUpClick={onSignUpClick} />
      <PageRoute text={"Start searching for good books"} route={"/library"} />
      <CristoCentric />
      <PageRoute text={"Learn about warrior poets"} route={"/warriorpoet"} />
      <Fraternity onSignUpClick={onSignUpClick} />
      <PageRoute text={"Check out this year's line-up"} route={"/thisyears"} />
      <WisdomVirtue />
      <PageRoute text={"Want to learn more?"} route={"/about"} />
      <TakeAndRead onSignUpClick={onSignUpClick} />
    </div>
  );
}

export default Main;
