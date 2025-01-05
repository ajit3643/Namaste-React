import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header -----> Logo, navitems
 * Body----> Search component, List of items
 *
 * Footer----> Copy right
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Restaurant = (props) => {
  const { resName, cuisine, rating, time } = props;

  return (
    <div className="restaurant">
      <img src="https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg" />
      <div className="restaurant-details">
        <h3>{resName}</h3>
        <p>{rating}</p>
        <p>{cuisine}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurant" />
        <button>Search</button>
      </div>

      <div className="restaurant-container">
        <Restaurant
          resName="Chinese Wok"
          cuisine="Chinese, Asian, Desserts"
          rating="⭐⭐⭐⭐"
          time="30 min"
        />
        <Restaurant
          resName="KFC"
          cuisine="Chicken, Asian, Desserts"
          rating="⭐⭐⭐⭐⭐"
          time="45 min"
        />
        <Restaurant
          resName="Well Food"
          cuisine="Chicken, Asian, Desserts, North-Indian"
          rating="⭐⭐⭐⭐"
          time="35 min"
        />
        <Restaurant
          resName="Hungry Hope"
          cuisine="North-Indian, Asian, Chinese, Fast-Food"
          rating="⭐⭐⭐⭐⭐"
          time="45 min"
        />
        <Restaurant
          resName="Burger King"
          cuisine="Burger, Fast-Food, Soft Drink"
          rating="⭐⭐⭐⭐⭐"
          time="40 min"
        />
        <Restaurant
          resName="Sub Way"
          cuisine="Burger, Fast-Food, Soft Drink"
          rating="⭐⭐⭐"
          time="1 hr"
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
