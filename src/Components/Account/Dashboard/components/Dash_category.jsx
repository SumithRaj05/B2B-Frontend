import React, { useState, useRef, useEffect } from "react";
import '../Dashboard.css'

const Dash_category = ({ highlightButton }) => {
  const categories = [
    "all",
    "Agri products & Equipments",
    "Apparel & Fashion",
    "Automobile Spares & parts",
    "Bags and Luggage",
    "Beauty, Cosmetics & Care",
    "Books, Stationery & Office supplies",
    "Chemicals, dyes & solvents",
    "Construction supplies",
    "Electricals & lights",
    "Electronics & Computers",
    "Footwear",
    "Furniture & Interior Decorative",
    "Hardware & paints",
    "Home & kitchen appliances",
    "Industrial equipments",
    "Tiles & Ceramics"
  ];

  const links = [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#"
  ];

  // Add image sources array
  const imageSources = [
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "category-img/agri-pump.png",
    "category-img/t-shirt.png",
    "category-img/automobile.png",
    "category-img/luggage.png",
    "category-img/cosmetics .png",
    "category-img/stationary.png",
    "category-img/chemicals.png",
    "category-img/construction.png",
    "category-img/electrical.png",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "category-img/footware.png",
    "category-img/furniture.png",
    "category-img/hardware.png",
    "category-img/appliances.png",
    "category-img/equipment.png",
    "category-img/tiles.png",
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const scrl = useRef();

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  useEffect(() => {
    if (
      scrl.current &&
      scrl.current.scrollWidth === scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  const scrollCheck = () => {
    setScrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryItems = categories.map((category, index) => (
    <div key={category + index} style={{ marginRight: "20px" }}>
      <a
        // href={links[index]}
        style={{
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          borderBottom:
            selectedCategory === category ? "2px solid blue" : "none"
        }}
        onClick={() => {
          handleCategoryClick(category)
          highlightButton(category)
        }}
      >
        <img
          href={links[index]}
          src={imageSources[index]}
          alt=""
          style={{ height: "60px", width: "auto" }}
          onClick={() => handleImageClick(category)}
        />
        <p>{category}</p>
      </a>
    </div>
  ));

  return (
    <div className="App">
      <div className="cargy-scroll-style">
        <button className="prev s-button" onClick={() => slide(-150)}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <ul
          className="s-ul"
          ref={scrl}
          // onClick={(e) => highlightButton(e.target)}
          onScroll={scrollCheck}
          style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
        >
          {categoryItems}
        </ul>
        <button className="next s-button" onClick={() => slide(150)}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
};

export default Dash_category
