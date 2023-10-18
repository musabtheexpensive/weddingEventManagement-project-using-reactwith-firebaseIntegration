import Header from "../../shared/Header";
import Navbar from "../../shared/Navbar";
import RightSideNav from "../../shared/RightSideNav";
import Marque from "./Marque";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <br />
      <Marque></Marque>
      <br />
      <h2 className="text-6xl items-center text-rose-700 ml-60 font-sans font-extrabold my-6">Our Innovative Event Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 border">
          <h2 className="text-2xl">Event Coming Soon.....</h2>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
        
      </div>
     
    </div>
  );
};

export default Home;
