import { Matrix } from "./Matrix";

export class Arena {
    static width = 40;
    static height = 40;
    offset = { x: 0, y: 0 };

    constructor() {}

    draw = () => {
        return {
            matrix: Matrix.createMatrix(Arena.width, Arena.height, 8),
            offset: this.offset,
        };
    };

    recalculate = () => {};
}
