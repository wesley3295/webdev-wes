import React from "react";
import Badge from "components/Badge/Badge.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles(headersStyle);

// eslint-disable-next-line react/prop-types
const Resume = ({ introDescription }) => {
  const classes = useStyles();
  return (
    <div className={classes.resumeDiv}>
      <h2>Wesley Spencer</h2>
      {introDescription && introDescription()}

      <h4>Full Stack Software Engineer</h4>
      <div className={classes.resumeHeader}>
        <a
          style={{ paddingRight: "85px", color: "black" }}
          href="mailto:wesley3295@gmail.com"
        >
          wesley3295@gmail.com
        </a>{" "}
        <a
          style={{ paddingRight: "85px", color: "black" }}
          href="tel: 623-336-8224"
        >
          623-336-8224
        </a>
        <a style={{ paddingRight: "85px" }} href="github.com/wesley3295">
          github.com/wesley3295
        </a>
        U.S. Citizen
      </div>
      <div className={classes.resumeDiv} style={{ paddingBottom: "15px" }}>
        <h3>Experience</h3>
        <h4>
          <strong>paretOS</strong> - Open-source
        </h4>

        <a href="https://paret0.com">https://paret0.com</a>
        <p className={classes.resumeP}>
          The ParetOS is a browser-based, high-level operating system designed
          to maximize human potential. It is designed to give you the 20% of
          software you need on a day-to-day basis that gives you 80% of the
          benefits modern tech has to offer.
        </p>
        <ul>
          <li>Refactored components into more DRY and readable code</li>
          <li>Utilized Redux library to add current user into the store </li>
          <li>
            Incorporated a filter/search functionality for long select lists
          </li>
          <li>Styled Components </li>
        </ul>
      </div>
      <div className={classes.resumeDiv}>
        <h3>Applications</h3>{" "}
        <h4>
          {" "}
          <strong>DoPad</strong>
        </h4>
        <a href="#">DoPad.io</a>
        <p className={classes.resumeP}>
          A single page application that allows users to create DIY&apos;s by
          adding steps with instructions and pictures, to either display for
          others use or simply archive for future use. The front-end of this
          application is built with React.js, Material-ui styled components,
          Redux.js for global state layering. The back-end is built with Ruby on
          Rails API, implemented JWT for sessions, bcrypt password encryption,
          and PostgreSQL database to hold user and DIY data.
        </p>
        <h4>
          {" "}
          <strong>Amazon Clone</strong>
        </h4>
        <a href="https://clone-22f24.web.app/">Amazon-Clone.app</a>
        <p className={classes.resumeP}>
          A clone of Amazon using React.js library for front-end development,
          and CSS for styled components. Express, Node, and MongoDB for back-end
          development carrying the data of products and user authentication.
          State management using &apos;StateProvider&apos; from React Add/remove
          product to/from cart updating state throughout multiple components.
          Used Firestore for cloud functionality when checking out.
        </p>
      </div>
      <div className={classes.resumeDiv}>
        <h3>Education</h3>
        <h4>
          <strong>
            {" "}
            Certificate - Full Stack Software Engineer Student - Flatiron School
          </strong>{" "}
        </h4>
        <h6>09/2020 - 04/2021</h6>
        <ul>
          <li className={classes.resumeLi}>
            Set up front-end with React.js, used Node.js to bring in multiple
            libraries such as &quot;react-router-DOM&quot;, Material-ui,
            Redux.js{" "}
          </li>
          <li className={classes.resumeLi}>
            {" "}
            Set up global state with Redux.js, Manipulated and stocked the Redux
            Store with Asynchronous calls to the back-end using middleware
            &quot;Thunk.&quot; Utilizing hooks within components to connect to
            the Redux Store and pull state directly out and display directly to
            the Virtual DOM
          </li>
          <li className={classes.resumeLi}>
            Set up multiple RESTful API&apos;s with the back-end framework Ruby
            on Rails, implementing user authentication, password encryption, and
            sessions(JWT).
          </li>
          <li className={classes.resumeLi}>
            Experience in Rspec testing by completing over 100+ coding exercises{" "}
          </li>
          <li className={classes.resumeLi}>
            {" "}
            I held virtual study groups everyday, which in return pushed the
            development of myself and other students further than they were
            capable of doing on their own
          </li>
          <li className={classes.resumeLi}>
            Pair-programmed with other students daily. In return I showed I can
            work and collaborate well with a team, I grasped concepts better,
            sharpened my problem solving skill set, and wrote clean and readable
            code faster.
          </li>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={12}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <Badge>React.js</Badge>
              <Badge>Redux.js</Badge>
              <Badge>Node.js</Badge>
              <Badge>JavaScript</Badge>
              <Badge>CSS</Badge>
              <Badge>Material-ui</Badge>
              <Badge>HTML</Badge>
              <Badge>Ruby</Badge>
              <Badge>Ruby on Rails</Badge>
            </GridItem>
          </GridContainer>
        </ul>
      </div>
      <div>
        <h3>Interests</h3>
        <strong>
          Server/Bartender | Scottsdale, AZ
          <br />
        </strong>
        <h6>05/2013 - Current</h6>
        <ul>
          <li className={classes.resumeLi}>
            {" "}
            Recognized for &quot;Great Customer Service&quot; by going above and
            beyond to meet customer and company standards and more.
          </li>
          <li className={classes.resumeLi}>
            {" "}
            Recognized for being a &quot;Great Teammate&quot; by helping those
            around me. This returns faster turn over rates and keeps co-worker
            morale high.
          </li>
          <li className={classes.resumeLi}>
            {" "}
            Recognized for having a &quot;Positive Personality.&quot; In return
            workplace morale was higher and the environment/atmosphere was fun
            and enjoyable to be in.
          </li>
          <li className={classes.resumeLi}>
            Trainer for multiple positions. In return liquor inventory matched
            the point of sales record. Taught steps of service to trainees
            giving them the tools and ability to deliver an exceptional fine
            dining experience.
          </li>
          <li>
            Mastered all positions throughout the restaurant industry driving my
            asset value as an employee higher, also being recognized for pushing
            &quot;Point of Sales&quot; higher because of position flexibility.{" "}
          </li>
        </ul>

        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{ paddingBottom: "5px" }}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <Badge>Leadership</Badge>
            <Badge>Team-oriented</Badge>
            <Badge>Fast Work Ethic</Badge>
            <Badge>Effective Communication</Badge>
            <Badge>Active listening</Badge>
            <Badge>Positive language</Badge>
            <Badge>Problem solving</Badge>
            <Badge>Patience</Badge>
            <Badge>Resilience</Badge>
            <Badge> Social perceptiveness</Badge>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};
export default Resume;
