import React from "react";
import {
  Button,
  Typography,
  CardContent,
  Card,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "25rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginBottom: 12,
  },
}));

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const JoinUsForm = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    sent: false,
    githubUser: "",
    telegramUser: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setState({
          ...state,
          sent: true,
          githubUser: "",
          telegramUser: "",
        });
      })
      .catch((error) => console.log(error));
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setState({ sent: false });
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Member Registration
        </Typography>
        <Typography className={classes.subtitle} color="textSecondary">
          Please note that you must have a GitHub account and Telegram account
          in other to get on the group.
        </Typography>
        <form
          name="Member Join Form"
          method="post"
          action="/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <input type="hidden" name="form-name" value="join" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <TextField
            required
            type="text"
            name="githubUser"
            id="githubUser"
            value={state.githubUser}
            label="GitHub account user"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            required
            type="text"
            name="telegramUser"
            id="telegramUser"
            value={state.telegramUser}
            label="Telegram account user"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />

          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
        <Snackbar
          open={state.sent}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          key={{ vertical: "top", horizontal: "center" }}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert severity="success" onClose={handleSnackbarClose}>
            Your information has been submitted. A team member will review your
            request. Thank you.
          </Alert>
        </Snackbar>
      </CardContent>
    </Card>
  );
};

export default JoinUsForm;
