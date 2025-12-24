---
title: 创建新应用
description: 让我们使用 obytes starter 创建一个 React Native 项目。
head:
  - tag: title
    content: 创建新应用 | React Native / Expo Starter
---

让我们使用 Obytes starter 创建一个全新的 React Native 项目。

## 环境要求

请先确保你的开发环境已安装以下工具：

- [React Native dev environment ](https://reactnative.dev/docs/environment-setup)
- [Node.js LTS release](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall), required only for macOS or Linux users
- [Pnpm](https://pnpm.io/installation)
- [Cursor](https://www.cursor.com/) is recommended but you can use [VS Code Editor](https://code.visualstudio.com/download).

## 初始化新项目

首先确保你的电脑上已安装 `pnpm`，如未安装可通过以下命令进行安装：

```bash
npm install -g pnpm
```

使用 `create-obytes-app` 命令开始创建你的项目：

```bash
npx create-obytes-app@latest MyApp
```

上述命令将会创建一个名为 `MyApp` 的 Expo 应用，并自动安装 starter 所需的全部依赖。

:::note
由于 starter 使用了 Expo custom dev client，以支持所有原生依赖，因此无法使用 Expo Go。你需要直接构建 App 并安装到你的模拟器或真实设备上进行开发和调试。
:::

:::note
请严格遵循 Android 应用命名规范，详见 [Android 官方文档](https://developer.android.com/build/configure-app-module)。命名需符合以下要求：

- 必须包含至少两个段（即包含一个及以上的点）
- 每个段必须以字母开头
- 仅允许使用字母、数字或下划线 [a-zA-Z0-9_]
:::

## 在 Cursor 或 VS Code 中打开项目

推荐使用 Cursor 作为本项目的代码编辑器。starter 已集成一系列推荐扩展、项目设置和代码片段，旨在提升你的开发体验。

使用以下命令通过 Cursor 打开项目：

```bash
cursor .
```

当你用 Cursor 打开项目时，会弹出提示安装推荐扩展。建议直接点击 `Install All`，一键安装全部推荐扩展。

为了确保代码能够被正确校验和格式化，强烈建议你安装全部推荐扩展。如果你不打算全部安装，至少应安装以下扩展，它们对代码校验和保存时的自动格式化至关重要：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwindcss IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

完整推荐扩展列表如下：

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [tailwindcss IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Code spell checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Cobalt 2 theme](https://marketplace.visualstudio.com/items?itemName=ahmadawais.theme-cobalt2)
- [Turbo console log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log)
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokallise.i18n-ally)
- [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)

## 启动应用

如果依赖安装成功，项目即可直接使用。由于我们采用了 expo custom dev client，可通过以下命令在模拟器或真机上运行项目：

```bash
# Run the app on iOS simulator
pnpm ios

# Run the app on Android simulator
pnpm android
```
