import React from 'react';

export const Shapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-60 dark:opacity-40 select-none">
      {/* Yellow Arc */}
      <svg
        className="absolute top-16 left-[10%] animate-float"
        width="36"
        height="38"
        viewBox="0 0 27 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z"
          fill="#FFD15C"
        />
      </svg>

      {/* Coral Red Circle Outline */}
      <svg
        className="absolute top-28 right-[12%] animate-float"
        style={{ animationDelay: '1s' }}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="13" stroke="#FF4C60" strokeWidth="3" strokeDasharray="4 4" />
      </svg>

      {/* Purple Triangle */}
      <svg
        className="absolute bottom-24 left-[15%] animate-float"
        style={{ animationDelay: '2s' }}
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2L22 20H2L12 2Z" stroke="#6C6CE5" strokeWidth="3" strokeLinejoin="round" />
      </svg>

      {/* Yellow Dot Cluster */}
      <div
        className="absolute bottom-36 right-[14%] flex gap-2 animate-float"
        style={{ animationDelay: '1.5s' }}
      >
        <span className="w-3 h-3 rounded-full bg-[#FFD15C]" />
        <span className="w-3 h-3 rounded-full bg-[#FF4C60]" />
        <span className="w-3 h-3 rounded-full bg-[#6C6CE5]" />
      </div>

      {/* Coral Wave */}
      <svg
        className="absolute top-1/2 left-[5%] animate-float"
        style={{ animationDelay: '2.5s' }}
        width="40"
        height="20"
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 10C8 2 12 18 18 10C24 2 28 18 34 10C36 7 38 7 38 7"
          stroke="#FF4C60"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      {/* Purple Ring */}
      <svg
        className="absolute top-1/3 right-[8%] animate-float"
        style={{ animationDelay: '0.5s' }}
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="13" cy="13" r="10" stroke="#6C6CE5" strokeWidth="3" />
      </svg>
    </div>
  );
};
