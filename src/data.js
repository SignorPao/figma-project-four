// import icons
import Activity from "../src/assets/icons/Activity.svg";
// import Close from "../src/assets/icons/Close.svg";
import Facebook from "../src/assets/icons/Facebook.svg";
import Figma from "../src/assets/icons/Figma.svg";
import Google from "../src/assets/icons/Google.svg";
import Heart from "../src/assets/icons/Heart.svg";
import Instagram from "../src/assets/icons/Instagram.svg";
import Linkedin from "../src/assets/icons/Linkedin.svg";
// import MobileMenu from "../src/assets/icons/MobileMenu.svg";
import Pinterest from "../src/assets/icons/Pinterest.svg";
import Reddit from "../src/assets/icons/Reddit.svg";
// import RightArrow from "../src/assets/icons/RightArrow.svg";
import Stripe from "../src/assets/icons/stripe.svg";
import TestimonialArrow from "../src/assets/icons/TestimonialArrow.svg";
import Twitter from "../src/assets/icons/Twitter.svg";
import Work from "../src/assets/icons/Work.svg";
import Youtube from "../src/assets/icons/Youtube.svg";

// import images
import Screen3Img1 from "../src/assets/images/screen3-1.webp";
import Screen3Img2 from "../src/assets/images/screen3-2.webp";
import Screen3Img3 from "../src/assets/images/screen3-3.webp";
import Screen3Img4 from "../src/assets/images/screen3-4.webp";
import Avatar from "../src/assets/images/avatar.webp";

// navigation data
export const navData = {
  logo: "LogoType",
  menu: [
    { link: "Home", href: "home" },
    { link: "Plans", href: "plans" },
    { link: "About", href: "about" },
    { link: "Testimonials", href: "testimonials" },
    { link: "Contacts", href: "contacts" },
  ],
  // menuBtn: MobileMenu,
  // menuClose: Close,
};

// header data
export const headerData = {
  title: "Lorem ipsum dolor sit amet consectetur",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Turpis viverra et augue aliquet mattis. Id eget nisl",
  headerBtn: "Get started",
};

// plans data
export const plansData = {
  pretitle: "Lorem ipsum dolor",
  title:
    "Lorem ipsum dolor sit amet consectetur Massa a sed tincidunt odio ullamcorper",
  cards: [
    {
      icon: Activity,
      title: "Grow your business",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Velit libero et bibendum donec at hendrerit lorem finibus sit amet",
      btnText: "Learn more",
      // btnArrow: RightArrow,
    },
    {
      icon: Heart,
      title: "Improve brand loyalty",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Velit bibendum donec at hendrerit lorem finibus sit amet",
      btnText: "Learn more",
      // btnArrow: RightArrow,
    },
    {
      icon: Work,
      title: "Improve business model",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Velit libero et bibendum hendrerit lorem finibus sit amet",
      btnText: "Learn more",
      // btnArrow: RightArrow,
    },
  ],
};

// about data
export const aboutData = {
  pretitle: "Lorem ipsum dolor",
  title: "Lorem ipsum dolor sit amet consectetur Massa",
  cards: [
    {
      image: Screen3Img1,
      title: "Lorem ipsum dolor sit amet",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel. Consectetur augue rhoncus at hendrerit pellentesque.",
    },
    {
      image: Screen3Img3,
      title: "Lorem ipsum dolor sit amet",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel. Consectetur augue rhoncus at hendrerit pellentesque.",
    },
    {
      image: Screen3Img2,
      title: "Lorem ipsum dolor sit amet",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel. Consectetur augue rhoncus at hendrerit pellentesque.",
    },
    {
      image: Screen3Img4,
      title: "Lorem ipsum dolor sit amet",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur. Orci ut maecenas odio et nunc. Mi ornare quam vel lacus arcu sapien vestibulum vel. Consectetur augue rhoncus at hendrerit pellentesque.",
    },
  ],
};

// testimonials data
export const testimonialsData = {
  pretitle: "Lorem ipsum dolor sit",
  title: "Lorem ipsum dolor sit amet consectetur",
  btnIcon: TestimonialArrow,
  cards: [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Elementum ultrices fringilla nunc erat. Sagittis ut ut lorem mi tellus tellus nisi. In etiam libero vitae lacus sit vestibulum blandit bibendum. Diam nunc justo rhoncus mattis ac at massa tellus.",
      avatar: Avatar,
      name: "Peggy Sew",
      position: "CEO, Marketing Guru",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Elementum ultrices fringilla nunc erat. Sagittis ut ut lorem mi tellus tellus nisi. In etiam libero vitae lacus sit vestibulum blandit bibendum. Diam nunc justo rhoncus mattis ac at massa tellus.",
      avatar: Avatar,
      name: "Peggy Sew",
      position: "CEO, Marketing Guru",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Elementum ultrices fringilla nunc erat. Sagittis ut ut lorem mi tellus tellus nisi. In etiam libero vitae lacus sit vestibulum blandit bibendum. Diam nunc justo rhoncus mattis ac at massa tellus.",
      avatar: Avatar,
      name: "Peggy Sew",
      position: "CEO, Marketing Guru",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Elementum ultrices fringilla nunc erat. Sagittis ut ut lorem mi tellus tellus nisi. In etiam libero vitae lacus sit vestibulum blandit bibendum. Diam nunc justo rhoncus mattis ac at massa tellus.",
      avatar: Avatar,
      name: "Peggy Sew",
      position: "CEO, Marketing Guru",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Elementum ultrices fringilla nunc erat. Sagittis ut ut lorem mi tellus tellus nisi. In etiam libero vitae lacus sit vestibulum blandit bibendum. Diam nunc justo rhoncus mattis ac at massa tellus.",
      avatar: Avatar,
      name: "Peggy Sew",
      position: "CEO, Marketing Guru",
    },
  ],
};

// subscribe data
export const subscribeData = {
  pretitle: "Subscribe",
  title: "Subscribe to get the latest news about us",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Magna nibh eu tellus accumsan lacus",
  placeholder: "Enter your email address",
  subscribeBtn: "Subscribe",
};

// sponsors data
export const sponsorsData = {
  google: Google,
  pinterest: Pinterest,
  reddit: Reddit,
  figma: Figma,
  stripe: Stripe,
};

// footer data
export const footerData = {
  logo: "LogoType",
  subtitle:
    "Lorem ipsum dolor sit amet consectetur. Nec enim tellus congue morbi sed proin a. Et sit nunc sit nec quis gravida",
  icons: [
    {
      icon: Twitter,
      href: "https://twitter.com/",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/",
    },
  ],
  linksList: {
    title: "Quick links",
    links: [
      {
        link: "Services",
        href: "#!",
      },
      {
        link: "About us",
        href: "#!",
      },
      {
        link: "Contact us",
        href: "#!",
      },
      {
        link: "Login",
        href: "#!",
      },
      {
        link: "Register",
        href: "#!",
      },
    ],
  },
  address: {
    title: "Address",
    phone: "(626) 355-1940",
    addressLine1: "660 W Sierra Madre Blvd #M",
    addressLine2: "Sierra Madre, California(CA), 91024",
  },
  copyright: "Copyright © 2022 LogoType. All Rights Reseved.",
  me: [
    { text: "Created by " },
    { name: "@signorPao" },
    { href: "https://github.com/SignorPao" },
  ],
};
