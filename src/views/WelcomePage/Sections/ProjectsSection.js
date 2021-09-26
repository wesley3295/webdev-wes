/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "/home/wes3295/Development/code/projects/Epic-Portfolio/src/Hooks/useWindowDimension.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Muted from "components/Typography/Muted.js";
import amazon from "assets/img/Amazon.png";
import divide from "assets/img/Divide.png";
import dopad from "assets/img/DoPad.png";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";
import Button from "components/CustomButtons/Button.js";
import Badge from "components/Badge/Badge.js";

const useStyles = makeStyles(projectsStyle);

const ProjectsSection = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  const styleContainer = () => {
    if (width < 415) {
      return "350px";
    } else if (width < 600) {
      return "850px";
    } else if (width < 995) {
      return "850px";
    } else {
      return "800px";
    }
  };

  React.useEffect(() => {
    styleContainer();
  }, [width]);
  return (
    <div id="projects" className={classes.projects} style={{}}>
      {/* <div className={classes.container}> */}
      <GridContainer>
        <GridItem
          xs={11}
          sm={8}
          md={8}
          className={
            classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
          }
        >
          <h2 className={classes.cardTitleWhite}>Projects</h2>
          <p className={classes.description}>
            My passion for software enginnering is aparent through the
            technologies I continue to learn. Let these Libraries, Frame-works,
            Data Bases, and Languages be an indication of my effort and my
            determination to grow as a software engineer.
          </p>
        </GridItem>
      </GridContainer>
      <GridContainer
        id="projects"
        justify="center"
        style={{
          maxHeight: styleContainer(),
          overflowY: "scroll",
        }}
      >
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <Card plain className={classes.card2}>
            <a href="https://clone-22f24.web.app/" target="_blank">
              <CardHeader image plain>
                <img src={amazon} alt="..." />
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${amazon})`,
                    opacity: "1",
                  }}
                />
              </CardHeader>
            </a>
            <CardBody plain>
              <a href="https://clone-22f24.web.app/" target="_blank">
                <h4 className={classes.cardTitle}>
                  Amazon Clone{" "}
                  <Button
                    href="https://github.com/wesley3295/Amazon-Clone"
                    color="white"
                    simple
                    size="lg"
                    justIcon
                  >
                    <i className="fab fa-github" />
                  </Button>
                </h4>
              </a>
              <Badge color="warning">JavaScript</Badge>
              <Badge color="success">Node.js</Badge>
              <Badge color="info">React.js</Badge>
              <Badge color="success">mongoDB</Badge>
              <Badge color="info">Material-ui</Badge>
              <Badge color="success">Express.js</Badge>
              <Badge color="info">CSS</Badge>
              <p className={classes.description + " " + classes.marginTop20}>
                A clone of Amazon using React.js library for front-end
                development, and CSS for styled components. Back-end
                technologies include Express, Node, MongoDB, and Firebase for
                executing orders and user authentication. State management using
                'StateProvider' from React Add/remove product to/from cart
                updating state throughout multiple components.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <Card plain className={classes.card2}>
            <a href="https://divide-media.herokuapp.com/" target="_blank">
              <CardHeader image plain>
                <img src={divide} alt="..." />
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${divide})`,
                    opacity: "1",
                  }}
                />
              </CardHeader>
            </a>
            <CardBody plain>
              <a href="https://divide-media.herokuapp.com/" target="_blank">
                <h4 className={classes.cardTitle}>
                  The Divide{" "}
                  <Button
                    href="https://github.com/wesley3295/Phase3-Portfolio-Project"
                    color="white"
                    simple
                    size="lg"
                    justIcon
                  >
                    <i className="fab fa-github" />
                  </Button>
                </h4>
              </a>
              <Badge color="rose">Ruby on Rails </Badge>
              <Badge color="primary">Bootstrap</Badge>
              <Badge color="danger">HTML</Badge>
              <Badge color="rose">Ruby</Badge>
              <p className={classes.description + " " + classes.marginTop20}>
                An application that has a live API feeding the Articles Table
                within the Database of the application. This API has current
                articles from all over the world. The Divide gives you the
                option to join the community and comment on articles and reply
                to comments on the articles. The application has full CRUD
                functionality!
              </p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} lg={4}>
          <Card plain className={classes.card2}>
            <a
              href="https://github.com/wesley3295/Final-React-Project"
              target="_blank"
            >
              <CardHeader image plain>
                <img src={dopad} alt="..." />
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${dopad})`,
                    opacity: "1",
                  }}
                />
              </CardHeader>
            </a>
            <CardBody plain>
              <a
                href="https://github.com/wesley3295/Final-React-Project"
                target="_blank"
              >
                <h4 className={classes.cardTitle}>
                  DoPad{" "}
                  <Button
                    href="https://github.com/wesley3295/Final-React-Project"
                    color="white"
                    simple
                    size="lg"
                    justIcon
                  >
                    <i className="fab fa-github" />
                  </Button>{" "}
                </h4>
              </a>
              <Badge color="info">React.js</Badge>
              <Badge color="primary">Redux.js</Badge>
              <Badge color="info">Material-ui</Badge>
              <Badge color="rose">Ruby on Rails</Badge>
              <p className={classes.description + " " + classes.marginTop20}>
                A single page application that allows users to create DIY's by
                adding steps with instructions and pictures, to either display
                for others use or simply archive for future use. The front-end
                of this application is built with React.js, Material-ui styled
                components, Redux.js for global state layering. The back-end is
                built with Ruby on Rails API, implemented JWT for
                sessions/cookies, bcrypt password encryption, custom serializers
                to send filtered JSON data, and PostgreSQL database to hold user
                and DIY data.
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      {/* </div> */}
    </div>
  );
};

export default ProjectsSection;
