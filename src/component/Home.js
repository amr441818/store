import Slider from "./Slider";
import GALLARY from "./Gallary";

import Footer from "./Footer";

function Home(props) {
  return (
    <>
      {props.allBroducts.length <= 0 ? (
        <div className="cont">
          <div className="spinner-border center text-danger" role="status">
            <span className="spin center sr-only"></span>
          </div>
        </div>
      ) : (
        <>
          <Slider />
          <GALLARY allBroducts={props.allBroducts} />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
