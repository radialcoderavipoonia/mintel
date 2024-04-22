import cultivado from "../../assets/images/brands/cultivado.png";
import sos from "../../assets/images/brands/sos.png";
import trust from "../../assets/images/brands/trust.png";
import Hubspot from "../../assets/images/one-click/Hubspot.svg";
import monday from "../../assets/images/one-click/Monday.svg";
import outreach from "../../assets/images/one-click/Outreach.svg";
import pipedrive from "../../assets/images/one-click/Pipedrive.svg";
import salesloft from "../../assets/images/one-click/Salesloft.svg";
import sdfc from "../../assets/images/one-click/Sdfc.svg";
import {
  Archery,
  Dollar,
  MIcon,
  Peoples,
  SalesPerson,
  Search
} from "./Icons";

export const salesPeople = [
  {
    Icon: <Search />,
    description: "Daily, 2/8 hours are spent searching for decision makers.",
  },
  {
    Icon: <Archery />,
    description:
      "Over 90% report low accuracy in contact data, leading to missed opportunities.",
  },
  {
    Icon: <SalesPerson />,
    description: "Lost productivity costs $18,000 per salesperson annually.",
  },
];
export const prospecting = [
  {
    img: <MIcon />,
    description:
      "Mintel.ai learns & understands your Ideal customer profile from your CRM, Website Visitors & Intent Sources",
  },
  {
    img: <Peoples />,
    description:
      "Generates list of contacts based on your ICP with the most accurate contact information.",
  },
  {
    img: <Dollar />,
    description:
      "Provides minty fresh, qualified leads daily to your salespeople",
  },
];
export const oneClick = [
  {
    links: "https://www.pipedrive.com/",
    icons: pipedrive,
    title: "Pipedrive",
  },
  {
    links: "https://www.hubspot.com/",
    icons: Hubspot,
    title: "Hubspot",
  },
  {
    links: "https://sdfc.mv/Home/En",
    icons: sdfc,
    title: "SFDC",
  },
  {
    links: "https://www.outreach.io/",
    icons: outreach,
    title: "Outreach",
  },
  {
    links: "https://www.salesloft.com/",
    icons: salesloft,
    title: "Salesloft",
  },
  {
    links: "https://monday.com/",
    icons: monday,
    title: "Monday",
  },
];
export const brands = [
  {
    links: "https://hypebeast.com/tags/louis-w",
    icons: trust,
  },
  {
    links: "https://www.cultivado.io/",
    icons: cultivado,
  },
  {
    links: "https://sosunlimited.co/contact/",
    icons: sos,
  },
];
