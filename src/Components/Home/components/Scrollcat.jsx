import React, { useState, useRef, useEffect } from "react";
import Tag from "./Tag"; // Importing the Component
import data from "./category.json";
import './Scrollcat.css'

const Scrollcat = () => {
  const [scrollX, setScrollX] = useState(0); // For detecting start scroll position
  const [scrollEnd, setScrollEnd] = useState(false); // For detecting end of scrolling
  const scrl = useRef();

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    // For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  // Check width of the scrollings
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

  // This will check scroll event and checks for scroll end
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

  return (
	<>
	<div className="s-head">
		<p>All Categories</p>
	</div>
    <div className="s-App">
      {scrollX !== 0 && (
        <button className="prev s-button material-symbols-outlined-arrow" onClick={() => slide(-800)}>
          <span className="material-symbols-outlined material-symbols-outlined-arrow ">
chevron_left
</span>
        </button>
      )}
      <ul className="s-ul" ref={scrl} onScroll={scrollCheck}>
        {data.fruits.map((d, i) => (
          <Tag key={i} data={d} />
        ))}
      </ul>
      {!scrollEnd && (
        <button className="next s-button material-symbols-outlined-arrow" onClick={() => slide(800)}>
          <span className="material-symbols-outlined">
chevron_right
</span>
        </button>
      )}
    </div>
	
	</>
  );
};

export default Scrollcat;
