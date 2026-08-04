import { Mail, Linkedin, Github, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
  external?: boolean;
  showInNav?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    icon: Mail,
    href: "mailto:cansuoner2003@gmail.com",
    label: "Email",
    showInNav: true,
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/cansu-oner/",
    label: "LinkedIn",
    external: true,
    showInNav: true,
  },
  {
    icon: Github,
    href: "https://github.com/Calypso-07",
    label: "GitHub",
    external: true,
  },
];

export const navSocialLinks = socialLinks.filter(
  (link) => link.showInNav,
);
