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

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurant" />
        <button>Search</button>
      </div>
      <Restaurant />
    </div>
  );
};

const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant">
        <img src="https://www.fryingpanadventures.com/wp-content/uploads/2020/10/image-137-scaled-e1604152201367.jpeg" />
        <div className="restaurant-details">
          <h3>Chinese Wok</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>Chinese, Asian, Desserts</p>
        </div>
      </div>
      <div className="restaurant">
        <img src="https://s7d1.scene7.com/is/image/mcdonaldsstage/DC_202307_8936_EVM_M_BigMac_Coke_1564x1564:product-header-mobile?wid=1313&hei=1313&dpr=off" />
        <div className="restaurant-details">
          <h3>McDonald's</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>American, Fast Food Kasturba Gandhi Marg</p>
        </div>
      </div>
      <div className="restaurant">
        <img src="https://www.usatoday.com/gcdn/authoring/authoring-images/2024/10/02/USAT/75489876007-chicken-big-mac-hero-image.jpg?crop=5622,4217,x0,y137" />
        <div className="restaurant-details">
          <h3>Louis Burger</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>Burger, Chinese, Fast Food, Beverages Laxmi Nagar</p>
        </div>
      </div>
      <div className="restaurant">
        <img src="https://www.mrwasabi.net/wp-content/uploads/2024/12/Burger-King-Menu-Specials-Today-With-Prices-768x439.jpg" />
        <div className="restaurant-details">
          <h3>Burger King</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>Burger, Chinese, Fast Food, Beverages Laxmi Nagar</p>
        </div>
      </div>
      <div className="restaurant">
        <img src="https://moha-mushkil.com/wp-content/uploads/2018/08/Chache-di-hatti-.jpg" />
        <div className="restaurant-details">
          <h3>Sub King</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>Burger, Chinese, Fast Food, Beverages Laxmi Nagar</p>
        </div>
      </div>
      <div className="restaurant">
        <img src="https://vanitascorner.com/wp-content/uploads/2018/10/Ulli-Karam-Dosa.jpg" />
        <div className="restaurant-details">
          <h3>Well-Food</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>Burger, Chinese, Fast Food, Beverages Laxmi Nagar</p>
        </div>
      </div>
      <div className="restaurant">
        <img src="https://b.zmtcdn.com/data/pictures/chains/6/246/0279cb06f7b0151a1da07ea593ba7fec_featured_v2.jpg" />
        <div className="restaurant-details">
          <h3>Pizza Hut</h3>
          <p>
            ⭐4.2 <span>🕒 20-30 min</span>
          </p>
          <p>Burger, Chinese, Fast Food, Beverages Laxmi Nagar</p>
        </div>
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
