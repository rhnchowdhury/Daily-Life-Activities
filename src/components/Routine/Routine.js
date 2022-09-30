import React from 'react';
import './Routine.css'
const Routine = (props) => {

    const { name, picture, details, time } = props.active;
    const { setTime } = props;


    const handleClick = (time) => {
        // console.log(time)
        setTime(props.showtime + time);
        console.log(props.showtime + time)
    }


    return (
        <div className='activity-design'>
            <div className='img-design'><img src={picture} alt="" /></div>
            <div className='line-design'>
                <h3>{name}</h3>
                <p>{details}</p>
                <p>Time: <strong>{time}</strong> minutes</p>
            </div>
            <button onClick={() => handleClick(time)} className='btn-design'>
                <p className='p-design'>Add to list</p>
            </button>

        </div>
    );
};

export default Routine;