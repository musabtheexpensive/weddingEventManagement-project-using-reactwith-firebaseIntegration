import { Link } from "react-router-dom";

const EventCard = ({event}) => {
    const {id,title,image_url,description,price,button_text}=event;
    return (
        <div className="card card-compact mb-16 border-b-4 bg-base-100 shadow-xl">
        <figure><img className="w-full" src={image_url}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl text-rose-400">{title}</h2>
          <p className="text-xl font-black">{description}</p>
          <h1 className="text-3xl font-openSans font-semibold">{price}</h1>
          <div className="card-actions justify-end">
            <Link to={`/event/${id}`}><button className="btn btn-outline btn-secondary">{button_text}</button></Link>
          </div>
        </div>
      </div>
    );
};

export default EventCard;