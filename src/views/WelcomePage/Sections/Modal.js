import React from "react";
/*eslint-disable*/
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "/home/wes3295/Development/code/projects/Epic-Portfolio/src/Hooks/useWindowDimension.js";

import ModalContent from "./ModalContent";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

const Modal = ({
  buttonName,
  buttonColor,
  buttonStyle,
  buttonClass,
  buttonIcon,
  content,
  id,
  transition,
  ...rest
}) => {
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div key={id}>
      <GridItem>
        <Button
          color={buttonColor}
          {...rest}
          onClick={() => setClassicModal(true)}
          className={buttonClass}
          style={buttonStyle}
        >
          {buttonName}
          {buttonIcon}
        </Button>
        <ModalContent
          transition={transition}
          classicModal={classicModal}
          setClassicModal={setClassicModal}
          content={content}
          id={id}
        />
      </GridItem>
    </div>
  );
};

export default Modal;
