import React from 'react';
import Mode from './Mode.jsx';
import {useStyles} from './helpers/lightDark.js'
import './style/footer.scss'
import Contacts from "./Contacts.jsx";


export default function Footer(props) {
    const classes = useStyles()
    return (<footer className={props.dark ? classes.dark : classes.light}>
                 <Mode setDark={props.setDark} dark={props.dark}/>
                 <Contacts dark={props.dark}/>
    </footer>)
}