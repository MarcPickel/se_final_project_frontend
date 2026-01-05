import "./Preloader.css";

function Preloader() {
  return (
    <div className="circle-preloader__container">
      <div className="circle-preloader"></div>
      <p className="circle-preloader__text">Searchings for books...</p>
    </div>
  );
}

export default Preloader;
