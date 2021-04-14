import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    marginTop: "10%!important",
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "10%",
    marginRight: "10%",
    height: "500px",
    overflowY: "hidden",
    [theme.breakpoints.down("md")]: {
      display: "block",
      margin: "0px",
    },
  },
  half: {
    width: "65.5%",
    float: "right",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  imageContainer: {
    margin: "auto auto",
    height: "70vw",
    width: "30vw",
  },
  half2: {
    height: "100%",
    width: "20%",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: "0",
      width: "100%",
    },
  },
  price: {
    marginBottom: "10%",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0",
    },
  },
  description: { fontWeight: "bold" },
  descriptionTitle: {
    fontWeight: "bold",
  },
  sizeButton: {
    borderRadius: "0",
    color: "black",
    transition: "1s",
    border: "1px solid black",
    backgroundColor: "white",
    "&:hover": {
      color: "white",
      background: "black",
    },
    "&:active": {
      color: "white",
      background: "black",
    },
  },
  sizeButtonsContainer: {
    marginTop: "7%",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  addToCartButtonContainer: {
    marginTop: "20%",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  addToCartButton: {
    borderRadius: "0",
    color: "#3f51b5",
    transition: "1s",
    border: "1px solid #3f51b5",
    backgroundColor: "white",
    "&:hover": {
      color: "white",
      background: "#3f51b5",
    },
  },
  sameCategoryContainer: {
    width: "100%",
    marginTop: "5vh",
    textAlign: "center",
    backgroundColor: "#fff",
    paddingBottom: "5vh",
  },
}));
