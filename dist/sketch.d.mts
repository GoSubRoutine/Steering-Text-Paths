/**
 * Steering Text Paths #059 (v1.1.2)
 * Daniel Shiffman (2017-Feb)
 *
 * https://GitHub.com/CodingTrain/Coding-Challenges/tree/main/059_Steering_Text_Paths
 * https://YouTube.com/watch?v=4hA7G3gup-4
 *
 * TS Module Instance Mode Refactoring
 * GoToLoop (2022-Aug-12)
 *
 * https://GitHub.com/GoSubRoutine/Steering-Text-Paths
 * https://GoSubRoutine.GitHub.io/Steering-Text-Paths/
 *
 * https://Discourse.Processing.org/t/
 * cant-access-p5-vector-methods-in-typescript-like-random2d-and-sub/38315/2
*/
import type p5 from "p5";
import Vehicle from "./vehicle.mjs";
export declare type p5x = p5 & {
    font: p5.Font;
    bg: p5.Color;
    vehicles: Vehicle[];
};
export default function sketch(p: p5): void;
//# sourceMappingURL=sketch.d.mts.map