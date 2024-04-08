import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <Container>
        <Row className='mt-5'>
          <Col md={12}><h4>Try New Cuisines</h4></Col>
          {cuisines.map(cuisine=> (
              <Col md={3}><ItemCard itemName="cuisine" item={cuisine}/></Col>
         ))}
        </Row>
        <Row className='mt-5'>
          <Col md={12}><h4>Get inspiration for your order</h4></Col>
          {categories.map(category=> (
              <Col md={3}><ItemCard itemName="category" item={category}/></Col>
         ))}
        </Row>
        <Row className='mt-5'>
          <Col md={12}><h4>Available Restaurants</h4></Col>
          {restaurants.map(restaurant=> (
              <Col md={3}><ItemCard itemName="restaurant" item={restaurant}/></Col>
         ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
