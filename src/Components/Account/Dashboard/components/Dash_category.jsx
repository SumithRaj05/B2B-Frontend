import React, { useState, useRef, useEffect } from "react";

const Dash_category = ({ highlightButton }) => {
  const categories = [
    "all",
    "agri products & equipments",
    "apparel and fashion",
    "architects & interior designing",
    "automobile parts & spares",
    "chemicals,dyes & solvents",
    "construction & real estate",
    "consumer electronics",
    "electricals & electronics",
    "energy and power"
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
    "#"
  ];

  // Add image sources array
  const imageSources = [
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  ];

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

  const categoryItems = categories.map((category, index) => (
    <div key={category + index} style={{ marginRight: "20px" }}>
      <a href={links[index]} style={{ textDecoration: "none", display: "flex", flexDirection: "column" , alignItems:"center" }}>
        <img src={imageSources[index]} alt="" style={{ height: "auto", width: "80px" }} />
        <p>{category}</p>
      </a>
    </div>
  ));

  return (
    <div className="App">
      <div className="cargy-scroll-style">
        <button className="prev s-button" onClick={() => slide(-800)}>
          <span class="material-symbols-outlined">
chevron_left
</span>
        </button>
        <ul className="s-ul" ref={scrl} onClick={(e) => highlightButton(e.target)} onScroll={scrollCheck} style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
          {categoryItems}
        </ul>
        <button className="next s-button" onClick={() => slide(800)}>
          <span class="material-symbols-outlined">
chevron_right
</span>
        </button>
      </div>
    </div>
  );
};

export default Dash_category;