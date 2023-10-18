import wedding1 from '../assets/wedding1.jpg';
import wedding2 from '../assets/wedding2.jpg';
import wedding3 from '../assets/wedding3.jpg';
import wedding4 from '../assets/wedding4.jpeg';
import wedding5 from '../assets/wedding5.jpg';
import wedding6 from '../assets/wedding6.jpeg';

const RightSideNav = () => {
    return (
        <div className="p-4 space-y-3 mb-6">
            <h2 className="text-5xl font-openSans font-bold text-orange-400">Overall Event</h2>
            <hr />
            <br />
        <img className='w-full h-full' src={wedding1} alt="" />
        <img className='w-full h-full' src={wedding2} alt="" />
        <img className='w-full h-full' src={wedding3} alt="" />
        <img className='w-full h-full' src={wedding4} alt="" />
        <img className='w-full h-full' src={wedding5} alt="" />
        <img src={wedding6} alt="" />
        </div>
    );
};

export default RightSideNav;