import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className=" flex bg-gray-200 mx-8 w-96 h-300 my-8 rounded hover:bg-pink-300 hover:text-white items-center">
      <img
        className="w-40 h-25 p-5 rounded"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <div className="">
        <h2 className="text-2xl italic"> {resData.info.name} </h2>
        <h4> {resData.receipe}</h4>
        <h4> {resData.info.avgRating} ⭐️</h4>{" "}
        <h4> {resData.info.sla.deliveryTime} min⏰ </h4>
        <h4> {resData.info.costForTwo}💰 </h4>{" "}
      </div>
    </div>
  );
};

export default RestaurantCard;
