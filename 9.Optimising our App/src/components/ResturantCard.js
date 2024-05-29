import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3> {resData.info.name} </h3>
      <h4> {resData.receipe}</h4>
      <h4> {resData.info.avgRating} ⭐️</h4>{" "}
      <h4> {resData.info.sla.deliveryTime} min⏰ </h4>
      <h4> {resData.info.costForTwo}💰 </h4>{" "}
    </div>
  );
};

export default RestaurantCard;
