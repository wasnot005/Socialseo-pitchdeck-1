import React from "react";

export const Card = ({ title, children, className = "" }) => (
  <div
    className={`bg-black/20 backdrop-blur-2xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg ${className}`}
  >
    {title && <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>}
    {children}
  </div>
);

export default Card;
