import React from 'react'
import './projects.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ProjectCard from '../ProjectCard/ProjectCard';


function Projects() {
  document.body.style.overflow = "";
  document.body.style.backgroundColor = "#010101";


  return (
    
    <div className='projectsPageDiv' >
         <div className="background-img">
         <Navbar/>
          <div className="page-header">
            <h1>Projects</h1>
            <div className="heading-con">
              Our latest ongoing and past projects related to space science and technology.
            </div>
          </div>
        </div>
        <div className="project-cards ">
          <ProjectCard imageClass="project-image-1 project-image" key="1" heading="Astronaut’s hand gloves" content="If you're headed for space, you might rethink that manicure: Astronauts with wider hands are more likely to have their fingernails fall off after working or training in space suit gloves. " />
          <ProjectCard imageClass="project-image-2 project-image" key="2" heading="RADIO Telescope " content="A radio telescope is a specialized antenna and radio receiver used to detect radio waves from astronomical radio sources in the sky.
                Unlike optical telescopes, radio telescopes can be used in the daytime as well as at night." />
          <ProjectCard imageClass="project-image-3 project-image" key="3" heading="SOLID propellant rocket" content="A solid-propellant rocket or solid rocket is a rocket with a rocket engine that uses solid propellants. Solid-fuel rockets can remain in storage for an extended period without much propellant degradation and because they almost always launch reliably." />
          <ProjectCard imageClass="project-image-4 project-image" key="4" heading="ROVER for spACE EXPLORATION" content="It is used for rock climbing 6-wheel Rover, and to send and transmit data wireless ,to detect thermal maping of the surrounding. The rover can be used for space exploration on other planetary bodies. " />
          <ProjectCard imageClass="project-image-5 project-image" key="5" heading="WEather satellite " content="It is used to detect temperature in Atmoshphere and send weather report with the help of camera module can also detect temperature "/>
          <ProjectCard imageClass="project-image-6 project-image" key="6" heading="air quality detector" content="In this project, ML and IOT are used to detect the air quality of a particular area and project got selected for ISRO  Student Project Air Pollution Monitoring System ." />
        </div>
        <Footer/>
        <img style="position: absolute;top: 0;" src="https://hitwebcounter.com/counter/counter.php?page=8428150&style=0001&nbdigits=3&type=page&initCount=0" title="Page Visits" Alt="web counter"   border="0" />
    </div>
  )
}

export default Projects