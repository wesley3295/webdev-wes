import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.js";
import {
  container,
  mrAuto,
  title,
  blackColor,
  whiteColor,
  warningColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";

const headersSection = (theme) => {
  return {
    ...headerLinksStyle(theme),
    sectionBlank: {
      height: "70px",
      display: "block",
    },
    container: {
      ...container,
      paddingRight: "15px",
      paddingLeft: "15px",
      marginRight: "auto",
      marginLeft: "auto",
      width: "100%",
      zIndex: "2",
      position: "relative",
      "& h1, & h4, & h6": {
        color: whiteColor,
      },
    },
    container2: {
      ...container,
      paddingRight: "15px",
      paddingLeft: "15px",
      paddingTop: "150px",
      marginRight: "auto",
      marginLeft: "250px",
      width: "100%",
      zIndex: "2",
      position: "relative",
      "& h1, & h4, & h6": {
        color: whiteColor,
      },
    },
    title,
    pageHeader: {
      position: "relative",
      height: "100vh",
      backgroundPosition: "50% 10%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      "@media (min-width: 576px)": {
        maxWidth: "1000px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "1600px",
      },
      "@media (min-width: 992px)": {
        maxWidth: "1800px",
      },
      "@media (min-width: 1200px)": {
        maxWidth: "2600px",
      },
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    pageHeader2: {
      position: "relative",
      height: "100vh",
      maxHeight: "1600px",
      backgroundPosition: "50% 100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: "0",
      padding: "0",
      border: "0",
      WebkitBoxAlign: "center",
      MsFlexAlign: "center",
      alignItems: "center",
      "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.2)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    iframeContainer: {
      "& > iframe": {
        width: "100%",
        boxShadow:
          "0 16px 38px -12px rgba(" +
          hexToRgb(blackColor) +
          ", 0.56), 0 4px 25px 0px rgba(" +
          hexToRgb(blackColor) +
          ", 0.12), 0 8px 10px -5px rgba(" +
          hexToRgb(blackColor) +
          ", 0.2)",
      },
    },
    mrAuto,
    textCenter: {
      textAlign: "center",
    },
    card: {
      marginTop: "60px",
    },
    formControl: {
      margin: "0",
      padding: "8px 0 0 0",
    },
    textRight: {
      textAlign: "right",
    },
    button: {
      margin: "0 !important",
    },
    //resume style
    resumeHeader: { borderTop: "1px solid", borderBottom: "1px solid" },
    resumeDiv: {
      borderBottom: "1px solid",
      "& h3, & h5": { color: warningColor[0] },
      "& a": { textDecoration: "none", color: warningColor[0] },
    },
    resumeLi: { paddingBottom: "5px" },
    resumeP: { fontSize: "1rem" },
  };
};

export default headersSection;
