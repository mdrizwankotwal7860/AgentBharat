import React from 'react';

export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
  const baseStyle = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer";
  
  const variants = {
    primary: "bg-cyan text-navy hover:bg-[#00cce6] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]",
    secondary: "bg-navy-soft text-white hover:bg-navy-mid border border-navy-soft hover:border-cyan/30",
    outline: "border-2 border-cyan text-cyan hover:bg-cyan/10",
    danger: "bg-red text-white hover:bg-[#e63956]"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
