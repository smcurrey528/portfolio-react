import React, { Component } from 'react';
import MapBox from './MapBox';

class Contact extends Component {
  render() {
    return(
      <div>
      <h3 className="hola"> Contact me </h3>
      <div className="contactMe">
      <MapBox/>
      <h4 className="seeking"> I am currently seeking Front-End Developer or Software Engineer roles in New York City.
       To get in touch,
<a href="mailto:curreysarah28@gmail.com?Subject=Hi Sarah" target="_top">click here to send me an email.</a>
</h4>
      </div>
      </div>
      )
  }
}
export default Contact;
