import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function(props) {
  let { id, title, price, rating, image } = props;

  let [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        price,
        rating,
        image
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, id) => {
              return <p key={id}>&#9733;</p>;
            })}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
