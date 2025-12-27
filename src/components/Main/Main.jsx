import "./Main.css";
import Banner from "../Banner/Banner.jsx";
import Introduction from "../Introduction/Introduction.jsx";
import CristoCentric from "../CristoCentric/CristoCentric.jsx";
import Fraternity from "../Fraternity/Fraternity.jsx";
import WisdomVirtue from "../WisdomVirtue/WisdomVirtue.jsx";
import TakeAndRead from "../TakeAndRead/TakeAndRead.jsx";
import PageRoute from "../PageRoute/PageRoute.jsx";

function Main() {
  return (
    <div className="main">
      <Banner />
      <Introduction />
      <PageRoute text={"Start searching for good books"} />
      <CristoCentric />
      <PageRoute text={"Learn how to read good books like a warrior poet"} />
      <Fraternity />
      <PageRoute text={"Check out this year's line-up"} />
      <WisdomVirtue />
      <PageRoute text={"Want to learn more?"} />
      <TakeAndRead />
    </div>
  );
}

export default Main;
