import { makeStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: "7rem",
    maxWidth: "500px",
    margin: "auto",
  },
  innerDiv: {
    marginRight: "1rem",
    marginLeft: "1rem",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    marginTop: "1rem",
    marginBottom: "1rem",
    color: "rgb(0, 44, 155)",
    float: "right",
    cursor: "pointer",
  },
  submitButton: {
    marginTop: "1rem",
  },
}));

export default useStyles;
