import { RES_IMAGE_URL } from "../utills/Constants";
const RestaurantCard = (resData) => {
  console.log(resData.data);
  const props = resData.data;
  const name = props.info.name;
  const imageUrl = RES_IMAGE_URL + props.info.cloudinaryImageId;
  const rating = props.info.avgRating;
  const cuisine = props.info.cuisines.join(", ");
  const deliveryTime = props.info.sla.deliveryTime + " min";
  return (
    <div className="res-card">
      <img className="res-img" src={imageUrl}></img>
      <h3>{name}</h3>
      <h4>{deliveryTime}</h4>
      <h4>{rating}</h4>
      <h5>{cuisine}</h5>
    </div>
  );
};

export default RestaurantCard;
