import {
  AccurateData,
  Archery,
  Dollar,
  Focus,
  MIcon,
  Peoples,
  SalesPerson,
  SaveTime,
  Search,
  Streamlined,
} from "./Icons";
import pipedrive from "../../assets/images/one-click/Pipedrive.svg";
import Hubspot from "../../assets/images/one-click/Hubspot.svg";
import sdfc from "../../assets/images/one-click/Sdfc.svg";
import outreach from "../../assets/images/one-click/Outreach.svg";
import salesloft from "../../assets/images/one-click/Salesloft.svg";
import monday from "../../assets/images/one-click/Monday.svg";
import trust from "../../assets/images/brands/trust.png";
import cultivado from "../../assets/images/brands/cultivado.png";
import sos from "../../assets/images/brands/sos.png";

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
    icons: pipedrive,
    title: "Pipedrive",
  },
  {
    icons: Hubspot,
    title: "Hubspot",
  },
  {
    icons: sdfc,
    title: "SFDC",
  },
  {
    icons: outreach,
    title: "Outreach",
  },
  {
    icons: salesloft,
    title: "Salesloft",
  },
  {
    icons: monday,
    title: "Monday",
  },
];
export const brands = [
  {
    icons: trust,
  },
  {
    icons: cultivado,
  },
  {
    icons: sos,
  },
];
