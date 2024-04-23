/* eslint-disable react/prop-types */

import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../MyContext";
import "./Item.css";

// eslint-disable-next-line no-unused-vars
const Item = ({ xs = 0, sm = 0, md = 0, lg = 0, name }) => {
  const { itemSpacing } = useContext(MyContext);
  const { contextSpacing } = itemSpacing;

  const { screenWidth } = useContext(MyContext);
  const { width } = screenWidth;

  const [growValue, setGrowValue] = useState(1);

  useEffect(() => {
    if (width > 1200 && lg > 0) {
      setGrowValue(lg);
    } else if (width >= 992 && md > 0) {
      setGrowValue(md);
    } else if (width >= 768 && sm > 0) {
      setGrowValue(sm);
    } else if (width > 0 && xs > 0) {
      setGrowValue(xs);
    }
  }, [width, xs, sm, md, lg]);

  return (
    <div
      className="item"
      style={{
        margin: `${contextSpacing * 10}px`,
        flexGrow: growValue,
      }}
    >
      {xs ? `xs=${xs} `: ""}
      {sm ? `sm=${sm} ` : ""}
      {md ? `md=${md} ` : ""}
      {lg ? `lg=${lg}` : ""}
    </div>
  );
};

export default Item;
