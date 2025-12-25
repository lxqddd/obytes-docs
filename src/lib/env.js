/*
 * 此文件不应修改；使用项目根目录下的 `env.js` 添加您的客户端环境变量。
 * 如果您从 `@env` 导入 `Env`，将加载此文件。
 * 您只能在此处访问客户端环境变量。
 * 注意：我们使用 js 文件，因此可以加载客户端环境变量类型
 */

import Constants from 'expo-constants';
/**
 *  @type {typeof import('../../env.js').ClientEnv}
 */
//@ts-ignore // 不要担心 TypeScript 这里；我们知道我们正在将正确的环境变量传递给 `app.config.ts` 中的 `extra`。
export const Env = Constants.expoConfig?.extra ?? {};
