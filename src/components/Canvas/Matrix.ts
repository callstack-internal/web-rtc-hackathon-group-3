export class Matrix {
    static createMatrix(w: number, h: number, index: number): number[][] {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(index));
        }
        return matrix;
    }
}
