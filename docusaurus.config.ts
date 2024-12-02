import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BNLP',
  tagline: 'Natural language processing toolkit for Bengali Language',
  favicon: 'img/favicon.ico',
  url: 'https://sagorbrur.github.io',
  baseUrl: '/bnlp/',
  organizationName: 'sagorbrur',
  projectName: 'bnlp',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  customFields: {
    description: 'Natural language processing toolkit for Bengali Language',
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/sagorbrur/bnlp-doc/tree/main',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BNLP',
      hideOnScroll: false,
      logo: {
        alt: 'BNLP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/sagorbrur/bnlp',
          position: 'right',
          'aria-label': 'GitHub repository',
          className: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/bnlp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Contribute',
              href: 'https://github.com/sagorbrur/bnlp/blob/main/CONTRIBUTING.md',
            },
            {
              label: 'Issues',
              href: 'https://github.com/sagorbrur/bnlp/issues',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/sagorbrur" target="_blank">Sagor Sarker</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metadata: [
      {
        name: 'BNLP',
        content: 'Natural language processing toolkit for Bengali Language',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'support_us',
      content: `⭐️ If you like <strong>BNLP</strong>, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/sagorbrur/bnlp">GitHub</a>`,
      isCloseable: true,
      backgroundColor: '#f2f2f2',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
