import "./Preloader.css";

function Preloader() {
  return (
    <div className="circle-preloader__container">
      <div className="circle-preloader"></div>
      <p className="circle-preloader__text">Searching for books...</p>
    </div>
  );
}

export default Preloader;
