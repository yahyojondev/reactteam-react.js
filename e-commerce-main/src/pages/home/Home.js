import React, { memo, useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import TimerBox from "../../components/timerBox/TimerBox";
import Product from "../../components/product/Product";
import axios from "../../api";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <Hero />
      <br />
      <Product
        time="This Month"
        title="Best Selling Products"
        button="View All"
        data={data}
      />
      <br />
      <br />
      <TimerBox />
      <br />
      <br />
      <br />
    </div>
  );
};

export default memo(Home);
