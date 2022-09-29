import React from 'react';
import './Routine.css'
const Routine = (props) => {
    const { name, picture, details, time } = props.active;
    return (
        <div className='activity-design'>
            <div className='img-design'><img src={picture} alt="" /></div>
            <div className='line-design'>
                <h3>{name}</h3>
                <p>{details}</p>
                <p>Time: <strong>{time}</strong> minutes</p>
            </div>
            <button className='btn-design'>
                <p className='p-design'>Add to list</p>
            </button>
        </div>
    );
};

export default Routine;