import React, { useEffect, useState } from 'react';
import Routine from '../Routine/Routine';
import './Activity.css';
const Activity = () => {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='activity-container'>
            <div className='design'>
                {
                    activities.map(active => <Routine
                        key={active.id}
                        active={active}
                    ></Routine>)
                }
            </div>
            <div >
                <h2>total work</h2>
            </div>
        </div>
    );
};

export default Activity;