# 发布清单

> 目标：把这个主题作为标准 DSH 插件发布到 npm，并上架应用内市场（awesome-dsh-plugin）。
> 包名 `dsh-mist-ink-theme` 已确认在 npm 上可用（2026-10-25）。已生成可发布 tarball：
> `../dsh-mist-ink-theme-0.1.0.tgz`。

## 0. 发布前检查

```sh
node scripts/build.mjs       # lib/client.js 必须是最新构建
node test/client.test.mjs    # 客户端冒烟测试
```

然后按需修改 `package.json`：

- `author`：现在写的是 `Mist Ink contributors`，可改成你的名字/ID。
- `repository` / `homepage` / `bugs`：建好 GitHub 仓库后补上。
- 版本号：首次发布用 `0.1.0`；之后每次发布先改 `version`（同时改 `dsh.plugin.json` 的 `version`）。

市场列表需要 1–3 张干净截图（1440×900、不要带私人会话内容）。把图片放进 `screenshots/`，并在仓库根加 `screenshots.json`：

```json
["screenshots/desktop-dark.png", "screenshots/settings.png"]
```

## 1. 发布到 npm

本机最省事的方式：双击 `themes/publish-mist-ink.cmd`，它会先执行 `pnpm login`，登录成功后让你确认再发布。

手动执行也可以（本机没有 `npm` CLI，用 DSH 自带的 Node + pnpm）：

```powershell
$node = "C:\Users\nrw01\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\node\bin\node.exe"
$pnpm = "C:\Users\nrw01\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\pnpm\bin\pnpm.mjs"

# 登录（会打开浏览器，或在控制台提示用户名/密码/邮箱；只需一次）
& $node $pnpm login

# 发布（在 themes/mist-ink 目录里执行）
& $node $pnpm publish --access public --no-git-checks
```

如果账号开了 2FA，发布时按提示输入 6 位动态码。

验证：

```powershell
& $node $pnpm view dsh-mist-ink-theme version
```

## 2. 建 GitHub 仓库

把 `themes/mist-ink/` 作为仓库根（`backup/`、`*.tgz`、`node_modules/` 已在 `.gitignore` 里排除）：

```sh
git init
git add .
git commit -m "feat: Mist Ink theme for DSH"
git remote add origin https://github.com/<owner>/dsh-mist-ink-theme.git
git push -u origin main
```

- 仓库加 topic：`dsh-plugin`。
- 在 `package.json` 补 `repository`、`homepage`、`bugs`，再发一个 patch 版本（或至少提交）。
- 可选：在 GitHub Release 附上 `dsh-mist-ink-theme-0.1.0.tgz`，给不走 npm 的用户；Release 资产名不要带版本号，或把 `tarball:` URL 钉到具体 tag。

## 3. 上架 awesome-dsh-plugin

市场只接受精选列表 [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) 里的来源。Fork 后新增**一个文件** `data/plugins/<owner>__dsh-mist-ink-theme.yml`：

```yaml
url: https://github.com/<owner>/dsh-mist-ink-theme
name: <owner>/dsh-mist-ink-theme
category: theme
description:
  en: Low-contrast graphite dark theme with a frosted-glass sidebar, composer and panels for the DSH Web GUI.
  zh: 低对比度石墨灰深色主题，侧边栏、输入区与弹层使用可调强度的毛玻璃。
```

要求（来自 contributing.md）：

- 仓库的 `package.json` 声明 `dsh.bundle`（本包已有：`"bundle": { "patch": "./cordis.patch.yml" }`）；
- 仓库创建满 **1 天** 才能提 PR；
- 真实可用代码，不是占位/纯 README；
- 仓库加 `dsh-plugin` topic；
- 一个 PR 最多 3 条；
- 描述只写功能，不夸大。

合并后站点和 dshmarket 会自动重建索引，通常一天内可见。之后用户就能在「设置 → 插件」里点安装，市场会负责 dependencies 和 `dsh.profile.bundles` 接线。

## 4. 发布后自测

Web profile：

```sh
dsh plugin --profile web add dsh-mist-ink-theme
```

确认 profile 的 `package.json` 里 `dsh.profile.bundles` 包含 `dsh-mist-ink-theme`，刷新页面即可。桌面版从市场安装即可。

## 需要我代跑吗

`pnpm publish` 需要你的 npm 登录态。你在本机执行一次 `pnpm login`（或临时设置 `NPM_TOKEN`）后告诉我，我可以直接跑发布并核对 npm 上的产物；GitHub 建仓和 PR 需要你的 GitHub 账号，命令和 YAML 已在上文。
