import React from 'react';
import './style.css';

export default function(props) {
    return (
        <div className='friend'>
            <img className='user-icon' src='/user.png'/>
            <span className='username'>{props.name}</span>
        </div>
    )
}