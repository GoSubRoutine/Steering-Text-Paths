/// <reference path="../typings/p5Global.d.ts" />

import type p5 from "p5";

export default class Vehicle {
  static readonly STROKE = 'lime';
  static readonly DIAM = 6;
  static readonly FLEE = 5;

  static readonly MAX_SPEED = 10;
  static readonly MAX_FORCE = 1;
  static readonly MAX_DIST = 100;

  vel = window.p5.Vector.random2D();

  constructor(
    x: number, y: number,
    protected p = window.p5?.instance,
    public    pos = p.createVector(p.random(p.width), p.random(p.height)),
    public    tgt = p.createVector(x, y),
    protected acc = p.createVector(),
    protected tmp = p.createVector(),
    public    col = p.color(Vehicle.STROKE)
  ) {}

  update() {
    this.pos.add(this.vel.add(this.acc));
    this.acc.mult(0);
    return this;
  }

  show() {
    this.p.
      stroke(this.col).
      strokeWeight(Vehicle.DIAM).
      point(this.pos.x, this.pos.y);

    return this;
  }

  display() {
    this.p.point(this.pos.x, this.pos.y);
    return this;
  }

  behaviors() {
    const
      { p: { mouseX, mouseY }, tmp, tgt } = this,
      { FLEE } = Vehicle;

    return this.
      applyForce(this.arrive(tgt)).
      applyForce(this.flee(tmp.set(mouseX, mouseY)).mult(FLEE));
  }

  applyForce(force: p5.Vector) {
    this.acc.add(force);
    return this;
  }

  arrive(target: p5.Vector) {
    const
      { p: { map }, tmp, pos, vel } = this,
      { MAX_DIST, MAX_SPEED, MAX_FORCE } = Vehicle,

      dist = tmp.set(target).sub(pos).mag(),
      spd = dist >= MAX_DIST? MAX_SPEED : map(dist, 0, MAX_DIST, 0, MAX_SPEED);

    return tmp.setMag(spd).sub(vel).limit(MAX_FORCE);
  }

  flee(target: p5.Vector) {
    const
      { tmp, pos, vel } = this,
      { MAX_DIST, MAX_SPEED, MAX_FORCE } = Vehicle;

    return tmp.set(target).sub(pos).mag() >= MAX_DIST >> 1?
      tmp.mult(0) :
      tmp.setMag(MAX_SPEED).mult(-1).sub(vel).limit(MAX_FORCE);
  }
}
