import React, { useEffect } from "react";
import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import banner from "../../assets/shop-images/clothes-banner.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllClothes } from "../../Clothes/clothesSlice";
import Product from "../../components/Product/Product";

const HomePage = () => {
  const { isError, isLoading, products, errorMessage } = useSelector(
    (state) => state.clothes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
    }
    dispatch(getAllClothes());
  }, [isError, errorMessage, dispatch]);

  return (
    <>
      <Navbar />
      <div className="home-page">
        <section className="home-banner">
          <img src={banner} alt="banner image" />
        </section>
        <section className="home-products">
          <h1>All Products</h1>
          <div className="products-container">
            {isLoading ? (
              <h1>Loading</h1>
            ) : (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
