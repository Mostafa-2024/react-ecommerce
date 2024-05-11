import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"
import img1 from "../../assets/images/jbl660nc-1.png"
import img2 from "../../assets/images/boat131-3.png"
import img3 from "../../assets/images/sonyXb910n-1.png"
import { Container } from 'react-bootstrap';


function Slider() {

  return (

    <Container style={{height: "100vh", display:"flex",alignItems: "center"}}>

      <Carousel data-bs-theme="dark">

        <Carousel.Item>

          <div className="content">

          <div className="text">

            <div className="title">JBL Live 660NC</div>

            <div className="description">Keep The Noise Out, Or<br /> In. You Choose. </div>

            <span className="one">$9,999</span>

            <span className="two">$14,999</span>

            <button>Shop Now</button>

          </div>

            <img className="d-block w-100" src={img1} alt="First slide" />

          </div>

        </Carousel.Item>

        <Carousel.Item>

          <div className="content">

            <div className="text">

              <div className="title">boat Airdopes 131</div>

              <div className="description">Featherweight For<br /> Comfort All Day </div>

              <span className="one">$1,099</span>

              <span className="two">$2,990</span>

              <button>Shop Now</button>

            </div>

            <img className="d-block w-100" src={img2} alt="First slide" />

          </div>

        </Carousel.Item>

        <Carousel.Item>

          <div className="content">

          <div className="text">

            <div className="title">Sony WH-XB910N</div>

            <div className="description">Give Your Favorite<br /> Music A Boost</div>

            <span className="one">$13,489</span>

            <span className="two">$19,999</span>

            <button className="">Shop Now</button>

          </div>

            <img className="d-block w-100" src={img3} alt="First slide" />

          </div>

        </Carousel.Item>

      </Carousel>

    </Container>

  );
}

export default Slider;