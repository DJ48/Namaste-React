import React from "react";
import ReactDom from "react-dom/client";
import _ from "lodash";

/**
 *  Header
 *    - Logo
 *    - Nav Items
 *  Body
 *    - Search Bar
 *    - Resturant Container
 *      - Resturant Card
 *        - Image
 *        - Name of resturant
 *        - Cuisines
 *        - Delivery Time
 *        - Price
 *  Footer
 *    - Copyright
 *    - Links
 *    - Info
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resData = [
  {
    type: "restaurant",
    info: {
      resId: 9947,
      name: "McDonald's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/7/9947/47d96dea1966f978c8e9c7331c649194_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.1",
        rating_text: "4.1",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "4,093",
        subtext: "REVIEWS",
        is_new: false,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
    },
    order: {
      deliveryTime: "19 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/mcdonalds-1-connaught-place-new-delhi/order",
      },
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 20424478,
      name: "Domino's Pizza",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/3/143/46ab03171d9eec9cc24d2067569ef485_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.9",
        rating_text: "3.9",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "450",
        subtext: "REVIEWS",
        is_new: false,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/pizza/",
          name: "Pizza",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
      ],
    },
    order: {
      deliveryTime: "25 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/dominos-pizza-4-connaught-place-new-delhi/order",
      },
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 931,
      name: "KFC",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/1/931/fe824c9c285a7da8961df29a0b80d67f_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.7",
        rating_text: "3.7",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "6,115",
        subtext: "REVIEWS",
        is_new: false,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/biryani/",
          name: "Biryani",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
    },
    order: {
      deliveryTime: "14 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/kfc-connaught-place-new-delhi/order",
      },
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 310448,
      name: "Burger King",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/8/310078/749216f498eb2ed21ffd317f4bdc8a1d_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "4.0",
        rating_text: "4.0",
        rating_subtitle: "Very Good",
        rating_color: "5BA829",
        votes: "22.2K",
        subtext: "REVIEWS",
        is_new: false,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/burger/",
          name: "Burger",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/desserts/",
          name: "Desserts",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/shake/",
          name: "Shake",
        },
      ],
    },
    order: {
      deliveryTime: "25 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/burger-king-connaught-place-new-delhi/order",
      },
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 18492044,
      name: "Subway",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/7/147/ed4eb483c1254b6c6198dff3dceac86e_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "5,959",
        subtext: "REVIEWS",
        is_new: false,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/health-food/",
          name: "Healthy Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/sandwich/",
          name: "Sandwich",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/fast-food/",
          name: "Fast Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyNFwiXX0iXQ%3D%3D",
          url: "https://www.zomato.com/ncr/restaurants/wraps/",
          name: "Wraps",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/salad/",
          name: "Salad",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
      ],
    },
    order: {
      deliveryTime: "16 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/subway-1-connaught-place-new-delhi/order",
      },
    },
  },
  {
    type: "restaurant",
    info: {
      resId: 19677790,
      name: "Haldiram's",
      image: {
        url: "https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg",
      },
      rating: {
        has_fake_reviews: 0,
        aggregate_rating: "3.6",
        rating_text: "3.6",
        rating_subtitle: "Good",
        rating_color: "9ACD32",
        votes: "2,375",
        subtext: "REVIEWS",
        is_new: false,
      },
      cuisine: [
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/south-indian/",
          name: "South Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/north-indian/",
          name: "North Indian",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/street-food/",
          name: "Street Food",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          url: "https://www.zomato.com/ncr/restaurants/chinese/",
          name: "Chinese",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/beverages/",
          name: "Beverages",
        },
        {
          deeplink:
            "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          url: "https://www.zomato.com/ncr/restaurants/desserts/",
          name: "Desserts",
        },
      ],
    },
    order: {
      deliveryTime: "33 min",
      isServiceable: true,
      hasOnlineOrdering: true,
      actionInfo: {
        text: "Order Now",
        clickUrl: "/ncr/haldirams-janpath-new-delhi/order",
      },
    },
  },
];

const ResturantCard = (resData) => {
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

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resData.map((each) => (
          <ResturantCard data={each} key={each.info.resId} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
