import Card from "./Card";
import Slider from "./slider";
import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyFooter from "./Footer";
const Utilites = () => {
  return (
    <div>
      <div className="">
        <Header />
        <Slider />
      </div>
      <Card />
      <StickyFooter />
    </div>
  );
};

export default Utilites;
