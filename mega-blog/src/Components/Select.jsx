import React, { useId } from "react";

function Select({ label, name, options, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label ref={ref} htmlFor={id} className="block mb-1 pl-1 font-medium">
          {label}
        </label>
      )}
      <select
        id={id}
        name={name}
        className={`w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        {...props}
        ref={ref}
      >
        {options &&
          options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
