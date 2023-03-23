import React from 'react'
import { useNavigate } from 'react-router-dom';
import SpMobile from '../SpMoblie/SpMobile';
import './style.css'



function Home() {
  document.body.style.overflow = "hidden";
  //Upon rendering a new compmonent just add the line document.body.style.overflow = "auto";

  return (
    window.innerWidth<=853 ? <SpMobile/> :
    <div className='imitateBody'>
         <h1 className="logo">
          Sanganan-Prayog
          <span /> {/* U can add a tagline here if u wish */}
        </h1>
        <input className="planet8" id="neptune" name="planet" type="radio" />
        <label className="neptune menu" htmlFor="neptune">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Projects
            </h2>
            <h3 />
          </div>
        </label>
        <input className="planet7" id="uranus" name="planet" type="radio" />
        <label className="uranus menu" htmlFor="uranus">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Events
            </h2>
            <h3 />
          </div>
        </label>
        <input className="planet6" id="saturn" name="planet" type="radio" />
        <label className="saturn menu" htmlFor="saturn">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Mission 
            </h2>
            <h3 />
          </div>
        </label>
        <input className="planet5" id="jupiter" name="planet" type="radio" />
        <label className="jupiter menu" htmlFor="jupiter">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              About Us
            </h2>
            <h3 />
          </div>
        </label>
        <input defaultChecked="checked" className="planet4" id="mars" name="planet" type="radio" />
        <label className="menu mars" htmlFor="mars">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Contact Us
            </h2>
            <h3 />
          </div>
        </label>
        <input defaultChecked="checked" className="planet3" id="earth" name="planet" type="radio" />
        <label className="menu earth" htmlFor="earth">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Home
            </h2>
            <h3 />
          </div>
        </label>
        <input defaultChecked="checked" className="planet2" id="venus" name="planet" type="radio" />
        <label className="menu venus" htmlFor="venus">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Our Members
            </h2>
            <h3 />
          </div>
        </label>
        <input defaultChecked="checked" className="planet1" id="mercury" name="planet" type="radio" />
        <label className="menu mercury" htmlFor="mercury">
          <div className="preview" />
          <div className="info">
            <h2>
              <div className="pip" />
              Supported By
            </h2>
            <h3 />
          </div>
        </label>
        {/* Landing Background */}
        <div className="solar">
          <div className="solar_systm">
            <div className="planet mercury">
              <div className="planet_description mercury">
                <h2>Planet</h2>
                <h1>Mercury</h1>
                <p />
                <label htmlFor="readMercury">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a>
                    Supported By
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet venus">
              <div className="planet_description venus">
                <h2>Planet</h2>
                <h1>Venus</h1>
                <p />
                <label htmlFor="readEarth">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a>
                    Our Members
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet earth">
              <div className="moon moon">
                <h3>Moon</h3>
                <h2>Moon</h2>
              </div>
              <div className="trajectory m" />
              <div className="planet_description earth">
                <h2>Planet</h2>
                <h1>Earth</h1>
                <p />
                <label htmlFor="readEarth">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a>
                    Home
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet mars">
              <div className="moon deimos">
                <h3>Moon</h3>
                <h2>Deimos</h2>
              </div>
              <div className="trajectory d" />
              <div className="moon phoebos">
                <h3>Moon</h3>
                <h2>Phoebos</h2>
              </div>
              <div className="trajectory p" />
              <div className="planet_description mars">
                <h2>Planet</h2>
                <h1>Mars</h1>
                <p />
                {/* Put the site redirect location in the anchor tag below */}
                <label htmlFor="readMars">
                  <a>
                    Contact Us
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet jupiter">
              <div className="moon lo">
                <h3>Moon</h3>
                <h2>Io</h2>
              </div>
              <div className="moon europa">
                <h3>Moon</h3>
                <h2>Europa</h2>
              </div>
              <div className="moon ganymede">
                <h3>Moon</h3>
                <h2>Ganymede</h2>
              </div>
              <div className="trajectory lop" />
              <div className="trajectory eu" />
              <div className="trajectory ga" />
              <div className="planet_description jupiter">
                <h2>Planet</h2>
                <h1>Jupiter</h1>
                <p />
                <label htmlFor="readJupiter">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a>
                    About
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet saturn">
              <div className="moon titan">
                <h3>Moon</h3>
                <h2>Titan</h2>
              </div>
              <div className="moon dione">
                <h3>Moon</h3>
                <h2>Dione</h2>
              </div>
              <div className="moon enceladus">
                <h3>Moon</h3>
                <h2>Enceladus</h2>
              </div>
              <div className="trajectory ti" />
              <div className="trajectory di" />
              <div className="trajectory enc" />
              <div className="planet_description saturn">
                <h2>Planet</h2>
                <h1>Saturn</h1>
                <p />
                <label htmlFor="readSaturn">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a href="\Mission" target="_blank" style={{textDecoration: 'none'}}> 
                    Mission
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet uranus">
              <div className="moon miranda">
                <h3>Moon</h3>
                <h2>Miranda</h2>
              </div>
              <div className="moon ariel">
                <h3>Moon</h3>
                <h2>Ariel</h2>
              </div>
              <div className="moon umbriel">
                <h3>Moon</h3>
                <h2>Umbriel</h2>
              </div>
              <div className="trajectory mir" />
              <div className="trajectory ari" />
              <div className="trajectory umb" />
              <div className="planet_description uranus">
                <h2>Planet</h2>
                <h1>Uranus</h1>
                <p />
                <label htmlFor="readUranus">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a>
                    Events
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          <div className="solar_systm">
            <div className="planet neptune">
              <div className="moon triton">
                <h3>Moon</h3>
                <h2>Triton</h2>
              </div>
              <div className="moon proteus">
                <h3>Moon</h3>
                <h2>Proteus</h2>
              </div>
              <div className="moon nereid">
                <h3>Moon</h3>
                <h2>Nereid</h2>
              </div>
              <div className="trajectory tri" />
              <div className="trajectory pro" />
              <div className="trajectory ner" />
              <div className="planet_description neptune">
                <h2>Planet</h2>
                <h1>Neptune</h1>
                <p />
                <label htmlFor="readNeptune">
                  {/* Put the site redirect location in the anchor tag below */}
                  <a href="/projects" target="_blank" style={{textDecoration: 'none'}}> 
                    Projects
                  </a>
                </label>
              </div>
              <div className="overlay" />
            </div>
          </div>
          {/* Details of Expandable Side Bar */}
          {/* CONTACT US- Add Contact Links to social media accounts */}
          <input className="read" id="readMars" name="marsRead" type="radio" />
          <label className="closeBig" htmlFor="closeMars" />
          <input className="read" id="closeMars" name="marsRead" type="radio" />
          <div className="panel">
            <h1>Contact Us</h1>
            <h2>Instagram</h2>
            <h2>Facebook</h2>
            <h2>Twitter</h2>
            <br />
          </div>
          {/* ABOUT */}
          <input className="read" id="readJupiter" name="jupiterRead" type="radio" />
          <label className="closeBig" htmlFor="closeJupiter" />
          <input className="read" id="closeJupiter" name="jupiterRead" type="radio" />
          <div className="panel">
            <h1>About Us</h1>
            <h2>Values and Ethics</h2>
            <p>Ethics are universal and the universe is an organised chaos. We at sanganan prayag inculcate in our team and its
              works, values that helps us see life as fascinating as a orion on an october night. Sustainable future requires
              more than technology. Harmony is the way.</p>
            <h2>Inspiration</h2>
            <p>On a more pressing level, astronomy helps us study how to prolong the survival of our species,
              it's critical to study the Sun's influence on Earth's climate and how it will affect weather,
              water levels etc, Knowing and understanding the stage on which our life is being played is
              crucial for any existence to have real meaning.</p>
            <br />
          </div>
          {/* MISSION */}
          <input className="read" id="readSaturn" name="saturnRead" type="radio" />
          <label className="closeBig" htmlFor="closeSaturn" />
          <input className="read" id="closeSaturn" name="saturnRead" type="radio" />
          <div className="panel">
            <h1>Mission</h1>
            <p>Innovation,passion and commitment towards the popularization of astronomy and space sciences amongst all,to spread knowledge of astronomy and explain everything that we observe in the universe, from the comets and planets in our solar
              system to distant galaxies, and at the same time it also aims at creating projects which would help us in the near future.</p>
            <br />
          </div>
          {/* EVENTS: Add event details */}
          <input className="read" id="readUranus" name="uranusRead" type="radio" />
          <label className="closeBig" htmlFor="closeUranus" />
          <input className="read" id="closeUranus" name="uranusRead" type="radio" />
          <div className="panel">
            <h1>Events</h1>
            <p />
            <br />
          </div>
          {/* Projects: Add Project details */}
          <input className="read" id="readNeptune" name="neptuneRead" type="radio" />
          <label className="closeBig" htmlFor="closeNeptune" />
          <input className="read" id="closeNeptune" name="neptuneRead" type="radio" />
          <div className="panel">
            <h1>Projects</h1>
          </div>
        </div>
    </div>
  )
}

export default Home