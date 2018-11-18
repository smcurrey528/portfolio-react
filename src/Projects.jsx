import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Projects = (props) => {
  return (
   <div>
    <h1> Projects </h1>
    <div className="otherHomes">
      <Card className="moreHomeCards">
        <CardImg src="https://smcurrey528.github.io/portfolio/images/comeback.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>Javascript, HTML, and CSS Game</CardTitle>
          <CardSubtitle>Come Back Barack</CardSubtitle>
          <CardText>This is a Javascript game where the user needs to power up Obama with liberal snowflakes.</CardText>
        </CardBody>
      </Card>

       <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/9FVsgNl.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>React.js, Node.js, Express, JavaScript</CardTitle>
          <CardSubtitle>Rebuilding AirBNB</CardSubtitle>
          <CardText>xxxxxxxxxxx</CardText>
        </CardBody>
      </Card>

      <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/yxCvhFEl.png" title="source: imgur.com" />
        <CardBody>
          <CardTitle>React.js, REST API, Javascript</CardTitle>
          <CardSubtitle>QualLi, Quality of Life API App</CardSubtitle>
          <CardText>XXXXXXXXX</CardText>
        </CardBody>
      </Card>

      <Card className="moreHomeCards">
        <CardImg src="https://i.imgur.com/9FVsgNl.png" title="source: imgur.com" />
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
