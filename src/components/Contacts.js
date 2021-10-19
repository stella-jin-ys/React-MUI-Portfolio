import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Box, Grid, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import { Translate } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "#fca311",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fca311",
      },
      "&:hover fieldset": {
        borderColor: "#fca311",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fca311",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Box
        component="div"
        style={{
          backgroundImage: `url(
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1414&q=80"
    )`,
          height: "100vh",
        }}
      >
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Get in touch!
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            />
            <br />

            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            />
            <br />

            <InputField
              fullWidth={true}
              label="Company Name"
              variant="outlined"
              margin="dense"
              size="medium"
              inputProps={{ style: { color: "white" } }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              endIcon={<SendIcon />}
              className={classes.button}
            >
              Contact me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contacts;
