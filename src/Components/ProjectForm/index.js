import React, { useState } from 'react';
import ProjectsList from '../ProjectsList';
function ProjectForm() {
  // State to store the list of projects
  const [projects, setProjects] = useState([]);
  
  // State to store input values
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  // Function to handle form submission
  const handleAddProject = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!projectName || !projectLink || !projectDescription) {
      alert('Please fill in all fields.');
      return;
    }

    // Add new project to the projects array
    const newProject = {
      name: projectName,
      link: projectLink,
      description: projectDescription,
    };

    setProjects([...projects, newProject]);

    // Clear input fields after adding the project
    setProjectName('');
    setProjectLink('');
    setProjectDescription('');

    
  };
  const handleDescriptionChange = (e) => {
      const inputText = e.target.value;
      const wordCount = inputText.trim().split(/\s+/).length;
  
      if (wordCount > 30) {
        alert('Description should not exceed 30 words.');
        return;
      }
  
      setProjectDescription(inputText);
    };

  return (
    <div>
      <div>
      <div className=''>
      <h1 className='add-project'>
        Add Project
      </h1>
      <div className='form-container'>
        <form className='input'  onSubmit={handleAddProject}>
          <label>Project Name</label>
          <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          />
          <label>Project Link</label>
          <input
          type="text"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          />
          <label>Discription</label>
            <textarea
            value={projectDescription}
            onChange={handleDescriptionChange}
            />
          <div className='proj-add'>
            <button type="submit" className='add-proj-but'>
              Add
            </button>
          </div>
        </form>
        
      </div>
    </div>

      {/* Display the list of projects */}
      <section id='projects'>
        <h2 className='tit-projects'>Projects</h2>
        <hr/>
        <ul className='unord-list'>
          {projects.map((project, index) => (
            <li key={index}>
              <strong>{project.name}</strong>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </li>
          ))}
        </ul>
        <ProjectsList/>
      </section>
    </div>

    
    </div>
        
  );
}

export default ProjectForm;
