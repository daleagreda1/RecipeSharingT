import LogoC from "../pics/LogoC.svg";
import './homepage.css';

const Header = () => {
  return (
    <header className="Headercontainer py-8 bg-gray-100 text-white p-6 drop-shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
          <button href="/home" className="flex text-lg text-black drop-shadow-lg">
            <img className="logoheader w-9" src={LogoC} alt="logoheader" />
            <span className="ml-[1px] font-bold text-3xl">ookShares</span>
          </button>
        </div>
        <nav className="flex flex-col md:flex-row text-align-left md:space-x-28 w-full md:w-auto text-sm mb-4 md:mb-0 font-semibold">
          <a href="/" className="hover:text-gray-400 text-black">Home</a>
          <a href="/recipes" className="hover:text-gray-400 text-black">Recipes</a>
          <a href="/about" className="hover:text-gray-400 text-black">About us</a>
        </nav>
        <div className="flex items-center w-full md:w-auto space-x-8 mb:flex-col">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded-full text-black w-full md:w-auto"
          />
          <button href="/SubmitRecipe" className="SubmitButtonHeader text-sm p-[10px] rounded-full hover:bg-green-800 w-auto md:w-auto"> Share your Recipe! </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
