import type { HorizontalNavigationLink } from "#ui/types";

const HeaderNavigationLinks: HorizontalNavigationLink[] = [
  {
    label: "Accueil",
    icon: "i-ph-pi",
    to: "/",
  },
  {
    label: "Seconde",
    icon: "i-mynaui-two",
    to: "/seconde",
  },
  {
    label: "Première",
    icon: "i-mynaui-one",
    to: "/premiere",
  },
  {
    label: "Terminale",
    icon: "i-mynaui-letter-t",
    to: "/terminale",
  },
  {
    label: "Pour aller plus loin",
    icon: "i-ic-round-plus",
    to: "/plus",
  },
];

export default defineAppConfig({
  HeaderNavigationLinks,
});
