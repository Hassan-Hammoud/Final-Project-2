import React from "react";
import { Carousel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./ProductCarouselComponent.css";
function ProductCarouselComponent() {
  const monueh = "MONUEH SHOP";

  const cursorP = {
    cursor: "pointer",
  };
  return (
    <Carousel className="carousel-container ">
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{
            height: "90vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>MONUEH SHOP</h3>
          </LinkContainer>
          <p>Your Place To Buy Handmade Products From the Mountain Village</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: "90vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>{monueh}</h3>
          </LinkContainer>
          <p>
            Shop At Your Convenience And Choose The Most Delicious Organic Food
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{
            height: "90vh",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
          src="/images/Carousel/pexels-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>{monueh}</h3>
          </LinkContainer>
          <p>
            For Nature Lovers and Who Enjoy Hiking, Camping, And Other Outdoor
            Activities
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent;
