'use client';
import * as d3 from "d3";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type DataPoint = {
    x: number;
    y: number;
};

type ScatterplotProps = {
    width: number;
    height: number;
    data: DataPoint[];
};

export const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
    const boundsWidth = width - MARGIN.right - MARGIN.left;
    const boundsHeight = height - MARGIN.top - MARGIN.bottom;

    // Scales
    const yScale = d3.scaleLinear().domain([0, 1000]).range([boundsHeight, 0]);
    const xScale = d3.scaleLinear().domain([0, 2000]).range([0, boundsWidth]);

    // Build the shapes
    const allShapes = data.map((d, i) => {
        return (
            <circle
                key={i}
        r={1}
        cx={xScale(d.x)}
        cy={yScale(d.y)}
        fill="white"
            />
    );
    });

    return (
        <div style={{ position: "relative" }}>
    <svg width={width} height={height}>
    <g
        width={boundsWidth}
    height={boundsHeight}
        >
        {allShapes}
        </g>
        </svg>

        </div>
);
};
