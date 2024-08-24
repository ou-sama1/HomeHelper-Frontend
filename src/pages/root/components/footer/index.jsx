import React from "react";
import HomeHelperLogo from "../../../../assets/logo-1.png";
import {
  AppStoreIcon,
  GooglePlayIcon,
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
} from "../../../../components/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-8 text-gray-400">
      <div className="flex flex-row justify-between gap-3 pt-8">
        <div>
          <img
            className="h-16 grayscale filter"
            src={HomeHelperLogo}
            alt="homeHelper logo"
          />
          <p className="pt-7">
            1234 Rue Imaginaire
            <br /> 75001 Paris, France
          </p>
          <p className="pt-7">+33 1 23 45 67 89</p>
        </div>
        <div>
          <h5 className="pb-3 font-bold text-gray-500">Company</h5>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">All Services</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="pb-3 font-bold text-gray-500">Community</h5>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="pb-3 font-bold text-gray-500">Support</h5>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Legals</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="pb-3 font-bold text-gray-500">Download Our App</h5>
          <div className="flex flex-col">
            <AppStoreIcon />
            <GooglePlayIcon />
          </div>
        </div>
      </div>
      <div className="py-7">
        <h5 className="px-7 pb-5 font-bold text-gray-500">Follow us :</h5>
        <div className="flex flex-row items-center gap-2">
          <div>
            <LinkedinIcon dimensions={"37px"} />
          </div>

          <div>
            <FacebookIcon dimensions={"40px"} />
          </div>
          <div>
            <TwitterIcon dimensions={"40px"} />
          </div>
          <div>
            <InstagramIcon dimensions={"40px"} />
          </div>
        </div>
      </div>
      <div className="border-t py-4">
        <p className="text-center"> © 2024 HomeHelper. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
