import React from "react";
import { Row, Container } from "react-bootstrap";
import ProductCarouselComponent from "../../components/productCarousel/ProductCarouselComponent.js";
import CategoryCardComponent from "../../components/CategoryCard/CategoryCardComponent.js";

function HomePage() {
  const categories = [
    "Dairy products",
    "Olive oil",
    "Zaatar",
    "Jam",
    "Torshi",
    "Olive oil",
    "Honey",
    "Zaatar",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-5 mt-2   ">
          {categories.map((category, idx) => (
            <div className="col d-flex justify-content-center" key={idx}>
              <CategoryCardComponent key={idx} category={category} idx={idx} />
            </div>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
