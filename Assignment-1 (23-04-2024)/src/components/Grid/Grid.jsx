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
        <Item xs={4} md={10} lg={1} name={"Item 1"} />
        <Item xs={8} md={2} lg={1} name={"Item 2"} />
      </div>
      <div style={container ? { display: "flex" } : {}}>
        <Item xs={8} md={2} lg={1} name={"Item 3"} />
        <Item xs={4} md={10} lg={1} name={"Item 4"} />
      </div>
    </div>
  );
};

export default Grid;
