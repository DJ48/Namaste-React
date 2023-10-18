import resData from "../utills/MockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurantList && restaurantList.length === 0) {
    return <Shimmer />;
  }

  const handleSearch = (event) => {
    const filteredList = restaurantList.filter((restaurant) =>
      restaurant.info.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilterList(filteredList);
  };
  return (
    <div className="body">
      <div className="Filter">
        <button
          onClick={() => {
            const filterList = restaurantList.filter(
              (each) => each.info.avgRating > 4
            );
            setFilterList(filterList);
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
        {filterList.map((each) => (
          <RestaurantCard data={each} key={each.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
