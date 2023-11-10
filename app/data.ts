import {randomInt} from "./util";

const range = (n: number) => Array.from({length: n}, (_, key) => randomInt(0, 100));
export const randomData = Array.from(range(100), (x, i) => ({x: i, y: x}));

export default randomData;