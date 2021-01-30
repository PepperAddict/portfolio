import React from 'react';
import Mode from './Mode.jsx';
import {useStyles} from './helpers/lightDark.js'
import './style/footer.scss'
import Contacts from "./Contacts.jsx";


export default function Footer(props) {
    const date = new Date();
    const classes = useStyles()
    return (<footer className="bg border">
                 <Mode setDark={props.setDark} dark={props.dark}/>
                 <div className="two-column">
                   <Contacts dark={props.dark}/>  
                   <div className="credit">
                        © {date.getFullYear()} Jenearly Ang <br />
                        Designed and Developed by myself
                   </div>
                 </div>
                 
    </footer>)
}