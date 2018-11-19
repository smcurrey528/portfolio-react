import React, {Component} from 'react';
import RideBikes from './RideBikes';

class About extends Component {
   render() {
    return(
      <div className="aboot">
      <div className="sectionAbout">
 <div className="draft">
      <RideBikes/>
    <h2 className="scurr">About Sarah</h2>
   <p id="about">
  As an outgoing, health care lobbyist turned passionate software developer, my background in policy and project management gave me the analytical thinking and collaboration skills to build dynamic and responsive web applications. My positive demeanor and creative approach to problem solving are reflected in my programming style. Outside of work, I enjoy riding my bike, dancing with my performance squad, and attending coding meetups. Follow me on GitHub.com/smcurrey528 or contact me via email at curreysarah28@gmail.com.
  </p>
  </div>
<section class="about">
  <table>
    <tr>
      <td>
        <img id="dancer" src="/images/dancer2.svg" alt="dancer"/>
      </td>
      <td>
        <img id="foodie" src="images/426275-200.png" alt="foodie"/>
      </td>
      <td>
        <img id="nashville" src="images/106on.png" alt="nashville"/>
      </td>
      <td>
        <img id="cyclist" src="images/1229px-Bicycle-icon.svg.png" alt="cyclist"/>
      </td>
      <td>
        <img id="world" src="images/globe.png" alt="world traveler"/>
      </td>
    </tr>
    <tr>
      <td>Dancer</td>
      <td>Foodie</td>
      <td>Nashville Native</td>
      <td>Cyclist</td>
      <td>World Traveler</td>
    </tr>
  </table>
</section>
 </div>
 </div>
      )
   }
}

export default About;
