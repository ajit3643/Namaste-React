import Restaurant from "./Restaurant";
import "./style.css";
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
export default Body;
