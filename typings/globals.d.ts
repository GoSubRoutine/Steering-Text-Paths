export {}

declare global {
  type Class<T = object> = {
    new (...args: any): T
    prototype: T
  }
}
