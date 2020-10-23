import React, { useState, useRef, useEffect } from 'react';
import './style/mode.scss'
export default function Mode(props) {
    const [checked, setChecked] = useState(false);
    const checky = useRef();
    const checkedOrNot = localStorage.getItem('dark');

    const changeIt = e => {
        const valueOfChecked = checky.current.checked.toString();
        localStorage.setItem('dark', valueOfChecked);

        if (valueOfChecked === 'true') {
            checky.current.checked = true;
            props.setDark(true);
        } else {
            checky.current.checked = false;
            props.setDark(false);
        }
    }
    const clicky = (val) => {
        const valueOfChecked = val.toString();
        localStorage.setItem('dark', valueOfChecked);
        if (val === true) {
            checky.current.checked = true;
            props.setDark(true);
        } else {
            console.log('it false');
            checky.current.checked = false;
            props.setDark(false);
        }
    }

    useEffect(() => {
        //change the checked to yes/no upon load from what is saved in local storage
        if (checkedOrNot === 'true') {
            setChecked(true)
            checky.current.checked = true;
            props.setDark(true);
        } else {
            setChecked(false)
            checky.current.checked = false;
            props.setDark(false);
        }
    })

    return (
        <div className='mode'>
            <span onClick={() => clicky(false)}>Light</span>
            <label className="switch">
                <span className="hide-me">Change Mode</span>
                <input type="checkbox" ref={checky} onChange={changeIt} />
                <span className="slider round"></span>
            </label>
            <span onClick={() => clicky(true)}>Dark</span>
        </div>

    )
}