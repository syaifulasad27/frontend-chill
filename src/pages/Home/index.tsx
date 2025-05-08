import NavBar  from "@/components/navBar";
import HeroContent from "./component/hero-content";
import { FilmContinue } from "./component/film-continue";
import { TopRating } from "./component/top-rating";
import { Trending } from "./component/trending";
import { NewRilis } from "./component/new-rilis";
import Footer from "@/components/footer";

const HomePage = () => {
    return (
      <>
        <NavBar />
        <HeroContent />
        <FilmContinue />
        <TopRating />
        <Trending />
        <NewRilis />
        <Footer />
      </>
    );
  };
  
  export default HomePage;
  