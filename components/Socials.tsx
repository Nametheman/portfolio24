import { Item } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Nametheman" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/emmanuel-owolabi-6b5b73172/",
  },
  { icon: <BsTwitterX />, path: "https://x.com/Infiniti0X" },
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
          <Link
            key={index}
            href={social.path}
            className={iconstyles}
            target="_blank"
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
