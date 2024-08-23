import React from "react";
import HomeHelperLogo from "../../../../assets/logo-1.png";
import { AppStore } from "../../../../components/icons";
import { GooglePlay } from "../../../../components/icons";
import Linkedin from "../../../../components/icons/Linkedin";
import { Facebook } from "../../../../components/icons";
import { Twitter } from "../../../../components/icons";
import { Instagram } from "../../../../components/icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-8 text-gray-400">
      <div className="flex flex-row justify-between gap-3 pt-8">
        <div className="">
          <img
            className="h-16 grayscale filter"
            src={HomeHelperLogo}
            alt="homeHelper logo"
          />
          <p className="pt-7" id="address">
            1234 Rue Imaginaire
            <br /> 75001 Paris, France
          </p>
          <p className="pt-7" id="teleNumber">
            +33 1 23 45 67 89
          </p>
        </div>
        <div className="">
          <h5 className="pb-3 font-bold text-gray-500">Company</h5>
          <ul className="">
            <li className="">
              <a className="" href="#">
                About Us
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                All Services
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                How It Works
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h5 className="pb-3 font-bold text-gray-500">Community</h5>
          <ul className="">
            <li className="">
              <a className="" href="#">
                Blog
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Affiliate Program
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Testimonials
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h5 className="pb-3 font-bold text-gray-500">Support</h5>
          <ul className="">
            <li className="">
              <a className="" href="#">
                Help Center
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Privacy Policy
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Terms of Service
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Legals
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h5 className="pb-3 font-bold text-gray-500">Download Our App</h5>
          <div className="flex flex-col">
            <AppStore />
            <GooglePlay />
          </div>
        </div>
      </div>
      <div className="py-7">
        <h5 className="px-7 pb-5 font-bold text-gray-500">Follow us :</h5>
        <div className="flex flex-row items-center gap-2">
          <div>
            <Linkedin dimensions={"37px"} />
          </div>

          <div>
            <Facebook dimensions={"40px"} />
          </div>
          <div>
            <Twitter dimensions={"40px"} />
          </div>
          <div>
            <Instagram dimensions={"40px"} />
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
