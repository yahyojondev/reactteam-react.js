import React, { memo, useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import TimerBox from "../../components/timerBox/TimerBox";
import Product from "../../components/product/Product";
import axios from "../../api";
import MainCategory from "../../components/mainCategory/MainCategory";
import HomeCollection from "../../components/homeCollection/HomeCollection";
import { homeIconsproducts } from "../../static/Router";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let homeicoonsitems = homeIconsproducts?.map((el) => (
    <div key={el.id} className="home__box">
      <img src={el.img} alt="" />
      <h4>{el.title}</h4>
      <p>{el.text}</p>
    </div>
  ));

  return (
    <div>
      <br />
      <br />
      <br />
      <Hero />
      {/* <br /> */}
      <div className="main__product">
        <Product
          time="Today's"
          title="Flash Sales"
          button="View All"
          data={data?.slice(5, 10)}
        />
      </div>
      <MainCategory />
      <div className="main__product">
        <Product
          time="This Month"
          title="Best Selling Products"
          button="View All"
          data={data?.slice(10, 15)}
        />
      </div>
      <br />
      <br />
      <TimerBox />
      <div className="main__product">
        <Product
          time="Our Products"
          title="Explore Our Products"
          button="View All"
          data={data?.slice(14, 24)}
        />
      </div>
      <br />
      <br />
      <div className="main__product">
        <Product time="Featured" title="New Arrival" button="View All" />
      </div>
      <HomeCollection />
      <div className="container">
        <div className="homeBoxs">{homeicoonsitems}</div>
      </div>
      <br />
    </div>
  );
};

export default memo(Home);
