import React from 'react';

export default function FeatureRow({ feature }) {
  const renderValue = (val) => {
    if (val === true) return <span className="text-green text-xl font-bold">✓</span>;
    if (val === false) return <span className="text-white/20">—</span>;
    return <span className="text-white/90 text-sm font-medium">{val}</span>;
  };

  return (
    <div className="grid grid-cols-6 border-b border-navy-soft py-4 items-center hover:bg-navy-mid/50 transition-colors">
      <div className="col-span-2 font-medium text-white/80 pr-4 pl-4">{feature.name}</div>
      <div className="text-center">{renderValue(feature.free)}</div>
      <div className="text-center">{renderValue(feature.starter)}</div>
      <div className="text-center bg-navy-soft py-4 -my-4">{renderValue(feature.growth)}</div>
      <div className="text-center">{renderValue(feature.business)}</div>
      <div className="text-center">{renderValue(feature.enterprise)}</div>
    </div>
  );
}
