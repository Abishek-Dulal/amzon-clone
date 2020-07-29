import React from "react";
import "./Home.css";
import Product from "./Product";

export default function() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://raw.githubusercontent.com/Balarubinan/Amazon-Clone/master/src/images/amazon-banner.jpg"
        alt="cat"
      />

      <div className="home__row">
        <Product
          id="12312"
          title="the lean startup"
          price={12.23}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y2dfI6K1L._AC_SX466_.jpg"
        />
        <Product
          id="12312"
          title="the lean startup"
          price={12.23}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y2dfI6K1L._AC_SX466_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12312"
          title="the lean startup"
          price={12.23}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y2dfI6K1L._AC_SX466_.jpg"
        />
        <Product
          id="12312"
          title="the lean startup"
          price={12.23}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y2dfI6K1L._AC_SX466_.jpg"
        />
        <Product
          id="12312"
          title="the lean startup"
          price={12.23}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41Y2dfI6K1L._AC_SX466_.jpg"
        />
      </div>
    </div>
  );
}
