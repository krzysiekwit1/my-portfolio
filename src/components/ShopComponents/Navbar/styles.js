import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        boxShadow: "none",
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    title: {
        alignItems: "center",
        display: "flex",
        textDecoration: "none",
    },
    image: {
        marginRight: "10px",
        width: "25px",
        height: "20px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    button: {},
    grow: {},
    middle: {
        alignContent: "center",
        display: "flex",
        flexWrap: "flex-row",
    },
    middleContent: {
        marginLeft: "15px",
        cursor: "pointer",
        textDecoration: "none",
        "&:visited": {
            textDecoration: "none",
        },
        "&:active": {
            textDecoration: "none",
        },
    },
    middleContentSubNavbar: {
        marginLeft: "15px",
    },
    subNavbar: {
        margin: "auto auto",
        align: "left",
        alignItems: "center",
        alignContent: "center",
        display: "flex",
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
