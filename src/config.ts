import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.oury.dev/",
  author: "Oury Diallo (@ourystd)",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "OuryScript",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
};

export const LOCALE = ["fr-FR", "en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/ourystd",
    linkTitle: `Checkout my Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ourystd",
    linkTitle: `Let's connect on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/ourystd",
    linkTitle: `Join me on Twitter`,
    active: true,
  },
  {
    name: "Website",
    href: "https://www.oury.dev",
    linkTitle: `More about me`,
    active: true,
  },
  /* {
    name: "YouTube",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  }, */
];
