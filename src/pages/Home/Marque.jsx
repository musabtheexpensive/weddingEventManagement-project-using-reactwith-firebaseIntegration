import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Marque = () => {
  return (
    <div>
      <Marquee className="text-2xl font-serif font-bold gap-4" speed={120}>
     <Link  to='/'> Our Event  Management & Wedding  Planning  offers you a user-friendly  environment  for  facility  scheduling  and  event  management....</Link>
      </Marquee>
    </div>
  );
};

export default Marque;
