import assert from 'node:assert/strict'

const setProperties = new Map()
const attributes = new Set()

const root = {
  setAttribute(name) {
    attributes.add(name)
  },
  removeAttribute(name) {
    attributes.delete(name)
  },
  style: {
    setProperty(name, value) {
      setProperties.set(name, value)
    },
    removeProperty(name) {
      setProperties.delete(name)
    },
  },
}

const styleElement = {
  dataset: {},
  textContent: '',
  removed: false,
  remove() {
    this.removed = true
  },
}

const appended = []
globalThis.document = {
  documentElement: root,
  head: {
    appendChild(element) {
      appended.push(element)
    },
  },
  createElement() {
    return styleElement
  },
}

let registration
globalThis.window = {
  __ModuleLoader__: {
    load(value) {
      registration = value
    },
  },
  localStorage: {
    getItem() {
      return null
    },
    setItem() {},
  },
}

await import(new URL('../lib/client.js', import.meta.url).href)
assert.ok(registration, 'client bundle must register a module factory')
assert.equal(registration.id, 'dsh-mist-ink-theme')

const clientExports = registration.factory((specifier) => {
  throw new Error(`unexpected module request: ${specifier}`)
})
assert.equal(typeof clientExports.apply, 'function')
assert.deepEqual(clientExports.inject, ['slots'])

let disposed
const ctx = {
  effect(callback) {
    disposed = callback()
  },
  slots: {
    inject(_name, register) {
      return register()
    },
    register() {
      return () => {}
    },
  },
}

clientExports.apply(ctx)
assert.ok(attributes.has('data-dsh-mist-ink'), 'scope attribute must be set')
assert.equal(appended.length, 1, 'one stylesheet must be appended')
assert.ok(styleElement.textContent.includes('#202024'), 'palette must be inlined')
assert.ok(!styleElement.textContent.includes('__THEME_CSS__'), 'placeholder must be replaced')
assert.ok(styleElement.textContent.includes('background-image: none'), 'canvas must be flat')
assert.equal(setProperties.get('--dsh-mi-blur-sidebar'), '13.2px')
assert.equal(setProperties.get('--dsh-mi-a-sidebar'), '0.748')
assert.equal(setProperties.get('--dsh-mi-g'), '0.6')

assert.equal(typeof disposed, 'function')
disposed()
assert.ok(!attributes.has('data-dsh-mist-ink'))
assert.ok(styleElement.removed)
assert.equal(setProperties.size, 0)

console.log('client bundle mock test passed')
