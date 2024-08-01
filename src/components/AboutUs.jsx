import React from 'react';
import './components.css';
import bgabout from '../assets/pics/bgabout.jpg';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 py-20">
      <div className="relative h-60 bg-cover bg-center bg-no-repeat flex items-center justify-center about-us-bg"
          style={{ backgroundImage: `url(${bgabout})` }}>
        <p className="text-white text-7xl font-bold absolute z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>About Us</p>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex flex-col gap-16 justify-center items-center py-20 bg-white px-4 md:px-20">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 justify-center items-center text-lg md:text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <p className="flex-1">
            Welcome to CookShares, the ultimate food lover's paradise where everyone is invited to share their culinary creations! 
            CookShares is a vibrant community-driven platform dedicated to bringing together passionate home cooks, professional chefs, 
            and food enthusiasts from all corners of the world. Whether you have a cherished family recipe, a modern twist on a classic dish, 
            or an innovative fusion cuisine, CookShares is the perfect place to showcase your culinary skills.
          </p>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1546069901-eacef0df6022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwxfHx8fHx8fHwxNjMxMjcyOTU1&ixlib=rb-1.2.1&q=80&w=400" alt="Cooking Image 1" className="rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300"/>
          </div>
        </div>
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-10 justify-center items-center text-lg md:text-xl text-gray-800 leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTcwMjR8MHwxfGFsbHwzfHx8fHx8fHwxNjMxMjcyOTU1&ixlib=rb-1.2.1&q=80&w=400" alt="Cooking Image 2" className="rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300"/>
          </div>
          <p className="flex-1">
            Our website offers a user-friendly interface that allows members to easily upload, share, and discover an extensive array of recipes. 
            From appetizers to desserts, vegan to gluten-free, and everything in between, CookShares provides a diverse and dynamic collection of 
            recipes that cater to all tastes and dietary preferences. Join us today and become part of a global community that celebrates the joy of 
            cooking and the art of sharing delicious meals with others!
          </p>
        </div>
        <div className="w-full max-w-5xl text-center py-10">
          <h2 className="text-4xl font-bold mb-6 text-green-700" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At CookShares, our mission is to inspire and connect people through the joy of cooking. We believe that cooking is not just about preparing food,
            but also about sharing love, culture, and experiences. We strive to create a community where everyone feels welcome to explore their culinary passions
            and share their unique creations with the world.
          </p>
        </div>
        <div className="w-full max-w-5xl text-center py-10">
          <h2 className="text-4xl font-bold mb-6 text-green-700" style={{ fontFamily: 'Poppins, sans-serif' }}>Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <img src=""/>
              <p className="mt-4 text-xl font-semibold">Mia Kulafa</p>
              <p className="text-gray-600">Founder & Chef</p>
            </div>
            <div className="flex flex-col items-center">
              <img src=""/> 
              <p className="mt-4 text-xl font-semibold">Johnny Sense</p>
              <p className="text-gray-600">Co-Founder & Pastry Chef</p>
            </div>
            <div className="flex flex-col items-center">
              <img src=""/>
              <p className="mt-4 text-xl font-semibold">elon musk</p>
              <p className="text-gray-600">Community Manager</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl text-center py-10">
          <h2 className="text-4xl font-bold mb-6 text-green-700" style={{ fontFamily: 'Poppins, sans-serif' }}>Customer Testimonials</h2>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-80 p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                "CookShares has transformed my cooking experience. The community is so supportive, and I've learned so many new recipes. I love sharing my dishes
                and getting feedback from others!"
              </p>
              <p className="mt-4 font-semibold">- Sarah M.</p>
            </div>
            <div className="w-80 p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                "As a professional chef, I enjoy connecting with other chefs and home cooks on CookShares. It's a fantastic platform to showcase my work and get inspired
                by others."
              </p>
              <p className="mt-4 font-semibold">- Chef Alex</p>
            </div>
            <div className="w-80 p-6 bg-gray-100 rounded-lg shadow-lg">
              <p className="text-gray-700 leading-relaxed">
                "I've always loved cooking, but CookShares has taken it to another level. The variety of recipes and the community spirit are amazing. Highly recommend
                to anyone who loves food!"
              </p>
              <p className="mt-4 font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
 