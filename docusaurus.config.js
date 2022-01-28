// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ngpig\'s Site',
  //tagline: 'Dinosaurs are cool',
  url: 'https://ngpig.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'ngpig', // Usually your GitHub org/user name.
  projectName: 'ngpig', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [//添加第二个博客
      '@docusaurus/plugin-content-blog',
      {
        id: 'leetcode',
        routeBasePath: 'leetcode',
        path: './leetcode',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ngpig\'s Site',
        logo: {
          alt: 'Ngpig\'s Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '笔记',
          },
          {to: '/leetcode', label: '刷题', position: 'left'},//添加第二个博客
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/niangaopig',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '笔记',
            items: [
              {
                label: 'Html',
                to: '/docs/html',
              },
              {
                label: 'CSS',
                to: '/docs/css',
                },
              {
                label: 'JavaScript',
                to: '/docs/javascrpit',
              },
            ],
          },
          {
            title: '刷刷刷刷题',
            items: [
              {
                label: 'LeetCode 热题 HOT 100',
                to: 'https://leetcode-cn.com/problem-list/2cktkvj/',
              },
              {
                label: '复习题',
                to: 'https://www.ngpig.cn/leetcode',
              },
            ],
          },
          {
            title: '联系',
            items: [
                            {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          
          {
            title: '友情链接',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://www.docusaurus.cn/',
              },
               {
                label: 'MDN',
                href: 'https://developer.mozilla.org/zh-CN/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ngpig\'s Site, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
/*       announcementBar: {
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: false,
    }, */ //公告条
    }),
};

module.exports = config;
