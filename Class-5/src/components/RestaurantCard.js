import _ from "lodash";

const RestaurantCard = (resData) => {
  const props = resData.data;
  const name = props.info.name;
  const imageUrl = props.info.image.url;
  const rating = props.info.rating.rating_text;
  const cuisine = _.map(props.info.cuisine, "name").join(", ");
  const deliveryTime = props.order.deliveryTime;
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
