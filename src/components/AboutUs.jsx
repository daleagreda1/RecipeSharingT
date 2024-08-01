import React from 'react';
import './components.css';
import bgabout from '../assets/pics/bgabout.jpg';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 py-60">
      <div className="relative h-60 bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{ backgroundImage: `url(${bgabout})`}}>
        <p className="text-white text-7xl font-bold absolute z-10">About Us</p>
      </div>
      <div className="flex flex-col gap-28 justify-center items-center py-20">
        <div className="w-[80rem] flex flex-row gap-10 justify-center items-center text-2xl">
          Welcome to CookShares, the ultimate food lover's paradise where everyone is invited to share their culinary creations! 
          CookShares is a vibrant community-driven platform dedicated to bringing together passionate home cooks, professional chefs, 
          and food enthusiasts from all corners of the world. Whether you have a cherished family recipe, a modern twist on a classic dish, 
          or an innovative fusion cuisine, CookShares is the perfect place to showcase your culinary skills. 
          <div>
            <img src="" alt=""/>Hello1
          </div>
        </div>
        <div className="flex flex-row w-[80rem] gap-14 justify-center items-center text-2xl">
          <div>
            <img src="" alt=""/>Hello2
          </div>
          Our website offers a user-friendly interface that allows members to easily upload, share, and discover an extensive array of recipes. 
          From appetizers to desserts, vegan to gluten-free, and everything in between, CookShares provides a diverse and dynamic collection of 
          recipes that cater to all tastes and dietary preferences. Join us today and become part of a global community that celebrates the joy of 
          cooking and the art of sharing delicious meals with others!
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
