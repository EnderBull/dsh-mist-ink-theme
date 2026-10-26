window.__ModuleLoader__.load({
  id: 'dsh-mist-ink-theme',
  factory: (require) => {
    var module = { exports: {} }
    var exports = module.exports

    const ATTRIBUTE = 'data-dsh-mist-ink'
    const STORAGE_KEY = 'dsh-mist-ink:glass'
    const ENABLED_KEY = 'dsh-mist-ink:enabled'
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
    const THEME_CSS = "﻿/* ==========================================================================\n   闆惧ⅷ 路 Mist Ink 鈥?a softer graphite dark theme with frosted glass.\n   Scoped to `html[data-dsh-mist-ink] body[data-ds-dark-theme]`; light mode is\n   never touched. Installed as a client plugin by dsh-mist-ink-theme.\n   ========================================================================== */\n\n/* Intensity defaults mirror an intensity of 60%. The client overrides every\n   `--dsh-mi-*` value live when the settings slider moves. */\nhtml[data-dsh-mist-ink] {\n  --dsh-mi-g: 0.6;\n  --dsh-mi-blur-sidebar: 13px;\n  --dsh-mi-blur-panel: 16px;\n  --dsh-mi-blur-card: 10px;\n  --dsh-mi-blur-menu: 17px;\n  --dsh-mi-a-sidebar: 0.748;\n  --dsh-mi-a-panel: 0.796;\n  --dsh-mi-a-card: 0.904;\n  --dsh-mi-a-menu: 0.868;\n}\n\n/* --------------------------------------------------------------------------\n   1. Palette\n   Base #202024, text #d2d4d9 (~11:1) instead of near-black #151517 with\n   near-white #f9fafb (~17.5:1).\n   -------------------------------------------------------------------------- */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] {\n  --dsw-alias-bg-base: #202024;\n  --dsw-alias-bg-document-preview: #1c1c21;\n  --dsw-alias-bg-layer-1: #26262b;\n  --dsw-alias-bg-layer-2: #2b2b31;\n  --dsw-alias-bg-layer-3: #333339;\n  --dsw-alias-bg-module-platform: #2b2b31;\n  --dsw-alias-bg-multi-select: #2b2b31;\n  --dsw-alias-bg-overlay: #2a2a30;\n  --dsw-alias-bg-mask-1: rgba(10, 10, 13, 0.72);\n  --dsw-alias-bg-mask-2: rgba(10, 10, 13, 0.5);\n\n  --dsw-alias-border-l1: rgba(255, 255, 255, 0.06);\n  --dsw-alias-border-l2: rgba(255, 255, 255, 0.09);\n  --dsw-alias-border-l3: rgba(255, 255, 255, 0.13);\n  --dsw-alias-border-l4: rgba(255, 255, 255, 0.18);\n\n  --dsw-alias-label-primary: #d2d4d9;\n  --dsw-alias-label-primary-dimmed: #c6c9cf;\n  --dsw-alias-label-primary-bluish: #dfe2e7;\n  --dsw-alias-label-primary-inverted: #26262b;\n  --dsw-alias-label-secondary: #a9aeb6;\n  --dsw-alias-label-tertiary: #90959e;\n  --dsw-alias-label-caption: #888d96;\n  --dsw-alias-label-dimmed: #6f747c;\n  --dsw-alias-menu-icon: #c6c9cf;\n\n  --dsw-alias-brand-primary: #dfe2e7;\n  --dsw-alias-brand-text: #e6e8ec;\n  --dsw-alias-brand-primary-invert: #26262b;\n  --dsw-alias-brand-primary-new-colorprimary-new-color: #9ab8e6;\n\n  --dsw-alias-link: #9ab8e6;\n  --dsw-alias-state-business-primary: #8fb0e0;\n  --dsw-alias-state-business-tertiary: rgba(143, 176, 224, 0.2);\n\n  --dsw-alias-button-primary-fill: #dfe2e7;\n  --dsw-alias-button-primary-hover: #eceef2;\n  --dsw-alias-button-elevated-fill: #2f2f36;\n  --dsw-alias-button-floating-fill: #2b2b31;\n  --dsw-alias-button-floating-hover: #33333a;\n  --dsw-alias-button-contrast-fill: #e6e8ec;\n\n  --dsw-alias-interactive-bg-hover: rgba(255, 255, 255, 0.055);\n  --dsw-alias-interactive-bg-active: rgba(255, 255, 255, 0.09);\n  --dsw-alias-interactive-bg-hover-solid: #2f2f36;\n\n  --dsw-alias-markdown-code-block: #1b1b20;\n  --dsw-alias-markdown-code-block-banner: #232328;\n  --dsw-alias-markdown-inline-code: #2c2c32;\n  --dsw-alias-markdown-code-segment-selected: #303037;\n  --dsw-alias-markdown-code-segment-unselected: #232328;\n\n  --dsw-alias-scrollbar-bg-l1: rgba(255, 255, 255, 0.14);\n  --dsw-alias-scrollbar-bg-l2: rgba(255, 255, 255, 0.18);\n  --dsw-alias-scrollbar-hover-l1: rgba(255, 255, 255, 0.22);\n  --dsw-alias-scrollbar-hover-l2: rgba(255, 255, 255, 0.28);\n\n  --dsw-alias-tooltip-bg: #33333a;\n  --dsw-alias-toast-bg: #33333a;\n  --dsw-alias-switch-thumb: #b9bdc4;\n\n  --dsw-alias-bg-document-selection: color-mix(in srgb, #4d7ab8 30%, transparent);\n\n  /* The Windows caption buttons read this token through the desktop preload\n     (`setTitleBarOverlay`), so it must be the same solid color as the web\n     caption strip below. */\n  --dsw-specific-sidebar-fill: #141418;\n  --dsw-specific-bubble: #2b2b31;\n  --dsw-specific-bubble-highlight: #34343b;\n  --dsw-specific-input-major: #26262b;\n  --dsw-specific-login-input: #26262b;\n  --dsw-specific-menu: rgba(34, 34, 40, 0.82);\n  --dsw-specific-selector: #2f2f36;\n  --dsw-specific-tip: #2a2a30;\n  --dsw-specific-sidebar-nav-item-active: #2f2f36;\n  --dsw-specific-sidebar-nav-item-active-accent: #35353d;\n  --dsw-specific-sidebar-nav-item-hover: rgba(255, 255, 255, 0.045);\n\n  --dsw-menu-surface-fill: rgba(34, 34, 40, 0.82);\n  --dsw-alias-menu-group-header-fill: rgba(34, 34, 40, 0.94);\n  --dsw-menu-backdrop-filter: blur(28px) saturate(130%);\n}\n\n/* The page canvas stays flat: the 8px gaps around the floating sidebar card\n   then read exactly like the conversation column. The card carries its own\n   soft wash and sheen instead of tinting the page behind it. */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] {\n  background-color: #202024;\n  background-image: none;\n}\n\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] ::selection {\n  color: #e6e8ec;\n  background: rgba(122, 154, 200, 0.34);\n}\n\n/* --------------------------------------------------------------------------\n   2. Frosted surfaces\n   -------------------------------------------------------------------------- */\n\n/* Left sidebar as a floating frosted card. The card lives on a pseudo-element\n   because backdrop-filter on the column itself becomes the containing block\n   for the window-chrome toggle (`position: fixed`), which traps the button\n   inside the sidebar's overflow and hides it. */\nhtml[data-dsh-mist-ink][data-windows-titlebar] body[data-ds-dark-theme] [class*='_frame'] {\n  background: transparent !important;\n}\n\n/* The stock Windows content corner cuts a notch out of the conversation\n   header where it meets the sidebar; the floating card provides its own edge. */\nhtml[data-dsh-mist-ink][data-windows-titlebar] body[data-ds-dark-theme] [class*='centerCol'] {\n  border-radius: 0 !important;\n  corner-shape: initial !important;\n}\n\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol'] {\n  position: relative;\n  isolation: isolate;\n  padding: 8px;\n  background: transparent !important;\n  border-right: none !important;\n  box-shadow: none !important;\n}\n\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol']::before {\n  content: '';\n  position: absolute;\n  inset: 8px;\n  z-index: -1;\n  border: 0.5px solid rgba(255, 255, 255, 0.07);\n  border-radius: 16px;\n  background:\n    radial-gradient(120% 90% at 0% 0%, rgba(255, 255, 255, 0.06), transparent 58%),\n    linear-gradient(\n      180deg,\n      rgba(38, 38, 45, var(--dsh-mi-a-sidebar)),\n      rgba(27, 27, 32, var(--dsh-mi-a-sidebar))\n    );\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(var(--dsh-mi-blur-sidebar)) saturate(112%) !important;\n  pointer-events: none;\n}\n\n/* The sidebar root carries its own opaque fill and an inline pixel width. Keep\n   the fill off in every pointer state (its class list gains/loses \"quietBars\")\n   and pin the width to the padded column so its content cannot spill past the\n   card's right edge. */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol'] [class*='_root'] {\n  background: transparent !important;\n  background-image: none !important;\n}\n\n/* The session tree fades into the sidebar fill at its bottom edge. The stock\n   token now carries the darker caption color, so repaint the fade in the\n   card's own tone instead of letting it read as a black band. */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol'] [class*='_fade'] {\n  background: linear-gradient(to bottom, transparent, rgba(29, 29, 34, 0.96)) !important;\n}\n\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol'] > [class*='_root'],\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol'] > [data-slot] > [class*='_root'],\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol'] > * > [class*='_root'] {\n  width: 100% !important;\n}\n\n/* Collapsed rail: full-bleed glass, no floating card inset. */\nhtml[data-dsh-mist-ink][data-sidebar-collapsed] body[data-ds-dark-theme] [class*='sidebarCol'],\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [data-sidebar-collapsed] [class*='sidebarCol'] {\n  padding: 0;\n}\n\nhtml[data-dsh-mist-ink][data-sidebar-collapsed] body[data-ds-dark-theme] [class*='sidebarCol']::before,\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [data-sidebar-collapsed] [class*='sidebarCol']::before {\n  inset: 0;\n  border-width: 0;\n  border-radius: 0;\n  box-shadow: none;\n}\n\n/* The Windows caption strip uses the same solid fill as the native caption\n   buttons (the token drives `setTitleBarOverlay`), so both halves of the chrome\n   read as one surface. */\nhtml[data-dsh-mist-ink][data-windows-titlebar] body[data-ds-dark-theme] [class*='_frame']::before {\n  background: var(--dsw-specific-sidebar-fill) !important;\n  border-bottom: 0.5px solid rgba(255, 255, 255, 0.04);\n  backdrop-filter: blur(var(--dsh-mi-blur-menu)) saturate(108%) !important;\n}\n\n/* Right-hand details column. */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='rightbarCol'] {\n  background:\n    linear-gradient(\n      180deg,\n      rgba(40, 40, 47, var(--dsh-mi-a-panel)),\n      rgba(31, 31, 37, var(--dsh-mi-a-panel))\n    ) !important;\n  border-left: 0.5px solid rgba(255, 255, 255, 0.07) !important;\n  backdrop-filter: blur(var(--dsh-mi-blur-panel)) saturate(114%) !important;\n}\n\n/* Composer card. The blur lives on a pseudo-element, not on the card: a\n   filtered card becomes the backdrop root for its own animated children (the\n   send button transition, the pending dot), and Chromium repaints the whole\n   surface every frame there. The card keeps an inset ring instead of a border\n   so hover never changes layout geometry. */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [data-composer-card] {\n  position: relative;\n  isolation: isolate;\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow:\n    0 0 0 0.5px rgba(255, 255, 255, 0.075),\n    0 0 28px rgba(152, 174, 206, 0.05),\n    0 0 70px rgba(128, 148, 178, 0.03),\n    0 16px 40px rgba(0, 0, 0, 0.22),\n    inset 0 1px rgba(255, 255, 255, 0.06) !important;\n}\n\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [data-composer-card]::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  border-radius: inherit;\n  background:\n    radial-gradient(120% 100% at 0% 0%, rgba(255, 255, 255, 0.04), transparent 56%),\n    linear-gradient(\n      155deg,\n      rgba(45, 45, 53, var(--dsh-mi-a-card)),\n      rgba(34, 34, 41, var(--dsh-mi-a-card))\n    );\n  backdrop-filter: blur(var(--dsh-mi-blur-card)) saturate(115%) !important;\n  pointer-events: none;\n}\n\n/* Dialogs and the settings panel. */\nhtml[data-dsh-mist-ink] body[data-ds-dark-theme] [role='dialog'] {\n  background:\n    linear-gradient(\n      160deg,\n      rgba(39, 39, 46, var(--dsh-mi-a-panel)),\n      rgba(31, 31, 37, var(--dsh-mi-a-panel))\n    ) !important;\n  border-color: rgba(255, 255, 255, 0.08) !important;\n  box-shadow:\n    0 30px 80px rgba(0, 0, 0, 0.42),\n    inset 0 1px rgba(255, 255, 255, 0.05) !important;\n  backdrop-filter: blur(var(--dsh-mi-blur-panel)) saturate(116%) !important;\n}\n\n/* --------------------------------------------------------------------------\n   3. Settings row for the glass intensity slider\n   -------------------------------------------------------------------------- */\nhtml[data-dsh-mist-ink] .mi-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 16px 0;\n  border-bottom: 0.5px solid var(--dsw-alias-border-l2);\n}\n\nhtml[data-dsh-mist-ink] .mi-copy {\n  min-width: 0;\n}\n\nhtml[data-dsh-mist-ink] .mi-title {\n  color: var(--dsw-alias-label-primary);\n  font-size: 14px;\n  line-height: 20px;\n}\n\nhtml[data-dsh-mist-ink] .mi-desc {\n  color: var(--dsw-alias-label-secondary);\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 18px;\n}\n\nhtml[data-dsh-mist-ink] .mi-control {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 0 0 auto;\n}\n\nhtml[data-dsh-mist-ink] .mi-control input[type='range'] {\n  width: 168px;\n  height: 20px;\n  accent-color: var(--dsw-alias-brand-primary);\n  cursor: pointer;\n}\n\nhtml[data-dsh-mist-ink] .mi-value {\n  min-width: 64px;\n  color: var(--dsw-alias-label-secondary);\n  font-size: 12px;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n\n@media (max-width: 640px) {\n  html[data-dsh-mist-ink] .mi-row {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 10px;\n  }\n\n  html[data-dsh-mist-ink] .mi-control {\n    justify-content: space-between;\n  }\n\n  html[data-dsh-mist-ink] .mi-control input[type='range'] {\n    width: 100%;\n  }\n}\n\n/* --------------------------------------------------------------------------\n   4. Fallbacks\n   -------------------------------------------------------------------------- */\n@media (prefers-reduced-transparency: reduce) {\n  html[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='sidebarCol']::before {\n    background: #1d1d22 !important;\n    backdrop-filter: none;\n  }\n\n  html[data-dsh-mist-ink] body[data-ds-dark-theme] [class*='rightbarCol'] {\n    background: #26262b !important;\n    backdrop-filter: none;\n  }\n\n  html[data-dsh-mist-ink] body[data-ds-dark-theme] [data-composer-card]::before,\n  html[data-dsh-mist-ink] body[data-ds-dark-theme] [role='dialog'] {\n    background: #26262b !important;\n    backdrop-filter: none;\n  }\n\n  html[data-dsh-mist-ink][data-windows-titlebar] body[data-ds-dark-theme] [class*='_frame']::before {\n    background: var(--dsw-specific-sidebar-fill) !important;\n    backdrop-filter: none;\n  }\n}\n"

    /* Always present while the plugin is loaded, even when the theme is off:
       the little palette button is the switch that turns the theme back on. */
    const CONTROL_CSS = `
      .mi-toggle-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        position: relative;
        z-index: 3;
        width: 28px;
        height: 28px;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--dsw-alias-label-secondary, #a9aeb6);
        cursor: pointer;
        transition: background-color .16s ease, color .16s ease, opacity .16s ease;
      }
      .mi-toggle-btn:hover {
        background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, .07));
        color: var(--dsw-alias-label-primary, #d2d4d9);
      }
      .mi-toggle-btn:focus-visible {
        outline: 2px solid var(--dsw-alias-state-business-primary, #8fb0e0);
        outline-offset: 1px;
      }
      .mi-toggle-btn.is-off {
        color: var(--dsw-alias-label-dimmed, #6f747c);
        opacity: .72;
      }
      .mi-toggle-btn svg { display: block; width: 16px; height: 16px; }

      .mi-panel {
        position: fixed;
        z-index: 2147483000;
        width: 300px;
        box-sizing: border-box;
        padding: 14px;
        border: 1px solid rgba(255, 255, 255, .10);
        border-radius: 14px;
        background: rgba(35, 35, 42, .97);
        color: #e6e8ec;
        box-shadow: 0 18px 50px rgba(0, 0, 0, .52), inset 0 1px rgba(255, 255, 255, .05);
        backdrop-filter: blur(18px) saturate(120%);
        font: 13px/1.5 "Segoe UI", "Microsoft YaHei UI", system-ui, sans-serif;
      }
      .mi-panel[hidden] { display: none; }
      .mi-panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
      .mi-panel-title { font-size: 14px; font-weight: 600; line-height: 20px; color: #e6e8ec; }
      .mi-panel-sub { margin-top: 2px; font-size: 11px; line-height: 16px; color: #90959e; }
      .mi-panel-body { margin-top: 14px; padding-top: 12px; border-top: .5px solid rgba(255, 255, 255, .08); }
      .mi-panel-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; font-size: 12px; color: #c6c9cf; }
      .mi-panel-row + input[type="range"] { margin-top: 8px; }
      .mi-panel input[type="range"] {
        display: block;
        width: 100%;
        height: 20px;
        margin: 0;
        accent-color: #9ab8e6;
        cursor: pointer;
      }
      .mi-panel-value { font-variant-numeric: tabular-nums; color: #90959e; }
      .mi-panel-foot { margin-top: 12px; font-size: 11px; line-height: 16px; color: #7f848d; }

      .mi-switch { position: relative; display: inline-flex; flex: 0 0 auto; width: 36px; height: 20px; }
      .mi-switch input { position: absolute; inset: 0; width: 100%; height: 100%; margin: 0; opacity: 0; cursor: pointer; }
      .mi-switch span {
        position: absolute;
        inset: 0;
        border-radius: 999px;
        background: rgba(255, 255, 255, .16);
        transition: background-color .18s ease;
        pointer-events: none;
      }
      .mi-switch span::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #d2d4d9;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .35);
        transition: transform .18s ease, background-color .18s ease;
      }
      .mi-switch input:checked + span { background: #8fb0e0; }
      .mi-switch input:checked + span::after { transform: translateX(16px); background: #ffffff; }
      .mi-switch input:focus-visible + span { outline: 2px solid #8fb0e0; outline-offset: 2px; }

      .mi-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 16px 0;
        border-bottom: .5px solid rgba(255, 255, 255, .08);
      }
      .mi-copy { min-width: 0; }
      .mi-title { color: var(--dsw-alias-label-primary, #d2d4d9); font-size: 14px; line-height: 20px; }
      .mi-desc { margin-top: 4px; color: var(--dsw-alias-label-secondary, #a9aeb6); font-size: 12px; line-height: 18px; }
      .mi-control { display: flex; align-items: center; gap: 12px; flex: 0 0 auto; }
      .mi-control input[type="range"] { width: 168px; height: 20px; accent-color: var(--dsw-alias-brand-primary, #dfe2e7); cursor: pointer; }
      .mi-value { min-width: 64px; color: var(--dsw-alias-label-secondary, #a9aeb6); font-size: 12px; font-variant-numeric: tabular-nums; text-align: right; }
    `

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

    const readStoredEnabled = () => {
      try {
        return window.localStorage.getItem(ENABLED_KEY) !== '0'
      } catch {
        return true
      }
    }

    let glass = readStoredGlass()
    let enabled = readStoredEnabled()
    let themeStyle = null
    let controlStyle = null
    let button = null
    let panel = null
    let panelToggle = null
    let panelRange = null
    let panelValue = null
    let observer = null
    let poll = null

    const glassListeners = new Set()
    const enabledListeners = new Set()

    const subscribeGlass = (listener) => {
      glassListeners.add(listener)
      return () => glassListeners.delete(listener)
    }

    const subscribeEnabled = (listener) => {
      enabledListeners.add(listener)
      return () => enabledListeners.delete(listener)
    }

    const getGlass = () => glass
    const getEnabled = () => enabled

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

    const clearGlassVariables = () => {
      const root = document.documentElement
      for (const name of GLASS_VARIABLES) root.style.removeProperty(name)
    }

    const ensureControlStyle = () => {
      if (controlStyle && controlStyle.isConnected) return
      controlStyle = document.createElement('style')
      controlStyle.dataset.plugin = 'dsh-mist-ink-theme'
      controlStyle.dataset.pluginCss = 'dsh-mist-ink-theme/control.css'
      controlStyle.textContent = CONTROL_CSS
      document.head.appendChild(controlStyle)
    }

    const ensureThemeStyle = () => {
      if (themeStyle && themeStyle.isConnected) return
      themeStyle = document.createElement('style')
      themeStyle.dataset.plugin = 'dsh-mist-ink-theme'
      themeStyle.dataset.pluginCss = 'dsh-mist-ink-theme/theme.css'
      themeStyle.textContent = THEME_CSS
      document.head.appendChild(themeStyle)
    }

    const keepThemeStyleLast = () => {
      if (!enabled) return
      ensureThemeStyle()
      if (typeof document.head.querySelectorAll !== 'function') return
      const sheets = [...document.head.querySelectorAll('style, link[rel="stylesheet"]')]
      const last = sheets[sheets.length - 1]
      if (last && last !== themeStyle) document.head.appendChild(themeStyle)
    }

    const applyTheme = () => {
      if (typeof document === 'undefined') return
      applyGlass()
      document.documentElement.setAttribute(ATTRIBUTE, '')
      ensureThemeStyle()
      keepThemeStyleLast()
    }

    const teardownTheme = () => {
      document.documentElement.removeAttribute(ATTRIBUTE)
      if (themeStyle) themeStyle.remove()
      clearGlassVariables()
    }

    const syncControls = () => {
      if (button) {
        button.classList.toggle('is-off', !enabled)
        button.setAttribute('aria-pressed', String(enabled))
        button.title = enabled ? '雾墨主题：开启（点击设置）' : '雾墨主题：关闭（点击设置）'
        button.setAttribute('aria-label', button.title)
      }
      if (panelToggle) panelToggle.checked = enabled
      if (panelRange) {
        panelRange.value = String(glass)
        panelRange.disabled = !enabled
      }
      if (panelValue) panelValue.textContent = `${glassLabel(glass)} · ${glass}%`
      if (panel) {
        const foot = panel.querySelector('.mi-panel-foot')
        if (foot) foot.textContent = enabled
          ? '关掉开关即恢复 DSH 默认深色外观。'
          : '当前为 DSH 默认深色外观；打开开关启用雾墨。'
      }
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
      for (const listener of [...glassListeners]) listener()
      syncControls()
    }

    const setEnabled = (next, persist) => {
      const value = Boolean(next)
      if (value === enabled) return
      enabled = value
      if (persist) {
        try {
          window.localStorage.setItem(ENABLED_KEY, value ? '1' : '0')
        } catch {
          /* Storage can be unavailable in hardened browser contexts. */
        }
      }
      if (enabled) applyTheme()
      else teardownTheme()
      for (const listener of [...enabledListeners]) listener()
      syncControls()
    }

    const paletteIcon = () => `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 0 18c1.7 0 2.2-1.1 2.2-2.2 0-.7-.3-1.3-.7-1.8-.4-.5-.7-1-.7-1.6 0-1 .8-1.9 1.9-1.9H16a5 5 0 0 0 5-5c0-3.3-4-6.5-9-6.5Z"/>
        <circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none"/>
        <circle cx="10.5" cy="6.8" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="6.8" r="1" fill="currentColor" stroke="none"/>
      </svg>`

    const buildPanel = () => {
      const el = document.createElement('div')
      el.className = 'mi-panel'
      el.hidden = true
      el.innerHTML = `
        <div class="mi-panel-head">
          <div>
            <div class="mi-panel-title">雾墨 Mist Ink</div>
            <div class="mi-panel-sub">低对比石墨深灰 · 毛玻璃</div>
          </div>
          <label class="mi-switch" title="开关主题">
            <input type="checkbox" aria-label="开启雾墨主题" />
            <span></span>
          </label>
        </div>
        <div class="mi-panel-body">
          <div class="mi-panel-row">
            <span>毛玻璃强度</span>
            <span class="mi-panel-value"></span>
          </div>
          <input type="range" min="0" max="100" step="5" aria-label="毛玻璃强度" />
        </div>
        <div class="mi-panel-foot"></div>
      `
      document.body.appendChild(el)
      panelToggle = el.querySelector('input[type="checkbox"]')
      panelRange = el.querySelector('input[type="range"]')
      panelValue = el.querySelector('.mi-panel-value')
      panelToggle.addEventListener('change', () => setEnabled(panelToggle.checked, true))
      panelRange.addEventListener('input', () => setGlass(Number(panelRange.value), true))
      return el
    }

    const positionPanel = () => {
      if (!panel || !button || panel.hidden) return
      const rect = button.getBoundingClientRect()
      const width = 300
      const margin = 8
      let left = rect.right + 8
      if (left + width > window.innerWidth - margin) left = rect.left - width - 8
      left = Math.max(margin, Math.min(left, window.innerWidth - width - margin))
      let top = rect.bottom + 8
      const estimated = 210
      if (top + estimated > window.innerHeight - margin) top = Math.max(margin, rect.top - estimated - 8)
      panel.style.left = `${Math.round(left)}px`
      panel.style.top = `${Math.round(top)}px`
    }

    const togglePanel = (force) => {
      if (!panel) panel = buildPanel()
      const next = typeof force === 'boolean' ? force : panel.hidden
      panel.hidden = !next
      if (next) {
        syncControls()
        positionPanel()
      }
    }

    const mountButton = () => {
      if (typeof document.querySelector !== 'function') return false
      if (button && !button.isConnected) button = null
      const row = document.querySelector('[class*="_logoRow"]')
      if (!row) return false
      if (!button) {
        button = document.createElement('button')
        button.type = 'button'
        button.className = 'mi-toggle-btn'
        button.dataset.mistInkToggle = ''
        button.innerHTML = paletteIcon()
        button.addEventListener('click', (event) => {
          event.stopPropagation()
          togglePanel()
        })
      }
      const collapse = row.querySelector('button[class*="_toggle"]')
        || row.querySelector('button[aria-label*="侧边栏"]')
      if (collapse) {
        if (button.nextElementSibling !== collapse) row.insertBefore(button, collapse)
      } else if (row.firstElementChild && row.firstElementChild !== button) {
        row.insertBefore(button, row.firstElementChild)
      }
      syncControls()
      return true
    }

    const onDocumentPointerDown = (event) => {
      if (!panel || panel.hidden) return
      if (panel.contains(event.target) || (button && button.contains(event.target))) return
      togglePanel(false)
    }

    const onKeyDown = (event) => {
      if (event.ctrlKey && event.altKey && !event.shiftKey && (event.key === 'm' || event.key === 'M')) {
        event.preventDefault()
        setEnabled(!enabled, true)
      }
      if (event.key === 'Escape' && panel && !panel.hidden) togglePanel(false)
    }

    const onViewportChange = () => {
      if (panel && !panel.hidden) positionPanel()
    }

    function GlassRow() {
      const React = require('react')
      const value = React.useSyncExternalStore(subscribeGlass, getGlass, getGlass)
      const on = React.useSyncExternalStore(subscribeEnabled, getEnabled, getEnabled)
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'div',
          { className: 'mi-row' },
          React.createElement(
            'div',
            { className: 'mi-copy' },
            React.createElement('div', { className: 'mi-title' }, '雾墨主题'),
            React.createElement(
              'div',
              { className: 'mi-desc' },
              '关闭后立即恢复 DSH 默认深色外观；也可以随时点侧边栏顶部的调色板按钮切换。'
            )
          ),
          React.createElement(
            'label',
            { className: 'mi-switch', title: '开关主题' },
            React.createElement('input', {
              type: 'checkbox',
              checked: on,
              'aria-label': '开启雾墨主题',
              onChange: (event) => setEnabled(event.target.checked, true),
            }),
            React.createElement('span')
          )
        ),
        React.createElement(
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
              disabled: !on,
              'aria-label': '毛玻璃强度',
              onChange: (event) => setGlass(Number(event.target.value), true),
            }),
            React.createElement('span', { className: 'mi-value' }, `${glassLabel(value)} · ${value}%`)
          )
        )
      )
    }

    function apply(ctx) {
      if (typeof document === 'undefined') return

      glass = readStoredGlass()
      enabled = readStoredEnabled()

      ctx.effect(() => {
        ensureControlStyle()
        if (enabled) applyTheme()
        else teardownTheme()
        mountButton()
        syncControls()

        document.addEventListener('pointerdown', onDocumentPointerDown, true)
        document.addEventListener('keydown', onKeyDown, true)
        window.addEventListener('resize', onViewportChange)

        observer = new MutationObserver(() => {
          if (enabled) {
            if (!document.documentElement.hasAttribute(ATTRIBUTE)) {
              document.documentElement.setAttribute(ATTRIBUTE, '')
            }
            ensureThemeStyle()
          }
        })
        observer.observe(document.documentElement, { attributes: true, attributeFilter: [ATTRIBUTE] })

        poll = window.setInterval(() => {
          ensureControlStyle()
          if (enabled) keepThemeStyleLast()
          mountButton()
        }, 1200)

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
          /* Settings UI is optional; the sidebar control is the fallback. */
        }

        return () => {
          if (typeof releaseRow === 'function') releaseRow()
          if (observer) observer.disconnect()
          if (poll) window.clearInterval(poll)
          document.removeEventListener('pointerdown', onDocumentPointerDown, true)
          document.removeEventListener('keydown', onKeyDown, true)
          window.removeEventListener('resize', onViewportChange)
          if (panel) panel.remove()
          if (button) button.remove()
          if (themeStyle) themeStyle.remove()
          if (controlStyle) controlStyle.remove()
          document.documentElement.removeAttribute(ATTRIBUTE)
          clearGlassVariables()
        }
      }, 'mist-ink: graphite palette, frosted glass and theme switch')
    }

    exports.apply = apply
    exports.inject = ['slots']
    return module.exports
  },
})
