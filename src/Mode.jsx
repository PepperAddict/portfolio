import React from 'react';
import './style/mode.scss'

export default function Mode(props) {

    return (

        <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
        </label>


    )
}