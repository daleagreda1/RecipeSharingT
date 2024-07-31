import './components.css';

const AboutUs = () => {
  return (
    <div className="flex flex-col gap-8 py-60">
    <div className="aboutussign align-middle text-center h-40 justify-center items-center">
    <p className="font-bold text-4xl">About Us</p>
    </div>
    <div className="flex flex-col gap-60 justify-center items-center py-20">
      <div className="w-[80rem] flex flex-row gap-10">
      Welcome to CookShares, the ultimate food lover's paradise where everyone is invited to share their culinary creations! 
      CookShares is a vibrant community-driven platform dedicated to bringing together passionate home cooks, professional chefs, 
      and food enthusiasts from all corners of the world. Whether you have a cherished family recipe, a modern twist on a classic dish, 
      or an innovative fusion cuisine, CookShares is the perfect place to showcase your culinary skills. 
      <div className="">
        <img></img>Hello1
      </div>
      </div>
      <div className="flex flex-row w-[80rem] gap-14 justify-center items-center">
      <div>
        <img></img>
        Hello2
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
