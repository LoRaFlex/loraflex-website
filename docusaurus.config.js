module.exports = {
  title: "LoRaFlex",
  tagline: "Where collaborative LoRa projects are taking place",
  url: "https://loraflex.earias.me",
  baseUrl: "/",
  favicon: "img/logo.svg",
  organizationName: "LoRaFlex",
  projectName: "loraflex-website",
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      title: "LoRaFlex",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "/members",
          label: "Members",
          position: "left",
        },
        {
          href: "https://github.com/LoRaFlex",
          label: "Projects",
          position: "left",
        },
        {
          href: "https://github.com/LoRaFlex",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://t.me/LoRaCuba",
          label: "Telegram",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `Made with ❤️ by members of <a target="_blank" rel="noopener noreferrer" href="https://github.com/LoRaFlex">LoRaFlex</a>`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LoRaFlex/loraflex-website/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
