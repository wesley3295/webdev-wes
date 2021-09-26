/* eslint-disable react/prop-types */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// core components
import Button from "components/CustomButtons/Button.js";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

const useStyles = makeStyles(javascriptStyles);
const ModalContent = ({
  transition,
  classicModal,
  setClassicModal,
  content,
  id,
}) => {
  const classes = useStyles();

  return (
    <div key={id}>
      <Dialog
        key={id}
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={classicModal}
        TransitionComponent={transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          {content}
        </DialogContent>
        <DialogActions className={classes.modalFooter}>
          <Button onClick={() => setClassicModal(false)} color="danger" simple>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalContent;
