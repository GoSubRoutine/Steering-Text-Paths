/// <reference path="../typings/p5Global.d.ts" />
import type p5 from "p5";
export default class Vehicle {
    protected p: p5;
    pos: p5.Vector;
    tgt: p5.Vector;
    acc: p5.Vector;
    tmp: p5.Vector;
    col: p5.Color;
    static readonly STROKE = "lime";
    static readonly DIAM = 6;
    static readonly FLEE = 5;
    static readonly MAX_SPEED = 10;
    static readonly MAX_FORCE = 1;
    static readonly MAX_DIST = 100;
    vel: p5.Vector;
    constructor(x: number, y: number, p?: p5, pos?: p5.Vector, tgt?: p5.Vector, acc?: p5.Vector, tmp?: p5.Vector, col?: p5.Color);
    update(): this;
    show(): this;
    display(): this;
    behaviors(): this;
    applyForce(force: p5.Vector): this;
    arrive(target: p5.Vector): p5.Vector;
    flee(target: p5.Vector): p5.Vector;
}
//# sourceMappingURL=vehicle.d.mts.map