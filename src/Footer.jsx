import React, { Component } from 'react';

class Footer extends Component {
   render() {
    return(
      <footer class="footer">
    <div id="window-size">
  Media Queries: <span id="size"></span> </div>
    <p> &copy;2018. Sarah Currey. All Rights Reserved.</p>
  <p id="social">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-dribbble"></a>
        <a href="#" class="fa fa-pinterest"></a>
      </p>
    </footer>
      )
   }
}
export default Footer;
