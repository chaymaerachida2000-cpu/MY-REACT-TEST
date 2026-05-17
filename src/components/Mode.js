import React, { useState, useEffect } from 'react'; 
import './Mode.css'
function Mode(){
    const  [mode , setMode]=useState('dark');
    const toggleMode =() =>{
        if (mode === 'dark'){
            setMode('light');
        }else{
            setMode('dark');
        }
    }
    useEffect(() => {
        document.body.className = mode;
    }, [mode]);
    return (
        <div className="theme-container">
            <button className="theme-btn" onClick={toggleMode}>
                {mode === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    );
}
export default Mode;