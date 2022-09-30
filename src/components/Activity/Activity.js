import React, { useEffect, useState } from 'react';
import Routine from '../Routine/Routine';
import './Activity.css';
import img from '../../images/img1.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activity = () => {
    const [activities, setActivities] = useState([]);
    const [showtime, setTime] = useState(0);
    const [show, setShow] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    useEffect(() => {
        const show = localStorage.getItem('time');
        setShow(show);
    }, [])

    function brkShow(time) {
        localStorage.setItem("time", time);
        setShow(time)
    }

    /****   Toast part   ******/

    const showToastMessage = () => {
        toast.success('Congratulations !! You have completed your activity', {
            position: toast.POSITION.TOP_CENTER
        });
    };


    return (
        <div className='activity-container'>
            <div className='design'>
                {
                    activities.map(active => <Routine
                        key={active.id}
                        active={active}
                        setTime={setTime}
                        showtime={showtime}
                    ></Routine>)
                }
            </div>
            <div className='cart-design'>
                <div className="cart-margin">
                    <div className='cart-re-design'>
                        <div className='cart-img'>
                            <img src={img} alt="" />
                        </div>
                        <div className='decoration'>
                            <h4 className='name-design'>Raihan Chowdhury</h4>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className='w-h-design'>
                        <div className='div'>
                            <p>Weight:</p>
                            <p><strong className='para-design'>65</strong>kg</p>
                        </div>
                        <div className='div'>
                            <p>Height: </p>
                            <p><strong className='para-design'>5.7</strong></p>
                        </div>
                        <div className='div'>
                            <p>Age: </p>
                            <p><strong className='para-design'>25</strong></p>
                        </div>
                    </div>
                    <h4>Add A Break</h4>
                    <div className='second-design'>
                        <div>
                            <p onClick={() => brkShow(10)} className='div-design'>10s</p>
                        </div>
                        <div>
                            <p onClick={() => brkShow(20)} className='div-design'>20s</p>
                        </div>
                        <div>
                            <p onClick={() => brkShow(30)} className='div-design div-re-design'>30s</p>
                        </div>
                        <div>
                            <p onClick={() => brkShow(40)} className='div-design'>40s</p>
                        </div>
                        <div>
                            <p onClick={() => brkShow(50)} className='div-design'>50s</p>
                        </div>
                    </div>
                    <h4 className='rtn-details'>Routine Details</h4>
                    <div className='routine'>Routine Time: {showtime} </div>
                    <div className='break'>Break Time: {show} </div>
                    <button onClick={showToastMessage} className='btn-decorate'>Activity Completed</button><ToastContainer />
                </div>
            </div>
        </div >
    );
};

export default Activity;