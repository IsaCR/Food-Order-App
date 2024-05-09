import React, { useEffect } from "react";
import Categories from "../../components/Categories";
import Restaurants from "../../components/Restaurants";
import Cuisines from "../../components/Cuisines";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    } else {
      navigate("/login");
    }
  },[dispatch])

  return (
    <>
    <Categories/>
    <Restaurants/>
    <Cuisines/>
    </>
  );
};

export default HomePage;
