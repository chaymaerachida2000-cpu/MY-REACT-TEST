import React, { useState } from 'react';
import './Hero.css';
import myPhoto from '../imaginn.png'; 

function Hero (){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // 1. Zidna s-sandouqa li kat-9oul wach t-sajjal (true) aw bāqi (false)
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    if(name === "" || email === "") { 
        alert("please put your name and email");
    } else {
        // 2. Mli i-koun kolchi 3amer, kat-welli true bach t-beddel s-saf7a
        setIsRegistered(true);
    }
  };

  return(
    <section className="hero-container"> 
  
        <h1>The Future is React</h1>
        <p>I build high-quality web applications with modern technologies.</p>
        <button className="cta-button">Get Started</button>
        
       
        {isRegistered ? (
            <div className="success-card">
                <h2>Welcome {name}! 🎉🥳</h2>
                <p>Happy to see you! Your email ({email}) has been registered successfully.</p>
            </div>
        ) : (
            <div className='usercard'>
                <input 
                  type="text" 
                  className='btn' 
                  placeholder='Put your name here...' 
                  onChange={(e) => setName(e.target.value)}
                />
               
                <input 
                  type='text' 
                  className='bbtn' 
                  placeholder='put you mail ...'
                  onChange={(e) => setEmail(e.target.value)}
                />
                
                <button className='enregistre' onClick={handleRegister}>submit</button>
                
                <img src={myPhoto} alt="welcome" className="hero-img" />
            </div>
        )}
        
    </section>
  );
}

export default Hero;