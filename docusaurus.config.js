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
  organizationName: 'tracified', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

 
 
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
      
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          href: '#',
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
              href: '#',
            },
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: '#',
            },
          ],
        },
        {
          title: 'More',
          items: [
         
            {
              label: 'GitHub',
              href: '#',
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
        
          // Please change this to your repo.
        
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TharinduBalasooriya/tracified-sample-docz',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

