import { useState, useEffect } from "react";
import Grid from "./components/Grid/Grid";
import { MyContext } from "./MyContext";

const App = () => {
  const [contextSpacing, setContextSpacing] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <MyContext.Provider
        value={{
          itemSpacing: { contextSpacing, setContextSpacing },
          screenWidth: { width, setWidth },
        }}
      >
        <Grid spacing={2} container />
      </MyContext.Provider>
    </div>
  );
};

export default App;
