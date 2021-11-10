import img1 from "../imgs/20.jpg";
import img2 from "../imgs/23.jpg";
import img3 from "../imgs/21.jpg";
import Carousel from "react-bootstrap/Carousel";
function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;
