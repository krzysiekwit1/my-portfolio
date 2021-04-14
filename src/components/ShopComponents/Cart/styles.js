import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: "5%",
    },
    emptyButton: {
        minWidth: "150px",
        background: "white",
        border: "2px solid black",
        color: "black",
        transition: "1s",
        [theme.breakpoints.down("xs")]: {
            marginBottom: "5px",
        },
        [theme.breakpoints.up("xs")]: {
            marginRight: "20px",
        },
        "&:hover": {
            background: "black",
            color: "white",
        },
    },
    checkoutButton: {
        minWidth: "150px",
        color: "#3f51b5",
        background: "white",
        border: "2px solid #3f51b5",
        transition: "1s",
        "&:hover": {
            background: "#3f51b5",
            color: "white",
        },
    },
    link: {
        textDecoration: "none",
    },
    cardDetails: {
        display: "flex",
        marginTop: "10%",
        width: "100%",
        justifyContent: "space-between",
    },
}));
