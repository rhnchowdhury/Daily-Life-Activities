import React from 'react';
import './Routine.css'
const Routine = (props) => {
    const { name, picture, age, time } = props.active;
    return (
        <div className='activity-design'>
            <img src={picture} alt="" />
            <h1>this is me:{name}</h1>
            <p>Age:{age}</p>
            <p>Time: {time}</p>
        </div>
    );
};

export default Routine;