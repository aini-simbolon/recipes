import React from "react";

export default function TextField({ error, placeholder, name, onChange, value, type="text" }) 
 { 



  return (
    <div className="mb-4">
      <input
        type={ type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
          value={value ?? ""}
        className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-gray-100"
      />
     
     {error && (
        <div className="text-xs mt-1 text-red-600"> 
          {error}
        </div>
     )}
    </div>
  );
}

   

