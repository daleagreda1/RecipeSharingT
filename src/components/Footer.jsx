import React from 'react';
import LogoC from "../assets/pics/LogoC.svg";
import facebooklogo from "../assets/Footer/facebooklogo.svg";
import twitter from "../assets/Footer/Twitter.svg";
import linkeddin from "../assets/Footer/linkedinlogo.svg";
import insta from "../assets/Footer/instagramlogo.svg";
import phone from "../assets/Footer/phone.svg";
import email from "../assets/Footer/email.svg";
import location from "../assets/Footer/location.svg";
import './components.css';

const Footer = () => {
  return (
    <div className="footerbg w-full py-8 px-8 md:px-16 lg:px-32 text-white">
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 md:gap-16">
        <div className="flex flex-col items-start gap-6 md:gap-8 w-full md:w-1/3">
          <div className="flex items-center">
            <img className="w-9" src={LogoC} alt="logoheader" />
            <a href="/" className="font-bold text-3xl text-black">ookShares</a>
          </div>
          <p className="text-neutral-400 text-md font-normal w-full leading-normal">
          CookShares is a vibrant platform for sharing and discovering recipes from cooks around the world.
           Whether you're a seasoned chef or a home cook, you can easily upload and explore a wide array of dishes.
            Join our community and get inspired by unique recipes that tell a story in every bite!
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <img src={facebooklogo} alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <img src={twitter} alt="Twitter" className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <img src={linkeddin} alt="LinkedIn" className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
              <img src={insta} alt="Instagram" className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-end md:gap-80 gap-10 w-full md:w-2/3">
          <div>
            <h1 className="text-lg font-semibold text-black">Main Menu</h1>
            <ul className="mt-4 space-y-2 text-neutral-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Submit Recipe</a></li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-lg font-semibold text-black">Contact</h1>
            <ul className="mt-4 space-y-4 text-neutral-400">
              <li className="flex items-center">
                <img src={phone} alt="Phone" className="w-6 h-6 mr-2" />
                (63+) 991-416-9352
              </li>
              <li className="flex items-center">
                <img src={email} alt="Email" className="w-6 h-6 mr-2" />
                CookSharesFood@gmail.com
              </li>
              <li className="flex items-center w-60 pl-1">
                <img src={location} alt="Location" className="w-6 h-6 mr-2" />
                General Santos City, Lagao Davao Santos, Purok 17
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-gray-500 w-full text-center">Copyright ⓒ 2024 Dscode | All rights reserved</p>
    </div>
  );
};

export default Footer;
