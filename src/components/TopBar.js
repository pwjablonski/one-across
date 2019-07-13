import React from 'react';
import '../css/App.css';

export default function Toolbar() {  
  return (
    <header className="topbar">
        <div className="topbar__brand">
            1A
        </div>
        <div className="topbar__contatainer">
            <button className="topbar__button">
                Sign In
            </button>
        </div>
    </header>
  );
}