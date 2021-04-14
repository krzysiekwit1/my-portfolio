import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: "flex",
        justifyContent: "space-between",
    },
    cartActions: {
        justifyContent: "space-between",
    },
    buttons: {
        display: "flex",
        alignItems: "center",
    },
    removeButton: {
        background: "white",
        border: "2px solid black",
        color: "black",
        transition: "1s",
        "&:hover": {
            background: "black",
            color: "white",
        },
    },
}));
