import {Scatterplot} from "./Scatterplot";
import {randomInt} from "@/app/util";
import {qpartition} from "@/app/qpartition";

const p1 = Array.from({length: 1000}, (_, key) => randomInt(0, 4999))
const p2 = Array.from({length: 1000}, (_, key) => randomInt(5001, 10000))
const p = [...p1, 5000, ...p2]
const q = Array.from({length: 2000}, (_, key) => randomInt(0, 1000))
qpartition(q, 0, q.length - 1, 0)
const randomData = Array.from(q, (r, i) => ({x: i, y: r}));
const ScatterplotTooltipDemo = ({ width = 800, height = 800 }) => (
    <Scatterplot data={randomData} width={width} height={height} />
);

export default ScatterplotTooltipDemo;