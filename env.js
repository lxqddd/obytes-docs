/* eslint-env node */
/*
 * 用于加载和验证环境变量的环境文件
 * 请谨慎对待；此文件不应导入到您的源码文件夹中。
 * 我们将环境变量分为两个部分：
 * 1. 客户端变量：这些变量用于客户端代码（src 文件夹）。
 * 2. 构建时变量：这些变量用于构建过程（app.config.ts 文件）。
 * 将此文件导入到 `app.config.ts` 文件中，以便在构建过程中使用环境变量。客户端变量可以使用 `app.config.ts` 文件中的 extra 字段传递给客户端。
 * 要在您的 `src` 文件夹中访问客户端环境变量，您可以从 `@env` 导入它们。例如：`import Env from '@env'`。
 */
/**
 * 第一部分：导入包并加载您的环境变量
 * 我们使用 dotenv 根据 APP_ENV 变量从 .env 文件中加载正确的变量（默认为 development）
 * APP_ENV 在执行命令时作为内联变量传递，例如：APP_ENV=staging pnpm build:android
 */
const z = require('zod');

const packageJSON = require('./package.json');
const path = require('path');
const APP_ENV = process.env.APP_ENV ?? 'development';
// eslint-disable-next-line no-undef
const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);

require('dotenv').config({
  path: envPath,
});

/**
 * 第二部分：为应用定义一些静态变量
 * 例如：bundle id、包名、应用名称。
 *
 * 您可以将它们添加到 .env 文件中，但我们认为最好将它们保存在这里，因为我们使用前缀基于 APP_ENV 生成这些值
 * 例如：如果 APP_ENV 是 staging，bundle id 将是 com.obytes.staging
 */

// TODO: 将这些值替换为您自己的值

const BUNDLE_ID = 'com.obytes'; // iOS bundle id
const PACKAGE = 'com.obytes'; // Android 包名
const NAME = 'ObytesApp'; // 应用名称
const EXPO_ACCOUNT_OWNER = 'obytes'; // Expo 账户所有者
const EAS_PROJECT_ID = 'c3e1075b-6fe7-4686-aa49-35b46a229044'; // EAS 项目 ID
const SCHEME = 'obytesApp'; // 应用方案

/**
 * 我们声明一个 withEnvSuffix 函数，它会基于 APP_ENV 为变量名添加后缀
 * 基于 APP_ENV 为环境变量添加后缀
 * @param {string} name
 * @returns  {string}
 */

const withEnvSuffix = (name) => {
  return APP_ENV === 'production' ? name : `${name}.${APP_ENV}`;
};

/**
 * 第二部分：定义您的环境变量schema
 * 我们使用 zod 来定义我们的环境变量 schema
 *
 * 我们将环境变量分为两个部分：
 *    1. client：这些变量用于客户端代码（`src` 文件夹）。
 *    2. buildTime：这些变量用于构建过程（app.config.ts 文件）。您可以将它们视为服务端变量。
 *
 * 主要规则：
 *    1. 如果您需要在客户端使用变量，您应该将其添加到 client schema；否则，您应该将其添加到 buildTime schema。
 *    2. 每当您想要添加新变量时，您应该根据前面的规则将其添加到正确的 schema 中，然后将其添加到相应的对象（_clientEnv 或 _buildTimeEnv）中。
 *
 * 注意：`z.string()` 意味着变量存在并且可以是空字符串，但不能是 `undefined`。
 * 如果您希望变量是必需的，您应该使用 `z.string().min(1)` 代替。
 * 在此处阅读更多关于 zod 的信息：https://zod.dev/?id=strings
 *
 */

const client = z.object({
  APP_ENV: z.enum(['development', 'staging', 'production']),
  NAME: z.string(),
  SCHEME: z.string(),
  BUNDLE_ID: z.string(),
  PACKAGE: z.string(),
  VERSION: z.string(),

  // 在此处添加您的客户端环境变量
  API_URL: z.string(),
  VAR_NUMBER: z.number(),
  VAR_BOOL: z.boolean(),
});

const buildTime = z.object({
  EXPO_ACCOUNT_OWNER: z.string(),
  EAS_PROJECT_ID: z.string(),
  // 在此处添加您的构建时环境变量
  SECRET_KEY: z.string(),
});

/**
 * @type {Record<keyof z.infer<typeof client> , unknown>}
 */
const _clientEnv = {
  APP_ENV,
  NAME: NAME,
  SCHEME: SCHEME,
  BUNDLE_ID: withEnvSuffix(BUNDLE_ID),
  PACKAGE: withEnvSuffix(PACKAGE),
  VERSION: packageJSON.version,

  // 在此处也添加您的环境变量
  API_URL: process.env.API_URL,
  VAR_NUMBER: Number(process.env.VAR_NUMBER),
  VAR_BOOL: process.env.VAR_BOOL === 'true',
};

/**
 * @type {Record<keyof z.infer<typeof buildTime> , unknown>}
 */
const _buildTimeEnv = {
  EXPO_ACCOUNT_OWNER,
  EAS_PROJECT_ID,
  // 在此处也添加您的环境变量
  SECRET_KEY: process.env.SECRET_KEY,
};

/**
 * 第三部分：合并和验证您的环境变量
 * 我们使用 zod 根据上面定义的 schema 来验证我们的环境变量
 * 如果验证失败，我们会抛出一个错误，并在控制台记录一个关于缺失变量的详细消息
 * 如果验证通过，我们会导出合并和解析后的环境变量，以在 app.config.ts 文件中使用，以及一个 ClientEnv 对象以在客户端代码中使用
 **/
const _env = {
  ..._clientEnv,
  ..._buildTimeEnv,
};

const merged = buildTime.merge(client);
const parsed = merged.safeParse(_env);

if (parsed.success === false) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,

    `\n❌ Missing variables in .env.${APP_ENV} file, Make sure all required variables are defined in the .env.${APP_ENV} file.`,
    `\n💡 Tip: If you recently updated the .env.${APP_ENV} file and the error still persists, try restarting the server with the -c flag to clear the cache.`
  );
  throw new Error(
    'Invalid environment variables, Check terminal for more details '
  );
}

const Env = parsed.data;
const ClientEnv = client.parse(_clientEnv);

module.exports = {
  Env,
  ClientEnv,
  withEnvSuffix,
};
