import React from "react";

const GradientText = ({ dark, light, text }) => {
  return (
    <span className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 bg-clip-text text-transparent">
      {text}
    </span>
  );
};

export default GradientText;
