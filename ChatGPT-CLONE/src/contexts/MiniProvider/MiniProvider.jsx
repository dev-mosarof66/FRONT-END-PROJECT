import { useState } from "react";
import PropTypes from "prop-types";
import Context from "../Context";
export default function Provider({ children }) {
  const [value, setValue] = useState(false);
  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  );
}

Provider.propTypes = {
    children:{
        name:PropTypes.string.isRequired,
    }
}