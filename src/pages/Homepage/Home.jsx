import Header from '../../components/Header';
import Hero from '../../components/Hero';
import AboutUs from '../../components/AboutUs';
import Footer from '../../components/Footer';
import CategoryHero from "../../components/CategoriesHero";


function Home() {

  return (
      <div>
      <Hero></Hero>
      <CategoryHero/>
      <div id="About-Us"><AboutUs/>
      </div>
    </div>
  );
};

export default Home;
