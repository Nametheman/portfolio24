import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Socials = ({
  containerStyles,
  iconstyles,
}: {
  containerStyles: string;
  iconstyles: string;
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconstyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
