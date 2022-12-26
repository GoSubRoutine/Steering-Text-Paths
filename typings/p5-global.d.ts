/// <reference path="globals.d.ts" />

import p5Class, { p5InstanceExtensions } from "p5"
export = p5

declare global {
  type P5RegTypes = 'init' | 'pre' | 'post' | 'remove'

  interface Window extends p5Callbacks {
    p5: typeof p5
  }
}

declare class p5 extends p5Class {
  constructor(sketch?: (p: p5) => void, node?: string | HTMLElement)

  static VERSION: string
  static instance: p5Class
  static disableFriendlyErrors: boolean
}

declare interface p5 extends p5InstanceExtensions {
  constructor: typeof p5
  __proto__: typeof p5.prototype

  registerMethod(register: P5RegTypes, callback: (this: p5) => void): void
  registerPreloadMethod(name: PropertyKey, proto: object): void

  preload(this: p5): void
  setup(this: p5): void
  draw(this: p5): void

  windowResized(this: p5, evt?: UIEvent): boolean | void

  keyTyped(this: p5, evt?: KeyboardEvent): boolean | void
  keyPressed(this: p5, evt?: KeyboardEvent): boolean | void
  keyReleased(this: p5, evt?: KeyboardEvent): boolean | void

  touchStarted(this: p5, evt?: TouchEvent): boolean | void
  touchMoved(this: p5, evt?: TouchEvent): boolean | void
  touchEnded(this: p5, evt?: TouchEvent): boolean | void

  mouseWheel(this: p5, evt?: WheelEvent): boolean | void

  mouseMoved(this: p5, evt?: MouseEvent): boolean | void
  mouseDragged(this: p5, evt?: DragEvent): boolean | void

  mousePressed(this: p5, evt?: MouseEvent): boolean | void
  mouseReleased(this: p5, evt?: MouseEvent): boolean | void

  mouseClicked(this: p5, evt?: MouseEvent): boolean | void
  doubleClicked(this: p5, evt?: MouseEvent): boolean | void
}

declare interface p5Callbacks {
  preload(this: p5): void
  setup(this: p5): void
  draw(this: p5): void

  windowResized(this: p5, evt?: UIEvent): boolean | void

  keyTyped(this: p5, evt?: KeyboardEvent): boolean | void
  keyPressed(this: p5, evt?: KeyboardEvent): boolean | void
  keyReleased(this: p5, evt?: KeyboardEvent): boolean | void

  touchStarted(this: p5, evt?: TouchEvent): boolean | void
  touchMoved(this: p5, evt?: TouchEvent): boolean | void
  touchEnded(this: p5, evt?: TouchEvent): boolean | void

  mouseWheel(this: p5, evt?: WheelEvent): boolean | void

  mouseMoved(this: p5, evt?: MouseEvent): boolean | void
  mouseDragged(this: p5, evt?: DragEvent): boolean | void

  mousePressed(this: p5, evt?: MouseEvent): boolean | void
  mouseReleased(this: p5, evt?: MouseEvent): boolean | void

  mouseClicked(this: p5, evt?: MouseEvent): boolean | void
  doubleClicked(this: p5, evt?: MouseEvent): boolean | void
}
