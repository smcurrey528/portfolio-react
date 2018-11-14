import React, {Component} from 'react';

class Header extends Component {
  render() {
    return(
    <header>
  <nav class="nav">
  <a href="#" id="mobile" class="fa fa-bars"></a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Articles</a>
        <a href="#">Contact</a>
</nav>
 <h1><a href="#">Sarah Currey</a></h1>
 <h3 class="job-title">Full Stack Web Developer</h3>
</header>
    )
  }
}

export default Header;
