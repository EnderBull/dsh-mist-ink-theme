window.__ModuleLoader__.load({
  id: 'dsh-mist-ink-theme',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    const ATTRIBUTE = 'data-dsh-mist-ink'
    const STORAGE_KEY = 'dsh-mist-ink:glass'
    const DEFAULT_GLASS = 60
    const GLASS_VARIABLES = [
      '--dsh-mi-g',
      '--dsh-mi-blur-sidebar',
      '--dsh-mi-blur-panel',
      '--dsh-mi-blur-card',
      '--dsh-mi-blur-menu',
      '--dsh-mi-a-sidebar',
      '--dsh-mi-a-panel',
      '--dsh-mi-a-card',
      '--dsh-mi-a-menu',
    ]

    /* Inlined at build time from src/theme.css. */
    const THEME_CSS = __THEME_CSS__

    const clamp = (value) => {
      const number = Math.round(Number(value))
      return Number.isFinite(number) ? Math.min(100, Math.max(0, number)) : DEFAULT_GLASS
    }

    const readStoredGlass = () => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY)
        return raw === null ? DEFAULT_GLASS : clamp(raw)
      } catch {
        return DEFAULT_GLASS
      }
    }

    let glass = readStoredGlass()
    const listeners = new Set()

    const subscribe = (listener) => {
      listeners.add(listener)
      return () => {
        listeners.delete(listener)
      }
    }

    const getGlass = () => glass

    const glassLabel = (value) => {
      if (value <= 0) return '关闭'
      if (value <= 33) return '轻'
      if (value <= 70) return '中'
      return '强'
    }

    const applyGlass = () => {
      const root = document.documentElement
      const g = glass / 100
      const px = (base) => `${(base * g).toFixed(1)}px`
      const alpha = (base, span) => (base + span * (1 - g)).toFixed(3)
      root.style.setProperty('--dsh-mi-g', String(g))
      root.style.setProperty('--dsh-mi-blur-sidebar', px(22))
      root.style.setProperty('--dsh-mi-blur-panel', px(26))
      root.style.setProperty('--dsh-mi-blur-card', px(16))
      root.style.setProperty('--dsh-mi-blur-menu', px(28))
      root.style.setProperty('--dsh-mi-a-sidebar', alpha(0.58, 0.42))
      root.style.setProperty('--dsh-mi-a-panel', alpha(0.66, 0.34))
      root.style.setProperty('--dsh-mi-a-card', alpha(0.84, 0.16))
      root.style.setProperty('--dsh-mi-a-menu', alpha(0.78, 0.22))
    }

    const setGlass = (next, persist) => {
      const value = clamp(next)
      if (value === glass) return
      glass = value
      applyGlass()
      if (persist) {
        try {
          window.localStorage.setItem(STORAGE_KEY, String(value))
        } catch {
          /* Storage can be unavailable in hardened browser contexts. */
        }
      }
      for (const listener of [...listeners]) listener()
    }

    function GlassRow() {
      const React = require('react')
      const value = React.useSyncExternalStore(subscribe, getGlass, getGlass)
      return React.createElement(
        'div',
        { className: 'mi-row' },
        React.createElement(
          'div',
          { className: 'mi-copy' },
          React.createElement('div', { className: 'mi-title' }, '毛玻璃强度'),
          React.createElement(
            'div',
            { className: 'mi-desc' },
            '调整侧边栏、输入区、右侧栏与弹层的模糊和通透度；0% 为完全不透明。'
          )
        ),
        React.createElement(
          'div',
          { className: 'mi-control' },
          React.createElement('input', {
            type: 'range',
            min: 0,
            max: 100,
            step: 5,
            value,
            'aria-label': '毛玻璃强度',
            onChange: (event) => setGlass(Number(event.target.value), true),
          }),
          React.createElement(
            'span',
            { className: 'mi-value' },
            `${glassLabel(value)} · ${value}%`
          )
        )
      )
    }

    function apply(ctx) {
      if (typeof document === 'undefined') return

      glass = readStoredGlass()
      ctx.effect(() => {
        applyGlass()
        document.documentElement.setAttribute(ATTRIBUTE, '')

        const style = document.createElement('style')
        style.dataset.plugin = 'dsh-mist-ink-theme'
        style.dataset.pluginCss = 'dsh-mist-ink-theme/theme.css'
        style.textContent = THEME_CSS
        document.head.appendChild(style)

        let releaseRow = null
        try {
          releaseRow = ctx.slots.inject('settings.general.item', () =>
            ctx.slots.register(
              {
                name: 'settings.general.item',
                id: 'mist-ink-glass',
                order: 19,
                inject: () => ({}),
              },
              GlassRow
            )
          )
        } catch {
          /* Settings UI is optional; the theme itself must still apply. */
        }

        return () => {
          if (typeof releaseRow === 'function') releaseRow()
          style.remove()
          document.documentElement.removeAttribute(ATTRIBUTE)
          const root = document.documentElement
          for (const name of GLASS_VARIABLES) root.style.removeProperty(name)
        }
      }, 'mist-ink: graphite palette and frosted glass')
    }

    exports.apply = apply
    exports.inject = ['slots']
    return module.exports
  },
})
