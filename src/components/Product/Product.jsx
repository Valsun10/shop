import React from "react";
import "./Product.scss";
import starIMG from "../../assets/shop-images/star.png";
import favourite from "../../assets/navbar-images/fullheart.png";

const Product = ({ product }) => {
  const { title, price, rating, images } = product;
  return (
    <div className="product">
      <img src={images[0]} alt="product" />
      <div className="product-content">
        <h1>{title}</h1>
        <div className="product-details">
          <div className="left-details">
            <p>{price} $</p>
            <p className="rate">
              {rating}
              <span>
                <img src={starIMG} alt="rate" style={{ height: "22px" }} />
              </span>
            </p>
          </div>
          <div className="right-details">
            <button>Add to favourite</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
