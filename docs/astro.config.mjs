import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import starlightLlmsTxt from 'starlight-llms-txt';

const site = 'https://starter.obytes.com/';

// https://astro.build/config
export default defineConfig({
  site: 'https://starter.obytes.com/',
  integrations: [
    starlight({
      title: 'Obytes Starter | React Native Template',
      plugins: [starlightLlmsTxt()],
      description: `Your All-in-One Solution for Building Outstanding React Native/Expo Apps. From editor setup to store submission, we've got you covered!`,
      expressiveCode: {
        themes: ['dracula', 'solarized-light'],
      },
      logo: {
        light: '/src/assets/logo-titled.svg',
        dark: '/src/assets/logo-titled.svg',
        replacesTitle: true,
      },
      components: {
        LastUpdated: './src/components/LastUpdated.astro',
      },
      social: {
        github: 'https://github.com/obytes/react-native-template-obytes',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
        },
        {
          tag: 'meta',
          attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&display=swap',
          },
        },
        {
          tag: 'script',
          attrs: {
            src: 'https://cdn.jsdelivr.net/npm/@minimal-analytics/ga4/dist/index.js',
            async: true,
          },
        },
        {
          tag: 'script',
          content: ` window.minimalAnalytics = {
            trackingId: 'G-GQ45JJD1JC',
            autoTrack: true,
          };`,
        },
      ],
      sidebar: [
        {
          label: '概述',
          link: '/overview',
        },
        {
          label: '快速开始',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: '创建新应用',
              link: '/getting-started/create-new-app/',
            },
            {
              label: '自定义应用',
              link: '/getting-started/customize-app/',
            },
            {
              label: '规范与约定',
              link: '/getting-started/rules-and-conventions/',
            },
            {
              label: '项目结构',
              link: '/getting-started/project-structure/',
            },
            {
              label: '环境变量与配置',
              link: '/getting-started/environment-vars-config/',
            },
          ],
        },

        {
          label: 'UI 组件与主题',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'UI 与主题',
              link: '/ui-and-theme/ui-theming/',
            },
            {
              label: '字体',
              link: '/ui-and-theme/fonts/',
            },
            {
              label: 'UI 组件',
              link: '/ui-and-theme/components/',
            },
            {
              label: '表单',
              link: '/ui-and-theme/forms/',
            },
          ],
        },
        {
          label: '使用指南',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: '导航',
              link: '/guides/navigation/',
            },
            {
              label: '认证',
              link: '/guides/authentication/',
            },
            {
              label: '数据获取',
              link: '/guides/data-fetching/',
            },
            {
              label: '国际化',
              link: '/guides/internationalization/',
            },
            {
              label: '持久化存储',
              link: '/guides/storage/',
            },
            {
              label: '升级依赖',
              link: '/guides/upgrading-deps/',
            },
          ],
        },
        {
          label: '实践指南',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Sentry 设置',
              link: '/recipes/sentry-setup/',
              badge: 'new',
            },
          ],
        },
        {
          label: '测试',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: '概述',
              link: '/testing/overview/',
            },
            {
              label: '单元测试',
              link: '/testing/unit-testing/',
            },
            {
              label: '端到端测试',
              link: '/testing/end-to-end-testing/',
            },
          ],
        },
        {
          label: 'CI/CD',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: '概述',
              link: '/ci-cd/overview/',
            },
            {
              label: '发布流程',
              link: '/ci-cd/app-releasing-process/',
            },
            {
              label: '工作流参考',
              link: '/ci-cd/workflows-references/',
            },
          ],
        },
        {
          label: '库推荐',
          link: '/libraries-recommendation',
        },
        {
          label: '常见问题',
          link: '/faq',
          badge: 'new',
        },
        {
          label: '更新日志',
          link: '/changelog',
        },
        {
          label: '如何贡献',
          link: '/how-to-contribute',
        },
        {
          label: '评价',
          link: '/reviews',
          badge: 'new',
        },
        {
          label: '保持更新',
          link: '/stay-updated',
        },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: true,
    }),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
