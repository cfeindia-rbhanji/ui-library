import React from "react";

interface GradientSvgProps {
  /**
   * Timestamp used to generate the random pattern
   * @default Date.now()
   */
  timestamp?: number;
}

interface GradientCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const GradientSvg: React.FC<GradientSvgProps> = ({
  timestamp = Date.now(),
}) => {
  // Helper function to generate random numbers based on timestamp
  const getRandom = (min: number, max: number, offset: number = 0): number => {
    const rand = Math.sin((timestamp + offset) * 0.0001) * 10000;
    return min + (rand - Math.floor(rand)) * (max - min);
  };

  // Generate slightly varied colors based on timestamp
  const getRandomColor = (baseColor: string, range: number = 20): string => {
    const hslMatch = baseColor.match(/^#([A-Fa-f0-9]{6})$/);
    if (!hslMatch) return baseColor;

    // Convert hex to RGB
    const hex = hslMatch[1];
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    // Add random variation
    const newR = Math.min(255, Math.max(0, r + getRandom(-range, range, 1)));
    const newG = Math.min(255, Math.max(0, g + getRandom(-range, range, 2)));
    const newB = Math.min(255, Math.max(0, b + getRandom(-range, range, 3)));

    // Convert back to hex
    const toHex = (n: number): string =>
      Math.round(n).toString(16).padStart(2, "0");
    return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
  };

  // Generate random gradient positions based on timestamp
  const gradientCoords: GradientCoordinates = {
    x1: getRandom(-700, -500, 4),
    y1: getRandom(-200, -100, 5),
    x2: getRandom(600, 700, 6),
    y2: getRandom(500, 600, 7),
  };

  // Generate slightly varied base colors
  const startColor: string = getRandomColor("#02A6F5");
  const endColor: string = getRandomColor("#FEF08A");

  return (
    <div className={`aspect-[3/2] w-full overflow-hidden`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0H588C594.627 0 600 5.37258 600 12V388C600 394.627 594.627 400 588 400H12C5.37258 400 0 394.627 0 388V12Z"
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient
            id="gradient"
            x1={gradientCoords.x1}
            y1={gradientCoords.y1}
            x2={gradientCoords.x2}
            y2={gradientCoords.y2}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={startColor} />
            <stop offset="1" stopColor={endColor} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default React.memo(GradientSvg);
