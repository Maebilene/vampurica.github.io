// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dark Skylines',
  tagline: 'A VRChat LARP',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://vampurica.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vampurica', // Usually your GitHub org/user name.
  projectName: 'vampurica.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          path: 'vampire',
          routeBasePath: 'vampire',
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
        title: 'Dark Skylines',
        logo: {
          alt: '.',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'IntroToDarkSkylines',
            position: 'left',
            label: 'Quick Start',
          },
          {
            type: 'doc',
            docId: 'Clans/Clans',
            position: 'left',
            label: 'Clans',
          },
          {
            type: 'doc',
            docId: 'Disciplines/Disciplines',
            position: 'left',
            label: 'Disciplines',
          },
          {
            type: 'doc',
            docId: 'Rituals/Rituals',
            position: 'left',
            label: 'Rituals',
          },
          {
            type: 'doc',
            docId: 'Techniques/Techniques',
            position: 'left',
            label: 'Techniques',
          },
          {
            type: 'doc',
            docId: 'Merits/Merits',
            position: 'left',
            label: 'Merits',
          },
          {
            type: 'doc',
            docId: 'Flaws/Flaws',
            position: 'left',
            label: 'Flaws',
          },
          {
            href: 'https://wiki.darkskylines.com/',
            label: 'Wiki',
            position: 'right',
          },
          {
            href: 'https://discord.gg/gibgames',
            label: 'Discord',
            position: 'right',
          }
          //{to: '/blog', label: 'Blog', position: 'left'},
          //{
          //  href: 'https://github.com/facebook/docusaurus',
          //  label: 'GitHub',
          //  position: 'right',
          //},
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        //style: 'dark',
        links: [],
        copyright: `<br>
        <div style="border-style: dotted; border-color: #c52827;"><a href="https://www.paradoxinteractive.com/games/world-of-darkness/community/dark-pack-agreement" target="_blank" rel="noreferrer noopener" aria-label="Dark Pack Agreement">
            <img src="https://i.fivem.lgbt/xjNT39EIvE.png" alt="Dark Pack Logo" width="125" height="125" style="float: left;"/>
        </a>
        Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission.<br>
        All rights reserved. For more information please visit worldofdarkness.com.<br>
        Contents of this website do not constitute official World of Darkness Material.<br>
        Other Content Copyright © ${new Date().getFullYear()} Vampurica. Built with Docusaurus.</div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
};

export default config;
