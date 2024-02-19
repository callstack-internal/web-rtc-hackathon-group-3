export type DrawFrame = { matrix: number[][]; offset: {x: number, y: number} };
export type DrawFunction = () => DrawFrame;

export abstract class DrawElement {
    abstract draw(): DrawFrame;
    abstract recalculate(): void;
}

export enum KeyboardArrows {
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowUp = "ArrowUp",
}
