const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Tracified',
  tagline: 'Welcome to Tracified School',
  url: 'https://docs-tracified.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav2png.png',
  organizationName: 'Tracified', // Usually your GitHub org/user name.
  projectName: 'Tracified', // Usually your repo name.
 
 
  themeConfig: {

    googleAnalytics: {
      trackingID: 'UA-202537341-1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },

    navbar: {
      title: '',
      logo: {
        alt: 'Tracified Logo',
        src: 'img/tracified-logo.png',
      },

    
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
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
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tracified`,
    },
    
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },

  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TharinduBalasooriya/docuSo/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TharinduBalasooriya/docuSo/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

