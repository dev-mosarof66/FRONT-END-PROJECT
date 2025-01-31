/* eslint-disable react/prop-types */
import Context from "./Context";
import { useState } from "react";
import PropTypes from "prop-types";
const ContextProvider = ({ children }) => {
  const [MobileHeaderBar, setMoblieHeaderBar] = useState(false);
  const [tempChatEnabled, setTempChatEnabled] = useState(false);
  const [turnOnAccountBar, setTurnOnAccountBar] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <Context.Provider
      value={{
        MobileHeaderBar,
        setMoblieHeaderBar,
        tempChatEnabled,
        setTempChatEnabled,
        turnOnAccountBar,
        setTurnOnAccountBar,
        showSideBar,
        setShowSideBar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

ContextProvider.proptypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
