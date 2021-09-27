import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";
import axios from "Axios/Axios.js";
const useStyles = makeStyles(contactUsStyle);

const Contact = () => {
  const classes = useStyles();
  const nullableEntry = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [form, setForm] = React.useState(nullableEntry);
  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    axios(
      {
        method: "POST",
        url: "/contact",
        data: form,
      }
      // { headers: { "X-Requested-With": "XMLHttpRequest" } }
    ).then((response) => {
      if (response.data.status === "Message Sent") {
        e.target.reset();
        alert("Message Sent.");
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };
  return (
    <div>
      <h2 className={classes.title}>Hire Me!</h2>
      <GridContainer>
        <GridItem md={12} sm={6}>
          <p>
            Send a message to me! I&apos;ll get back to you in a timely manner.
            <br />
            <br />
          </p>
          <form onSubmit={handleSubmit}>
            <CustomInput
              labelText="Your Name"
              id="float"
              value={form.name}
              inputProps={{
                name: "name",
                onChange: (e) => setForm({ ...form, name: e.target.value }),
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Email address"
              id="float"
              value={form.email}
              inputProps={{
                onChange: (e) => setForm({ ...form, email: e.target.value }),
                name: "email",
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Phone"
              id="float"
              value={form.phone}
              inputProps={{
                onChange: (e) => setForm({ ...form, phone: e.target.value }),
                name: "phone",
              }}
              formControlProps={{
                fullWidth: true,
              }}
            />
            <CustomInput
              labelText="Your message"
              id="float"
              value={form.message}
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                multiline: true,
                rows: 6,
                onChange: (e) => setForm({ ...form, message: e.target.value }),

                name: "message",
              }}
            />
            <div className={classes.textCenter}>
              <Button type="submit" color="warning" round>
                Send it!
              </Button>
            </div>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Contact;
