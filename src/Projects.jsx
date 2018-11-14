import React, {Component} from 'react';

class Projects extends Component {
  render() {
    return (
      <div>
      <h2>PROJECTS</h2>
      <div class="projects" >
        <img id="project1" src="images/comeback.png" alt="Come Back Barack Game">
       </div>
       <div class="projects">Unit 2</div>
      <div class="projects">Unit 3</div>
      <div class="projects">Unit 4</div>


      <h2>Blog Posts</h2>
      <a href="https://medium.com/@sarah.currey/https-medium-com-sarah-currey-5-tips-to-surviving-your-first-week-at-a-coding-bootcamp-d1e1a9021dba">5 Tips for Surviving your First Week at a Coding Bootcamp</a>
      <hr/>
      <a href="https://medium.com/@sarah.currey/how-i-built-my-first-obama-themed-javascript-game-b06f7c62af4c">How I Built My First (Obama Themed) JavaScript Game</a>

      </div>
      )
  }
}

export default Projects;
