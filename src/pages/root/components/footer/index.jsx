import HomeHelperLogo from "../../../../assets/logo-1.png";
import {
  AppStoreIcon,
  GooglePlayIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "../../../../components/icons";
import { Link } from "react-router-dom";

const links = [
  {
    id: 0,
    title: "Company",
    links: ["About Us", "All Services", "How It Works", "Career"],
  },
  {
    id: 1,
    title: "Community",
    links: ["Blog", "Affiliate Program", "Testimonials"],
  },
  {
    id: 2,
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms of Service", "Legals"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-8 pt-10 text-gray-400">
      <div className="flex flex-col items-center pt-8 text-center xl:flex-row xl:items-start xl:justify-between">
        <div className="flex w-60 flex-col items-center gap-7 pb-10 text-xl">
          <img
            className="mx-auto w-36 grayscale filter"
            src={HomeHelperLogo}
            alt="homeHelper logo"
          />
          <p>
            1234 Rue Imaginaire
            <br /> 75001 Paris, France
          </p>
          <p>+33 1 23 45 67 89</p>
        </div>

        <ul className="flex w-full flex-col justify-evenly gap-10 py-10 sm:flex-row sm:gap-5 md:py-0">
          {links.map(({ id, title, links }) => (
            <li key={id} className="flex flex-col gap-2">
              <span className="pb-3 text-xl font-bold text-gray-500">
                {title}
              </span>
              <ul className="flex flex-col gap-5 text-lg">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-4">
          <h5 className="pb-3 text-xl font-bold text-gray-500">
            Download Our App
          </h5>
          <a href="/">
            <AppStoreIcon />
          </a>
          <a href="/">
            <GooglePlayIcon />
          </a>
        </div>
      </div>
      <div className="py-7">
        <h5 className="px-7 pb-5 text-center text-xl font-bold text-gray-500">
          Follow us :
        </h5>
        <div className="flex flex-row items-center justify-center gap-2">
          <Link to="/">
            <LinkedinIcon dimensions={"37px"} />
          </Link>

          <Link to="/">
            <FacebookIcon dimensions={"40px"} />
          </Link>
          <Link to="/">
            <TwitterIcon dimensions={"40px"} />
          </Link>
          <Link to="/">
            <InstagramIcon dimensions={"40px"} />
          </Link>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="text-center"> © 2024 HomeHelper. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
