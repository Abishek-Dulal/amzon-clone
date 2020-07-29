import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

export default function() {
  let [{ basket }] = useStateValue();

  return (
    <nav className="header">
      {/* a logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      {/* search*/}
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* 1 Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        {/* 2 Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>
        {/* 1 Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 1 Link */}

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* spoping basket icon */}
            <ShoppingBasketIcon />
            <span
              className="header__optionLineTwo 
            header__basketCount
            "
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      {/* 3 link */}
      {/*a basket */}
    </nav>
  );
}
