// PlaceholderImage Component
//
// Generates a dynamic placeholder image with complementary colors.
// The pattern and colors are determined by the timestamp provided.
//
// @component
// @example
// Basic usage - generates new pattern on every render (Not recommended))
//   <PlaceholderImage />
//
// Fixed pattern with specific timestamp based on the creation date of the Project (Preferred)
// IMPORTANT: Update the timestamp to the creation date of the project
//
//   <PlaceholderImage timestamp={ProjectCreation.date()} />
//
// Fixed pattern with specific date
//  <PlaceholderImage timestamp={new Date('2023-11-08').getTime()} />
//
//  Note: The same timestamp will always generate the same pattern and colors,
//  making it useful for consistent placeholders across page loads.
//

import React from "react";

interface PlaceholderImageProps {
  timestamp?: number;

  /**
   * Optional className for additional styling
   * Allows custom styling while maintaining responsive behavior
   */
  className?: string;
}

interface ColorPair {
  brand: string;
  secondary: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  timestamp = Date.now(),
  className = "",
}) => {
  const getRandom = (min: number, max: number, offset: number = 0): number => {
    const rand = Math.sin((timestamp + offset) * 0.0001) * 10000;
    return min + (rand - Math.floor(rand)) * (max - min);
  };

  const generateHarmoniousColors = (): ColorPair => {
    const goldenRatio = 0.618033988749895;
    let hue = getRandom(0, 360);
    hue = (hue + 360 * goldenRatio) % 360;

    const minSaturation = 60;
    const maxSaturation = 85;
    const minLightness = 55;
    const maxLightness = 75;

    const brand = `hsl(${hue}, ${getRandom(minSaturation, maxSaturation)}%, ${getRandom(minLightness, maxLightness)}%)`;
    const complementaryHue = (hue + 180) % 360;
    const secondary = `hsl(${complementaryHue}, ${getRandom(minSaturation, maxSaturation)}%, ${getRandom(minLightness, maxLightness)}%)`;

    return { brand, secondary };
  };

  const colors = generateHarmoniousColors();

  const generateWavePath = (
    offset: number = 0,
    amplitude: number = 100,
    frequency: number = 0.01
  ): string => {
    const points: string[] = [];
    const steps = 5;

    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * 700 - 50;
      const y =
        200 + amplitude * Math.sin((x + timestamp + offset) * frequency);
      points.push(`${x},${y}`);
    }

    return `M-50,400 L-50,${points[0].split(",")[1]} 
            Q${points.map((p) => p).join(" ")} 
            L700,${points[points.length - 1].split(",")[1]} 
            L700,400 Z`;
  };

  return (
    <div
      className={`aspect-[3/2] w-full max-w-[600px] overflow-hidden rounded-lg border border-border ${className} `}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 400"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-background"
      >
        {/* Background gradient */}
        <defs>
          <linearGradient
            id="backgroundGradient"
            x1="0"
            y1="0"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="(var(--blue))" />
            <stop offset="100%" stopColor="hsl(var(--blue))" />
          </linearGradient>
          <radialGradient id="glowGradient" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor={colors.brand} stopOpacity="0.15" />
            <stop offset="100%" stopColor={colors.brand} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#backgroundGradient)"
        />

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#glowGradient)"
        />

        <g filter="url(#blur)">
          <path
            d={generateWavePath(0, 120, 0.005)}
            fill={colors.brand}
            opacity="0.2"
          />
          <path
            d={generateWavePath(2000, 100, 0.006)}
            fill={colors.secondary}
            opacity="0.15"
          />
          <path
            d={generateWavePath(4000, 80, 0.007)}
            fill={colors.brand}
            opacity="0.1"
          />
        </g>

        <defs>
          <filter
            id="blur"
            x="-100"
            y="-100"
            width="800"
            height="600"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="50" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default React.memo(PlaceholderImage);
