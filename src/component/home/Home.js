import Advantages from "../advantages/Advantages";
import Features from "../features/Features";
import Products from "../products/Products";
import Slider from "../slider/Slider";


function Home() {

  window.scrollTo(0, 0);

  return(

    <>
      <Slider />
      <Features />
      <Products />
      <Advantages />
    </>

  )
}

export default Home;