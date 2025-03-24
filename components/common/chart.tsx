// components/common/Chart.tsx
import React from "react";

type ChartType = "bar" | "line" | "pie" | "area";

interface ChartProps {
  type: ChartType;
  data: any;
  height?: number;
  width?: number;
  className?: string;
  showLegend?: boolean;
  showGrid?: boolean;
}

const Chart = ({
  type,
  data,
  height = 300,
  width = 600,
  className = "",
  showLegend = true,
  showGrid = true,
}: ChartProps) => {
  // This is a placeholder component - in a real implementation,
  // you would use a charting library like recharts, chart.js, or d3

  // For now, we'll render a simple visual placeholder
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-grey-200 ${className}`}
      style={{ height: `${height}px`, width: "100%", maxWidth: `${width}px` }}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-grey-50">
        <div className="text-center">
          <div className="text-grey-500">
            {type.charAt(0).toUpperCase() + type.slice(1)} Chart
          </div>
          <div className="mt-2 text-sm text-grey-400">
            Data visualization will render here
          </div>
        </div>
      </div>

      {/* Mock chart elements based on chart type */}
      {type === "bar" && (
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-around h-3/4 px-8">
          {[...Array(6)].map((_, i) => {
            const height = Math.random() * 80 + 20;
            return (
              <div
                key={i}
                className="w-1/12 bg-brand-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            );
          })}
        </div>
      )}

      {type === "line" && (
        <div className="absolute inset-0 flex items-center">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 L20,40 L40,60 L60,30 L80,50 L100,20"
              fill="none"
              stroke="#28A55D"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}

      {type === "pie" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full bg-grey-200 overflow-hidden">
            <div className="w-1/2 h-full bg-brand-500"></div>
            <div
              className="w-1/2 h-1/2 bg-secondary-400"
              style={{ marginLeft: "50%" }}
            ></div>
          </div>
        </div>
      )}

      {showLegend && (
        <div className="absolute bottom-2 right-2 flex space-x-2">
          <div className="flex items-center text-xs">
            <span className="inline-block w-3 h-3 bg-brand-500 mr-1"></span>
            <span>Series A</span>
          </div>
          <div className="flex items-center text-xs">
            <span className="inline-block w-3 h-3 bg-secondary-500 mr-1"></span>
            <span>Series B</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chart;
