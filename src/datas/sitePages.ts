export type SitePage = {
  name: string;
  href: string;
  section: string;
  keywords: string;
};

export const sitePages: SitePage[] = [
  {
    name: "Home",
    href: "/",
    section: "Solektra Telecom",
    keywords: "home main start ahabanza",
  },
  {
    name: "All products",
    href: "/products",
    section: "Products",
    keywords: "products services ibicuruzwa",
  },
  {
    name: "4G Internet",
    href: "/products/4G-internet",
    section: "Products",
    keywords: "4g lte data mobile internet bundles interineti",
  },
  {
    name: "Fiber Internet",
    href: "/products/fiber-internet",
    section: "Products",
    keywords: "fiber fibre business dedicated office sla 1 gbps quote",
  },
  {
    name: "VoLTE",
    href: "/products/Vo-LTE",
    section: "Products",
    keywords: "volte voice calls minutes sms hd guhamagara",
  },
  {
    name: "Smartphones & routers",
    href: "/products/digital-devices",
    section: "Products",
    keywords:
      "phones smartphone samsung tecno infinix itel router mifi installment payg telefoni",
  },
  {
    name: "All packages & prices",
    href: "/packages",
    section: "Packages",
    keywords: "packages prices bundles plans amapaki ibiciro",
  },
  {
    name: "4G data bundles",
    href: "/packages?cat=4g&sub=volume",
    section: "Packages",
    keywords: "daily weekly monthly data bundle 100 rwf cheap",
  },
  {
    name: "Unlimited home broadband",
    href: "/packages?cat=4g&sub=home",
    section: "Packages",
    keywords: "unlimited home wifi broadband 20000 router",
  },
  {
    name: "VoLTE packages",
    href: "/packages?cat=volte&sub=packages",
    section: "Packages",
    keywords: "volte minutes sms call packs agahebuzo",
  },
  {
    name: "Smartphones on installment",
    href: "/packages?cat=devices&sub=smartphones",
    section: "Packages",
    keywords: "phones installment 24 months deposit",
  },
  {
    name: "FAQ",
    href: "/faq",
    section: "Support",
    keywords:
      "faq questions help coverage installation payment momo cancel ibibazo",
  },
  {
    name: "Contact us",
    href: "/contact",
    section: "Support",
    keywords: "contact phone call whatsapp email address office location kabc",
  },
  {
    name: "About Solektra",
    href: "/about",
    section: "Solektra Telecom",
    keywords: "about company who we are",
  },
  {
    name: "Kinyarwanda",
    href: "/rw",
    section: "Solektra Telecom",
    keywords: "kinyarwanda rw ikinyarwanda",
  },
  {
    name: "Privacy Notice",
    href: "/privacy-notice",
    section: "Legal",
    keywords: "privacy data personal policy",
  },
  {
    name: "Terms of Service",
    href: "/terms-of-service",
    section: "Legal",
    keywords: "terms conditions contract rules",
  },
  {
    name: "Cookie Policy",
    href: "/cookie-policy",
    section: "Legal",
    keywords: "cookies policy",
  },
];
