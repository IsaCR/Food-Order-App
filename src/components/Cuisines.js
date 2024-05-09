import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { listCuisines } from "../actions/cuisineActions";
import AlertMessage from "../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";


const Cuisines = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cuisineList = useSelector((state) => state.cuisineList);
    const userLogin = useSelector((state) => state.login);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
          dispatch(listCuisines());
        } else {
          navigate("/login");
        }
      },[dispatch])

    return (
        <Container>
            {cuisineList.loading && <Spinner animation="grow" />}
            {cuisineList.success && cuisineList.cuisines.length === 0 && (
                <AlertMessage variant="info" message="No cuisines to display" />
            )}
            {cuisineList.cuisines && (
                <div className="container-fluid">
                <h4>Available cuisines</h4>
                <Row className="g-4">
                    {cuisineList.cuisines.map((cuisine) => (
                    <Col key={cuisine.id} md={6} sm={12} lg={4}>
                        <ItemCard item={cuisine} itemName="cuisine" />
                    </Col>
                    ))}
                </Row>
                </div>
            )}
        </Container>
    )
}

export default Cuisines;