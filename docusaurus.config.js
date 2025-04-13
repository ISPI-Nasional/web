// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ISPI Nasional',
  tagline: 'Ikhlas Mengabdi, Profesional Berintegritas',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ispinasional.or.id',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ISPI-Nasional', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.

  // onBrokenLinks: 'throw',
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
          editUrl:
            'https://github.com/ISPI-Nasional/web/edit/main/',
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
            'https://github.com/ISPI-Nasional/web/edit/main/',
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
        title: 'ISPI Nasional',
        logo: {
          alt: 'ISPI Nasional Logo',
          src: 'img/logo-ispi.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Beranda',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ISPI-Nasional/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Jelajahi ISPI Nasional',
            items: [
              {
                label: 'Tentang Kami',
                to: '/docs/profil/tentang-kami',
              },
              {
                label: 'Visi Misi',
                to: '/docs/profil/visi-misi',
              },
              {
                label: 'Struktur Organisasi',
                to: '/docs/profil/struktur',
              },
              {
                label: 'Keanggotaan',
                to: '/docs/profil/keanggotaan',
              },
              {
                label: 'KTA',
                to: 'kta.ispinasional.or.id',
              },
            ],
          },
          {
            title: 'Komunitas',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/groups/14270833/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/share/g/1A7yYqND8Z/',
              },
              {
                label: 'Status server KTA',
                href: '/docs/kta',
              },
            ],
          },
          {
            title: 'Informasi Lain',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Dokumen',
                href: '/docs/category/dokumen',
              },
              {
                label: 'Kontak',
                href: '/docs/kontak',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ISPI Nasional. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
