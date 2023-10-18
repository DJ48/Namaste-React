import React from "react";
import ReactDom from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

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
