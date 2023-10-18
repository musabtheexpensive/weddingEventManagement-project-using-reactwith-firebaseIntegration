import { Link } from "react-router-dom";

const EventCard = ({event}) => {
    const {id,title,image_url,description,price,button_text}=event;
    return (
        <div className="card card-compact mb-16 border-b-4 bg-base-100 shadow-xl">
        <figure><img className="w-full" src={image_url}alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/event/${id}`}><button className="btn btn-primary">{button_text}</button></Link>
          </div>
        </div>
      </div>
    );
};

export default EventCard;