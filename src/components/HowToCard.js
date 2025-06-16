// src/components/HowToCard.js
import React from 'react';

export default function HowToCard({ title, children, className = '' }) {
  return (
    <div className={`howto-card ${className}`}>
      <h2 className="howto-title">{title}</h2>
      <div className="howto-content">{children}</div>
    </div>
  );
}
