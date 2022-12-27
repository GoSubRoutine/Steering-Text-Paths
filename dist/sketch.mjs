/**
 * Steering Text Paths #059 (v1.1.3)
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
import Vehicle from "./vehicle.mjs";
const TXT = 'Coding Train', ASSETS = 'assets/', FONT_PATH = ASSETS + 'AvenirNextLTPro-Demi.otf', FONT_SIZE = 0o150, OFFSET = 50, FACTOR = .25, BG = 0o100;
export default function sketch(p) {
    p.preload = preload;
    p.setup = setup;
    p.draw = draw;
}
function preload() {
    this.font = this.loadFont(FONT_PATH);
}
function setup() {
    this.createCanvas(750, 300);
    this.stroke(Vehicle.STROKE).strokeWeight(Vehicle.DIAM);
    const x = OFFSET, y = this.height + OFFSET >> 1;
    this.vehicles = this.
        font.textToPoints(TXT, x, y, FONT_SIZE, { sampleFactor: FACTOR }).
        map(({ x, y }) => new Vehicle(x, y, this));
    this.bg = this.color(BG);
}
function draw() {
    this.background(this.bg);
    for (const vehicle of this.vehicles)
        vehicle.behaviors().update().display();
}
