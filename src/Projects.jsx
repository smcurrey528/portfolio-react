import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Projects = (props) => {
  return (
   <div>
    <h1 className="headProjects"> Projects </h1>
    <div className="otherHomes" >
      <Card className="moreHomeCards" href="https://pages.git.generalassemb.ly/smcurrey528/come-back-barack/#">
        <CardImg className="CardImg" src="https://smcurrey528.github.io/portfolio/images/comeback.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Come Back Barack</CardTitle>
          <CardSubtitle>Javascript, HTML, and CSS Game</CardSubtitle>
          <hr/>
          <CardText>This is a Javascript game where the user needs to power up Obama with liberal snowflakes.</CardText>
          <a href="https://pages.git.generalassemb.ly/smcurrey528/come-back-barack/#" > Click here to play </a>
        </CardBody>
      </Card>

       <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/9FVsgNl.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>FireBNB: Rebuilding Airbnb</CardTitle>
          <CardSubtitle>React.js, Node.js, Express, JavaScript</CardSubtitle>
          <hr/>
          <CardText>The full stack web application includes the AirBnb's home page whichwill allow a user to search listings and single listings in New York City.</CardText>

          <a href="https://dillon-airbnb.herokuapp.com/" > Click here to explore </a>
        </CardBody>
      </Card>

      <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/yxCvhFEl.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>QualLi: a Quality of Life API App</CardTitle>
          <CardSubtitle>React, D3, REST API, Javascript</CardSubtitle>
          <hr/>
          <CardText>QualLi is a web application built in React.js, which the user can type in a top city in the world from an input field, and the site will return Quality of Life score as well as the cityscape background image. The information was fetched from the Teleport Public API and will be shown using text as well as D3.js.

</CardText>
          <a href="http://qualili.surge.sh/" > Click here to explore </a>
        </CardBody>
      </Card>

      <Card className="moreHomeCards">
        <CardImg src="http://www.vignobleschatonnet.com/wp-content/uploads/2018/08/logo-amazon.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Coming Soon</CardTitle>
          <CardSubtitle> Content here</CardSubtitle>
          <CardText>Content here</CardText>
        </CardBody>
      </Card>
    </div>
   </div>
  );
};


export default Projects;
