import { CDN_URL } from "../assets/constants";
const Restaurant = (props) => {
  const { resName, cuisine, rating, time } = props;

  return (
    <div className="restaurant">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/6e459adbdfed0210fd9bc118d5c46b8a" />
      <div className="restaurant-details">
        <h3>{resName}</h3>
        <p>{rating}</p>
        <p>{cuisine}</p>
        <p>{time}</p>
      </div>
    </div>
  );
};
export default Restaurant;
