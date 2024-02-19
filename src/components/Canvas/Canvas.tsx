import { useRef, useEffect } from 'react';
import {Snake} from "./Snake.ts";

const colors = [
    null,
    "#FEF84C",
    "#51E1FC",
    "#E93D1E",
    "#79AE3D",
    "#F69230",
    "#F16EB9",
    "#943692",
    "#2c3e50",
];

const config = {
    width: 1200,
    height: 1200
};

type Props = {
    onDraw(ctx?: CanvasRenderingContext2D, frameCount?: number): void
    matrix: number[][]
}

const snake = new Snake();

function Canvas(props: Props) {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    useEffect(() => {
        console.log('contextRef', contextRef);
    }, [contextRef]);

    useEffect(() => {
        let frameCount = 0;
        let animationFrameId;

        getContext().scale(10, 10);


        // Check if null context has been replaced on component mount
        const render = () => {
            snake.recalculate()

            drawBackground();

            frameCount++;

            if (props.onDraw) {
                props.onDraw(getContext(), frameCount);
            }
            if (props.matrix) {
                // should be just done in onDraw no time
                drawMatrix(snake.getMatrix(), {x: 0, y: 0});
            }

            animationFrameId = window.requestAnimationFrame(render);
        };
        render();
        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const drawBackground = () => {
        getContext().fillStyle = "#000";
        getContext().fillRect(0, 0, config.width, config.height);
    }

    const getContext = () => {
        if (contextRef.current) {
            return contextRef.current;
        }

        contextRef.current = canvasRef?.current?.getContext('2d');
        return canvasRef?.current?.getContext('2d');
    }

    const drawMatrix = (matrix: number[][], offset = { x: 0, y: 0 }) => {
        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    getContext().fillStyle = colors[value];
                    getContext().fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    };

    return (
        <canvas ref={canvasRef} width={config.width} height={config.height} />
    );
}

export default Canvas;
