// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShopiVerse',
  tagline: 'Universe of E-Commerce',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/shopiverse/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aytek55', // Usually your GitHub org/user name.
  projectName: 'shopiverse', // Usually your repo name.
  deploymentBranch:"gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ShopiVerse',
        logo: {
          alt: 'ShopiVerse',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'api/api',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Başlarken',
          },
          {
            type: 'doc',
            docId: 'dashboard/dashboard',
            position: 'left',
            label: 'Panel',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {to: 'https://shopiverse.com/blog/', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Doküman',
            items: [
              {
                label: 'API',
                to: 'docs/api',
              },
              {
                label: 'Başlarken',
                to: 'docs/intro',
              },
              {
                label: 'Panel',
                to: 'docs/dashboard',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/shopiverseuk',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/shopiverseuk/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/shopiverseuk/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@shopiverse/featured',
              },
            ],
          },
          {
            title: 'Daha...',
            items: [
              {
                label: 'Blog',
                to: 'https://shopiverse.com/blog/',
              },
            ],
          },
        ],
        copyright: ` © Copyright ${new Date().getFullYear()} ShopiVerse, Tüm Hakkı Saklıdır.
        ShopiVerse, bir WORLDEF ve ShipEntegra ortak girişimidir.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
        },
      ],
    ],
};

module.exports = config;
