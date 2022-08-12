/**
 * Steering Text Paths #059 (v1.0.1)
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

export default function sketch(p: p5) {
  const
    TXT = 'Coding Train',
    ASSETS = 'assets/',
    FONT_PATH = ASSETS + 'AvenirNextLTPro-Demi.otf',
    FONT_SIZE = 0o150,
    OFFSET = 50,
    FACTOR = .25,
    BG = 0o100;

  var font: p5.Font, bg: p5.Color, vehicles: Vehicle[];

  p.preload = function() {
    font = this.loadFont(FONT_PATH);
  };

  p.setup = function() {
    this.createCanvas(750, 300);
    this.stroke(Vehicle.STROKE).strokeWeight(Vehicle.DIAM);

    const x = OFFSET, y = this.height + OFFSET >> 1;

    vehicles = Array.from(
      font.textToPoints(TXT, x, y, FONT_SIZE, { sampleFactor: FACTOR }),
      ({ x, y }) => new Vehicle(x, y, this)
    );

    bg = this.color(BG);
  };

  p.draw = function() {
    this.background(bg);
    for (const vehicle of vehicles)  vehicle.behaviors().update().display();
  };
}
