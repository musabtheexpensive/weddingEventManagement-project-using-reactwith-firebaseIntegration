import { useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar";

const Event = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-2">
          <h2 className="text-5xl">Event Detail</h2>
          <p>{id}</p>
          <p className="text-2xl font-bold gap-5">
          
            <span className="text-3xl text-amber-400 ">Why We :::</span> <br />
            1. Your one stop shop for designer weddings. <br />
            2. Uniqueness to your wedding event. <br />
            3. Strong network to offer you various specialties from different
            cities of Bangladesh. <br />
            4. Designer touch to enhance the ambiance. <br />
            5. Highly cost effective. <br />
            6. We help you to figure out the best service providers of your
            town. <br />
            7. High professionalism and dedication. <br />
            8. Covering every aspect of wedding and giving a symmetric touch to
            it. <br />
            9. Our development department gives new concepts and designs. <br />
            10. Hassle free Wedding.
          </p>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Event;
