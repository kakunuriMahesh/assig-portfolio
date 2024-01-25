import React from "react";

function ProjectsList(){
    return(
        <div className='project-list'>
          <div className="project">
              <div className='project-info'>
                <h3>Project Name</h3>
                <p>I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.</p>
                <button className='view'>View Project</button>
              </div>
              <img
                className="pexels-elly"
                alt="Pexels elly"
                src="https://c.animaapp.com/eTiOpYCh/img/pexels-elly-fairytale-3823207-1.png"
              />
          </div>
          <div className="project">
              <img
                className="pexels-elly-1"
                alt="Pexels elly"
                src="https://c.animaapp.com/eTiOpYCh/img/rectangle-7.png"
              />
              <div className='project-info'>
                <h3>Project Name</h3>
                <p>I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.</p>
                <button className='view'>View Project</button>
              </div>
          </div>
          <div className="project">
              <div className='project-info'>
                <h3>Project Name</h3>
                <p>I created this personal project in order to show how to create
                  an interface in Figma using a portfolio as an example.</p>
                <button className='view'>View Project</button>
              </div>
              <img
                className="pexels-elly"
                alt="Pexels elly"
                src="https://c.animaapp.com/eTiOpYCh/img/rectangle-7-1.png"
              />
          </div>
        </div>
    )
}
export default ProjectsList