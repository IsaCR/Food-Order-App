import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurants } from "../actions/restaurantActions";
import AlertMessage from "../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";


const Restaurants = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const listOfRestaurants = useSelector((state) => state.restaurantList);
    const userLogin = useSelector((state) => state.login);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
          dispatch(listRestaurants());
        } else {
          navigate("/login");
        }
      },[dispatch])

    return (
        <Container>
            {listOfRestaurants.loading && <Spinner animation="grow" />}
            {listOfRestaurants.success && listOfRestaurants.restaurants.length === 0 && (
                <AlertMessage variant="info" message="No restaurants to display" />
            )}
            {listOfRestaurants.restaurants && (
                <div className="container-fluid">
                <h4>Available restaurants</h4>
                <Row className="g-4">
                    {listOfRestaurants.restaurants.map((restaurant) => (
                    <Col key={restaurant.id} md={6} sm={12} lg={4}>
                        <ItemCard item={restaurant} itemName="restaurant" />
                    </Col>
                    ))}
                </Row>
                </div>
            )}
        </Container>
    )
}

export default Restaurants;