---
title: 推荐库
description: 基于使用场景的项目 React Native / Expo 库推荐。
head:
  - tag: title
    content: 推荐库 | React Native / Expo 入门模板
---

入门模板预装并配置了一套库。我们推荐您在项目中使用这些库。

下面我们列出了在项目中经常使用的其他库。这些库未包含在入门模板中，原因如下：

1. 它们适用于特定使用场景。
2. 它们需要大量的设置工作。

这样，您就可以只在需要时将它们添加到项目中，保持初始设置的简洁性。

### 状态管理：

入门模板默认配备 Zustand，但如果您的应用实现了大量工作流程，您可能需要使用 [XState](https://xstate.js.org/)，因为它在管理复杂工作流程和状态机方面更加强大。

例如，如果您有一个为用户创建新卡片的工作流程，且该工作流程包含许多步骤和条件，那么 Zustand 可能不是最佳选择，因为它更适合简单的状态管理，而 XState 则是这种情况下的最佳选择。

### 错误报告：

- [Sentry](https://sentry.io/welcome/)：在 JavaScript 生态系统中非常受欢迎的错误报告解决方案，与 Expo 有良好的集成。

### 通知：

通知没有一劳永逸的解决方案，但基于您的使用场景，我们推荐以下之一：

- [Expo 推送通知](https://docs.expo.dev/push-notifications/overview/)
- [OneSignal](https://onesignal.com/)

### 分析：

- [PostHog](https://posthog.com/docs/libraries/react-native)：易于设置和使用，并提供优质的免费层级。

- [Google Analytics](https://rnfirebase.io/analytics/usage)

### 图表：

- [Victory Native](https://github.com/FormidableLabs/victory-native-xl)

---

我们肯定遗漏了一些优秀的库，因此我们期待您在下面的评论区中添加它们。
