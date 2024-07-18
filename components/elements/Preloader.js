export default function Preloader() {
  return (
    <>
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="C" className="letters-loading">
              C
            </span>
            <span data-text-preloader="S" className="letters-loading">
              S
            </span>
            <span data-text-preloader="E" className="letters-loading">
              E
            </span>
            <span data-text-preloader="P" className="letters-loading">
              P
            </span>
            <span data-text-preloader="F" className="letters-loading">
              F
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
