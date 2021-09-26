import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slide from "@material-ui/core/Slide";

// Hooks
import useWindowDimensions from "/home/wes3295/Development/code/projects/Epic-Portfolio/src/Hooks/useWindowDimension.js";
// core components
import Resume from "./Resume.js";
import Contact from "./Contact.js";
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import ProjectsSection from "./ProjectsSection";
import Modal from "./Modal";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
// import Badge from "components/Badge/Badge.js";
import NearMeTwoToneIcon from "@material-ui/icons/NearMeTwoTone";
import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";

// import dg20 from "assets/img/dg20.jpg";

const useStyles = makeStyles(headersStyle);
const Transition = React.forwardRef(function Transition(props, ref) {
  const { height, width } = useWindowDimensions();
  const [modalCardPadding, setModalCardPadding] = React.useState(null);
  const carouselHeight = () => {
    if (width < 400) {
      setModalCardPadding(4200);
    } else if (width < 600) {
      setModalCardPadding(3500);
    }
  };
  React.useEffect(() => {
    carouselHeight();
  }, [width, height]);
  return (
    <Slide
      direction="down"
      ref={ref}
      {...props}
      id="modalContent"
      style={{
        minHeight: modalCardPadding + "px",
      }}
    />
  );
});
const TransitionContact = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} id="modalContent" />;
});

Transition.displayName = "Transition";
TransitionContact.displayName = "Transition";
const HeaderSection = () => {
  const classes = useStyles();
  const [slider, setSlider] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const { height, width } = useWindowDimensions();
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipe: true,
  };

  const styleHeader = () => {
    if (width < 2300 && width > 1930) {
      return {
        backgroundImage: `url("${dg1}")`,
        backgroundPosition: "0% 0%",
        backgroundSize: "130% 130%, cover",
      };
    } else {
      return {
        // display: "flex",
        backgroundPosition: "50% 10%",
        backgroundSize: "cover",
        backgroundImage: `url("${dg1}")`,
      };
    }
  };
  const introDescription = () => {
    return (
      <h4>
        Experienced software engineer passionate about code quality and
        innovative approaches to problem solving. I am interested in
        opportunities that provide an environment of powerful collaboration and
        inclusion. I believe in a company culture that actively encourages teams
        comprised of creative and enthusiastic individuals. I value an
        environment where the rate of emotional intelligence is given the same
        acceptance as technical prowess. I started my journey into software
        development in the middle of a pandemic, while still working a full time
        job, showing that I can be adaptable and have the drive to push forward
        during harsh environments. I am always looking forward to building and
        growing scalable applications that solve real-world problems. I can
        bring strong skills in research, debugging, and communication to a team
        with experience in leadership and the desire to help others.{" "}
      </h4>
    );
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Header
        absolute
        color="transparent"
        links={
          <List className={classes.list + " " + classes.mlAuto}>
            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={() => {
                  slider.slickGoTo(0);
                }}
                color="transparent"
              >
                Home
              </Button>
            </ListItem>

            <ListItem className={classes.listItem}>
              <Button
                className={classes.navLink}
                onClick={() => {
                  slider.slickGoTo(1);
                }}
                color="transparent"
              >
                Projects
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Modal
                buttonColor="warning"
                buttonClass={classes.navLink}
                buttonStyle={{
                  borderRadius: "50px",
                }}
                buttonIcon={
                  <NearMeTwoToneIcon
                    style={{
                      marginLeft: "10px",
                      color: "black",
                    }}
                  />
                }
                buttonName="Hire Me!"
                content={<Contact />}
                id="ContactId"
                transition={TransitionContact}
              />
            </ListItem>
          </List>
        }
      />
      <Carousel ref={(slider) => setSlider(slider)} {...settings}>
        {/* Carousel 1 START */}
        <div>
          <div className={classes.pageHeader} style={styleHeader()}>
            <div className={classes.container2}>
              {width > 1930 ? (
                <GridContainer
                  justify="flex-start"
                  alignItems="baseline"
                  direction="row"
                >
                  <GridItem
                    xs={12}
                    sm={12}
                    md={10}
                    lg={10}
                    // style={{ marginBottom: "550px", marginLeft: "-200px" }}
                  >
                    <h1 className={classes.title}>Wesley Spencer</h1>

                    {introDescription()}
                    <br />
                    <GridItem
                      xs={6}
                      sm={10}
                      md={7}
                      lg={5}
                      className={classNames(
                        classes.mrAuto +
                          " " +
                          classes.mrAuto +
                          " " +
                          classes.textCenter
                      )}
                    >
                      <Modal
                        block={"block"}
                        round={"round"}
                        buttonName="Resume"
                        buttonColor="warning"
                        content={<Resume />}
                        id="ResumeId"
                        transition={Transition}
                      />
                      <Button
                        href="https://www.linkedin.com/in/web-dev-spencer/"
                        color="white"
                        simple
                        size="lg"
                        justIcon
                      >
                        <i className="fab fa-linkedin" />
                      </Button>
                      <Button
                        href="mailto:wesley3295@gmail.com"
                        color="white"
                        simple
                        size="lg"
                        justIcon
                      >
                        <i className="fas fa-envelope" />
                      </Button>
                      <Button
                        href="https://github.com/wesley3295"
                        color="white"
                        simple
                        size="lg"
                        justIcon
                      >
                        <i className="fab fa-github" />
                      </Button>
                    </GridItem>
                  </GridItem>
                </GridContainer>
              ) : (
                <GridContainer
                  justify="flex-end"
                  alignItems="flex-end"
                  direction="row"
                >
                  <GridItem
                    xs={5}
                    sm={5}
                    md={4}
                    lg={4}
                    style={{ marginLeft: "-250px", marginTop: "0px" }}
                    className={classNames(
                      classes.mrAuto + " " + classes.textCenter
                    )}
                  >
                    <Modal
                      block={"block"}
                      round={"round"}
                      buttonName="Resume"
                      buttonColor="warning"
                      content={<Resume introDescription={introDescription} />}
                      id="ResumeId"
                      transition={Transition}
                    />
                    <Button
                      href="https://www.linkedin.com/in/web-dev-spencer/"
                      color="white"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fab fa-linkedin" />
                    </Button>
                    <Button
                      href="mailto:wesley3295@gmail.com"
                      color="white"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fas fa-envelope" />
                    </Button>
                    <Button
                      href="https://github.com/wesley3295"
                      color="white"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fab fa-github" />
                    </Button>
                  </GridItem>
                </GridContainer>
              )}
            </div>
          </div>
        </div>
        {/* Carousel 1 END */}
        {/* Carousel 2 START */}
        <div>
          <div
            id="projects-container"
            className={classes.pageHeader2}
            style={{ backgroundImage: `url("${dg2}")` }}
          >
            <div className={classes.container}>
              <ProjectsSection />
            </div>
          </div>
        </div>
        {/* Carousel 2 END */}
      </Carousel>
    </div>
  );
};

export default HeaderSection;
