import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverBgColor = "hover:bg-blue-600",
  padding = "px-4 py-2",
  rounded = "rounded",
  className = "",
}) {
  return (
    <button
      className={`px-4 py-2 cursor-hover ${bgColor} 
      ${type}
       ${textColor}
       ${padding}
         ${rounded}
       ${hoverBgColor} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
