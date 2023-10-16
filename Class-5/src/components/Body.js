import resData from "../utills/MockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resData);

  const handleSearch = (event) => {
    const filteredList = restaurantList.filter((restaurant) =>
      restaurant.info.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setRestaurantList(filteredList);
  };
  return (
    <div className="body">
      <div className="Filter">
        <button
          onClick={() => {
            const filterList = restaurantList.filter(
              (each) => each.info.rating.aggregate_rating > 4
            );
            setRestaurantList(filterList);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      <div className="Search">
        <input
          name="search"
          type="text"
          placeholder="Search restaurant"
          onChange={handleSearch}
        />
      </div>
      <div className="res-container">
        {restaurantList.map((each) => (
          <RestaurantCard data={each} key={each.info.resId} />
        ))}
      </div>
    </div>
  );
};

export default Body;
