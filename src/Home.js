import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img className="home-image" src={"images/banner.jpg"} alt="" />
        <div className="home-row">
          <Product
            title="Sofa (Green)"
            price={15000}
            image={"images/green-sofa.jpg"}
            rating={4}
          />
          <Product
            title="Sofa (White)"
            price={17499}
            image={"images/white-sofa.jpg"}
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            title="Chair (White)"
            price={5000}
            image={"images/white-chair.jpg"}
            rating={2}
          />
          <Product
            title="Chair (Black)"
            price={6000}
            image={"images/black-chair.jpg"}
            rating={3}
          />
          <Product
            title="Sofa (White)"
            price={19000}
            image={"images/half-sofa.jpg"}
            rating={5}
          />
        </div>

        <div className="home-row">
          <Product
            title="Table (Maple)"
            price={9000}
            image={"images/wall-table.jpg"}
            rating={4}
          />
          <Product
            title="Sofa (Gray)"
            price={14000}
            image={"images/grey-sofa.jpg"}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
