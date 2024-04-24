/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { MyContext } from "../../MyContext";
import Item from "../Item/Item";
import "./Grid.css";

const Grid = ({ spacing, container = false }) => {
  const { itemSpacing } = useContext(MyContext);
  const { setContextSpacing } = itemSpacing;

  useEffect(() => {
    setContextSpacing(spacing);
  }, [spacing, setContextSpacing]);

  return (
    <div className="main">
      <div style={container ? { display: "flex" } : {}}>
        <Item xs={4} md={9} lg={1} />
        <Item xs={8} md={3} lg={1} />
      </div>
      <div style={container ? { display: "flex" } : {}}>
        <Item xs={8} md={3} lg={1} />
        <Item xs={4} md={9} lg={1} />
      </div>
    </div>
  );
};

export default Grid;
