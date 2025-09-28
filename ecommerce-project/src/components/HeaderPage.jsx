import { useState } from "react";
import "./HeaderPage.css";
import { Link, useNavigate, useSearchParams } from "react-router";
import headerImage from '../logo-logo.png';

export function HeaderPage({ cart }) {
  const navigate = useNavigate();
  // const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const searchText = searchParams.get("search");

  const [search, setSearch] = useState(searchText || "");

  const updateSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const searchProduct = () => {
    console.log(search);
    navigate(`/?search=${search}`);
  };

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/" className="header-link">
          <img className="logo" src={headerImage} />
          <img className="mobile-logo" src={headerImage}/>
        </Link>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearchInput}
        />

        <button className="search-button" onClick={searchProduct}>
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <Link className="orders-link header-link" to="/Orders">
          <span className="orders-text">Orders</span>
        </Link>

        <Link className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </Link>
      </div>
    </div>
  );
}
