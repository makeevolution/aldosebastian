import { SocialLinkSchema } from "@data/schema/social-links.schema";
import { envelope } from '@icon/solid.icon'
import { github, instagram, linkedin } from '@icon/brand.icon'


const socialLinkData: SocialLinkSchema[] = [
  {
    name: 'Github',
    path: github,
    link: 'https://github.com/makeevolution',
    color: '#c3c3c3',
  },
  {
    name: 'LinkedIn',
    path: linkedin,
    link: 'https://linkedin.com/in/aldo-sebastian',
    color: '#1469C7',
  },
  {
    name: 'Message',
    path: envelope,
    link: 'mailto:aldo_hasibuan@yahoo.com?subject=Hi Aldo!',
    color: '#e74c3c',
  }
];

export default socialLinkData;
