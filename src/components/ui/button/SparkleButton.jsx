// SparkleButton.jsx
import React from "react";
import "./module.css"; // 我们会将CSS提取到单独的文件中

const SparkleButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <div className={`sparkle-button ${className}`}>
      <button className="sparkle-button-element" onClick={onClick} {...props}>
        <svg
          className="sparkle"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
        <span className="text">{children}</span>
      </button>
      <div className="particle-pen">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              "--x": Math.random() * 100,
              "--y": Math.random() * 100,
              "--size": Math.random() * 0.5 + 0.25,
              "--alpha": Math.random() * 0.5 + 0.5,
              "--duration": Math.random() * 2 + 1,
              "--delay": Math.random() * 2,
              "--origin-x": Math.random() * 2000,
              "--origin-y": Math.random() * 2000,
            }}
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SparkleButton;
