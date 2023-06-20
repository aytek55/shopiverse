// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ShopiVerse',
  tagline: 'Superapp Of E-Commerce',
  favicon: 'img/shopiverseicon.jpg',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/shopiverse/', //Github
  //baseUrl: '', //Cpanel 

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
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      
      navbar: {
        title: '  ',
        logo: {
          alt: '',
          src: 'img/shopiverse-logo-h100-1.png',        
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
            docId: 'dashboard/dashboard',
            position: 'left',
            label: 'Panel',
          },          
          {to: 'https://shopiverse.com/blog/', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'left',            
          },          
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
                label: 'Panel',
                to: 'docs/dashboard',
              },
            ],
          },
          {
            title: 'Sosyal Medya',
            items: [              
              {
                html: `
                <a href="https://www.facebook.com/shopiverseuk" target="_blank" rel="noreferrer noopener" aria-label="Superapp Of Ecommerce">
                <img src="img/icons8-facebook.svg" alt="ShopiVerse" width="40" height="40" />
                </a>  
                <a href="https://twitter.com/shopiverseuk" target="_blank" rel="noreferrer noopener" aria-label="Superapp Of Ecommerce">
                <img src="img/icons8-twitter.svg" alt="ShopiVerse" width="40" height="40" />
                </a>  
                <a href="https://www.instagram.com/shopiverseuk/" target="_blank" rel="noreferrer noopener" aria-label="Superapp Of Ecommerce">
                <img src="img/Instagram-Logo.wine.svg" alt="ShopiVerse" width="40" height="40" />
                </a> 
                <a href="https://www.linkedin.com/company/shopiverseuk/" target="_blank" rel="noreferrer noopener" aria-label="Superapp Of Ecommerce">
                <img src="img/linkedin-svgrepo-com.svg" alt="ShopiVerse" width="40" height="40" />
                </a>  
                <a href="https://www.youtube.com/channel/UCKFIU7X1jlqGu3REDtxbWqQ" target="_blank" rel="noreferrer noopener" aria-label="Superapp Of Ecommerce">
                <img src="img/youtube-svgrepo-com.svg" alt="ShopiVerse" width="40" height="40" />
                </a>        
                  `,
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
        copyright: ` © Copyright ${new Date().getFullYear()} ShopiVerse, All Rights Reserved.
        ShopiVerse is a WORLDEF and ShipEntegra joint venture.`,
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
