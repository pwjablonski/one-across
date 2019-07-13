import React from 'react';
import '../css/App.css';
import {Link} from "react-router-dom";


export default function Toolbar() {  
  return (
    <header className="topbar">
        <Link className="topbar__brand" to='/'>1A</Link>
        {/* <div className="topbar__contatainer">
            <button className="topbar__button">
                Sign In
            </button>
        </div> */}
    </header>
  );
}