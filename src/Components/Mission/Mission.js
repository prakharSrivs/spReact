import React from 'react';
import './mission.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import space from '../Mission/space.mp4'








const Mission = () => {


    document.body.style.overflow = "";
    document.body.style.backgroundColor = "#010101";


  return (
   

   

    <>
     <Navbar/>

     <video autoPlay loop muted id="myVideo">
        <source src={space} type="video/mp4"/>
      </video>
      
   
   <div className='mission'>

<div className="container" >
        
        <div className="timeline box-right" >
            <div className="custom"></div>
            <div className="icon">
                <span><i className="fa fa-star"></i></span>
            </div>
            <div className="information">
                <h2>OUR MISSION</h2>
                <div className="image" >
                 <img src= "images/rocket.png" className="img-fluid" alt=""/> 
                </div>
                <p className="fade-in">Innovation,passion and commitment towards the popularization of astronomy and
                    space sciences amongst all,to spread knowledge of astronomy and explain everything 
                    that we observe in the universe, from the comets and planets in our
                    solar system to distant galaxies, and at the same time it also aims at 
                    creating projects which would help us in the near future</p>
            </div>
        </div>

        <div className="timeline " >
            <div className="custom"></div>
            <div className="icon">
                <span><i className="fa fa-star"></i></span>
            </div>
            <div className="information">
                <h2>VALUES AND ETHICS</h2>
                <div className="image" >
                 <img src= "images/values and ethics.png" className="img-fluid" alt=""/>
                </div>
                <p className="fade-in">Ethics are universal and the universe is an organised chaos.
                    We at sanganan prayag inculcate in our team and its works, values
                    that helps us see life as fascinating as a orion on an october night. 
                    Sustainable future requires more than technology. Harmony is the way.</p>
            </div>
        </div>



        <div className="timeline box-right" >
            <div className="custom"></div>
            <div className="icon">
                <span><i className="fa fa-star"></i></span>
            </div>
            <div className="information">
                <h2>INSPIRATION</h2>
                <div className="image" >
                 <img src= "images/idea.png" className="img-fluid" alt=""/> 
                </div>
                <p className="fade-in">On a more pressing level, astronomy helps us study how to prolong the survival of our species,
                    it's critical to study the Sun's influence on Earth's climate and how it will affect weather,
                    water levels etc, Knowing and understanding the stage on which our 
                    life is being played is crucial for any existence to have real meaning.</p>
            </div>
            <div>
            
            </div>
            
        </div>
        
        </div>
        
        
        </div>
        
       
        <Footer/>

         



        

         




    
    </>
        
    
  )
}

export default Mission;
