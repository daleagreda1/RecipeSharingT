import LogoC from "../assets/pics/LogoC.svg";
import './components.css';

const Header = () => {
  return (
    <header className="Headercontainer py-8 bg-gray-100 text-white p-6 drop-shadow-md w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center w-auto md:w-auto mb-4 md:mb-0">
          <button href="/home" className="flex text-lg text-black drop-shadow-lg transition-transform duration-300 hover:scale-105">
            <img className="logoheader w-9" src={LogoC} alt="logoheader" />
            <a href="/" className="ml-[1px] font-bold text-3xl ">ookShares</a>
          </button>
        </div>
        <nav className="flex flex-col md:flex-row text-align-left justify-start md:space-x-20 w-full md:w-auto text-sm mb-4 md:mb-0 gap-y-5 pr-[28rem] font-semibold">
          <a href="/" className="hover:text-gray-400 text-black transition-transform duration-300 hover:scale-105">Home</a>
          <a href="/RecipeListpage" className="hover:text-gray-400 text-black transition-transform duration-300 hover:scale-105">Recipes</a>
          <a href='/#About-Us' className="hover:text-gray-400 text-black transition-transform duration-300 hover:scale-105">About us</a>
          <a href='/Contact' className="hover:text-gray-400 text-black transition-transform duration-300 hover:scale-105">Contact Us</a>
        </nav>
        <div className="flex items-center w-full md:w-auto space-x-8 mb:flex-col">
        <div>
        </div>
          <a href="/SubmitRecipe" target='_blank'>
          <button className="SubmitButtonHeader text-sm p-[12px] rounded-full hover:bg-white hover:text-green-600 border-green-400 border-2 w-auto md:w-auto
          transition-transform duration-300 hover:scale-105"> Share your Recipe! </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
