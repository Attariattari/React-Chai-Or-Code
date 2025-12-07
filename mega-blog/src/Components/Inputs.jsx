import React, { useId } from "react";

const Inputs = React.forwardRef(function Input(
  { label, type = "text", placeholder, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 pl-1 font-medium">
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props} // register yahan se saari cheeze inject karega, include name
      />
    </div>
  );
});

export default Inputs;
