# 雾墨 · Mist Ink

> A softer graphite dark theme with frosted glass for the DeepSeek Harness Web GUI. Install with
> `dsh plugin --profile web add dsh-mist-ink-theme`, then make sure `dsh-mist-ink-theme` is listed in
> the profile's `dsh.profile.bundles` (the in-app plugin manager does this for you).

DSH Web GUI 的深色主题：把默认的近黑底换成石墨灰，整体降低对比度，并把左侧栏做成悬浮的毛玻璃卡片，输入区、右侧栏、弹层也带可调强度的毛玻璃。

- **只作用于深色模式**：浅色模式、布局、字号、字体和所有功能都不变。
- **随时开关**：侧边栏标题行左侧的调色板按钮打开主题面板，顶部开关一键启用/关闭；关闭后立即恢复 DSH 默认深色，再打开即回到雾墨。也可以按 `Ctrl+Alt+M` 快速切换。
- **毛玻璃强度可调**：主题面板和设置 → 通用 → 「毛玻璃强度」都能调，0% 为完全不透明，实时生效并记住。
- **零依赖、免构建运行**：客户端只是一个注入作用域 CSS 的模块，不联网、不读写会话。
- **无宿主副作用**：服务端 half 是空实现，不注册工具、不写文件、不发请求。

## 色板

| Token | 默认深色 | 雾墨 |
| --- | --- | --- |
| `--dsw-alias-bg-base` | `#151517` | `#202024` |
| `--dsw-alias-label-primary` | `#f9fafb` | `#d2d4d9` |
| `--dsw-alias-label-secondary` | `#cfd3d6` | `#a9aeb6` |
| `--dsw-alias-label-tertiary` | `#adb2b8` | `#90959e` |
| `--dsw-alias-bg-layer-1` | `#232324` | `#26262b` |
| `--dsw-alias-bg-layer-2` | `#2c2c2e` | `#2b2b31` |
| `--dsw-specific-sidebar-fill` | `#1b1b1c` | `#141418` |

正文对比度从约 **17.5:1** 降到 **11:1**，次要文字约 **7.3:1**，辅助说明约 **5.4:1**，都在 4.5:1 以上。

`--dsw-specific-sidebar-fill` 同时被 Windows 原生标题栏按钮读取（preload 通过 `setTitleBarOverlay` 同步），所以把它和网页标题条统一成同一个实色，窗口 chrome 左右两半才不会一深一浅。

## 毛玻璃

| 表面 | 处理 |
| --- | --- |
| 左侧栏 | 8px 外缝的悬浮卡片：16px 圆角、半透明冷灰渐变、`blur()`、0.5px 发丝边、左上反光；没有外投影 |
| Windows 顶栏 | 与最小化/最大化/关闭按钮同色的实色 chrome（`#141418`） |
| 右侧栏 | 半透明 + 模糊 + 左侧发丝边 |
| 输入区卡片 | 模糊放在伪元素上（见下），较高不透明度 + 双层柔光 + 左上反光 |
| 对话框 / 设置面板 | 半透明 + 模糊 + 大投影 |
| 菜单 / 弹层 | 通过 `--dsw-specific-menu` 与 `--dsw-menu-backdrop-filter` 调整 |

页面画布是纯色 `#202024`，和右侧对话区完全一致；浮动卡片四周的缝隙不会泛光。卡片自己的渐变和反光负责层次。

会话树底部原来那条 24px 渐隐会渐变到 `--dsw-specific-sidebar-fill`，在雾墨里单独改成了卡片底色，避免看起来像一条黑边。

### 为什么输入区的模糊在伪元素上

`backdrop-filter` 加在输入区卡片本身时，卡片会成为内部按钮（发送/停止）的滤镜根；Chromium 在按钮 hover 过渡/待机动画期间会不断重算整张卡片的背景模糊，表现为整屏闪烁。把模糊挪到卡片的 `::before` 上，按钮不再是滤镜元素的子节点，闪烁消失；卡片外框改用不占布局的 `box-shadow` ring，hover 也不会改变几何尺寸。

## 安装（发布版）

从 npm 安装（Web profile）：

```sh
dsh plugin --profile web add dsh-mist-ink-theme
```

然后确认 profile 的 `package.json` 里 `dsh.profile.bundles` 包含 `dsh-mist-ink-theme`。这个包通过 `cordis.patch.yml` 自带一条 `insert`，只有列进 bundles 才会被组合进插件树。

桌面版（desktop profile）由 Electron 应用独占管理，`dsh plugin --profile desktop` 会被拒绝；请用应用内的插件市场/插件管理安装，或按下面的本地开发方式手工接线。

上架后，应用内市场里点安装即可，市场会负责 dependencies 与 bundles 的接线。

## 本地开发安装

主题包位于 `themes/mist-ink`，通过一个 profile 插件条目加载：

1. 在 `~/.dsh/profiles/desktop/node_modules/` 下创建指向本目录的目录联接（junction）。
2. 在 `~/.dsh/profiles/desktop/cordis.patch.yml` 末尾加入：

```yaml
- insert:
    - id: dsh-mist-ink-theme
      name: dsh-mist-ink-theme
```

3. DSH 会热重载插件条目；如果页面没有立即变化，刷新一次 Web GUI。

安装前的 profile 原始文件备份在 `backup/`。

## 开发

```sh
node scripts/build.mjs      # 把 src/theme.css 内联进 lib/client.js
node test/client.test.mjs   # 不依赖浏览器的客户端冒烟测试
```

修改样式只改 `src/theme.css`，然后重新 build；改滑杆逻辑改 `src/client.js`。

预览页：直接用浏览器打开 `preview.html`；`preview.html?before` 看默认深色，`preview.html?settings` 看设置里的滑杆。

## 发布

npm 登录、GitHub 仓库初始化、awesome-dsh-plugin 上架 PR 的完整步骤在源码仓库的 `PUBLISHING.md` 里；npm 包只包含运行所需文件（不含开发脚本、测试和本地备份）。

## 卸载

删除 `cordis.patch.yml` 里那段 `insert`，再删掉 `node_modules` 下的目录联接即可；主题不会留下任何持久化数据（开关和滑杆值存在浏览器 `localStorage` 的 `dsh-mist-ink:enabled` 与 `dsh-mist-ink:glass`，可一并清除）。

## 许可

MIT，见 [LICENSE](LICENSE)。
