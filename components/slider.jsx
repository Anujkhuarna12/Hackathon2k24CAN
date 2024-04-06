import React from "react";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";

const Home = ({ banner }) => {
  return (
    <div class="sliders">
      <Carousel>
        {banner.map((item) => (
          <Carousel.Item>
            <a href={item.bannerLink}>
              <img src={item.bannerImg} alt="" />
            </a>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item>
          <a href="https://google.com" >
            <img src={img1} alt="" /></a>

        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="" />

        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="" />

        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};
export default Home;

