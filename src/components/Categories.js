import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../actions/categoryActions";
import AlertMessage from "../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";


const Categories = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const categoryList = useSelector((state) => state.categoryList);
    const userLogin = useSelector((state) => state.login);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
          dispatch(listCategories());
        } else {
          navigate("/login");
        }
      },[dispatch])

    return (
        <Container>
            {categoryList.loading && <Spinner animation="grow" />}
            {categoryList.success && categoryList.categories.length === 0 && (
                <AlertMessage variant="info" message="No categories to display" />
            )}
            {categoryList.categories && (
                <div className="container-fluid">
                <h4>Available categories</h4>
                <Row className="g-4">
                    {categoryList.categories.map((category) => (
                    <Col key={category.id} md={6} sm={12} lg={4}>
                        <ItemCard item={category} itemName="category" />
                    </Col>
                    ))}
                </Row>
                </div>
            )}
        </Container>
    )
}

export default Categories;