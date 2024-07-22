import LogoC from "../pics/LogoC.svg";

const Header = () => {
  return (
    <header className="bg-gray-200 text-white p-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <button className="flex text-lg text-black">
          <img className="logoheader w-6 ml-[-8px]" src={LogoC} alt="logoheader"/>
          ookShares</button>
        </div>
        <nav className="flex space-x-10 ml-[-10rem] text-sm">
          <a href="/" className="hover:text-gray-400 text-black">Home</a>
          <a href="/recipes" className="hover:text-gray-400 text-black">Recipes</a>
          <a href="/about" className="hover:text-gray-400 text-black">About Us</a>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="p-1 rounded-full text-black"
  
          />
          <button href="/SubmitRecipe" className="bg-green-600 text-sm p-1 rounded-full hover:bg-green-800">Share your Recipe!</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
