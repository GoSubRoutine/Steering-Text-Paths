/// <reference path="../typings/p5-global.d.ts" />
export default class Vehicle {
    p;
    pos;
    tgt;
    acc;
    tmp;
    col;
    static STROKE = 'lime';
    static DIAM = 6;
    static FLEE = 5;
    static MAX_SPEED = 10;
    static MAX_FORCE = 1;
    static MAX_DIST = 100;
    vel = window.p5.Vector.random2D();
    constructor(x, y, p = window.p5.instance, pos = p.createVector(p.random(p.width), p.random(p.height)), tgt = p.createVector(x, y), acc = p.createVector(), tmp = p.createVector(), col = p.color(Vehicle.STROKE)) {
        this.p = p;
        this.pos = pos;
        this.tgt = tgt;
        this.acc = acc;
        this.tmp = tmp;
        this.col = col;
    }
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
        const { p: { mouseX, mouseY }, tmp, tgt } = this, { FLEE } = Vehicle;
        return this.
            applyForce(this.arrive(tgt)).
            applyForce(this.flee(tmp.set(mouseX, mouseY)).mult(FLEE));
    }
    applyForce(force) {
        this.acc.add(force);
        return this;
    }
    arrive(target) {
        const { p: { map }, tmp, pos, vel } = this, { MAX_DIST, MAX_SPEED, MAX_FORCE } = Vehicle, dist = tmp.set(target).sub(pos).mag(), spd = dist >= MAX_DIST ? MAX_SPEED : map(dist, 0, MAX_DIST, 0, MAX_SPEED);
        return tmp.setMag(spd).sub(vel).limit(MAX_FORCE);
    }
    flee(target) {
        const { tmp, pos, vel } = this, { MAX_DIST, MAX_SPEED, MAX_FORCE } = Vehicle;
        return tmp.set(target).sub(pos).mag() >= MAX_DIST >> 1 ?
            tmp.mult(0) :
            tmp.setMag(MAX_SPEED).mult(-1).sub(vel).limit(MAX_FORCE);
    }
}
