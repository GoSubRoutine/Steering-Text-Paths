export {}

declare global {
  type P5RegTypes = 'init' | 'pre' | 'post' | 'remove'

  type Class<T = object> = {
    new (...args: any): T
    prototype: T
  }
}
