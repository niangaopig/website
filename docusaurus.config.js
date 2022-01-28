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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '先占个位置',
            items: [
              {
                label: '先占个位置',
                to: 'https://www.docusaurus.cn/',
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
                to: 'https://www.docusaurus.cn/',
              },
               {
                label: 'MDN',
                to: 'https://developer.mozilla.org/',
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
    }),
};

module.exports = config;
