import React from 'react';
import './Routine.css'
const Routine = (props) => {
    const { name, picture, details, time } = props.active;
    return (
        <div className='activity-design'>
            <div className='img-design'><img src={picture} alt="" /></div>
            <h3>{name}</h3>
            <p>{details}</p>
            <p>Time: {time}</p>
        </div>
    );
};

export default Routine;