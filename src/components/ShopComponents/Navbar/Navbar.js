import React from "react"
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
  Grid,
} from "@material-ui/core"
import { ShoppingCart } from "@material-ui/icons"
import useStyles from "./styles"
import toolsImage from "../../../assets/images/Tools.jpg"
const Navbar = ({
  totalItems,
  handleCategoryChange,
  handleCartButton,
  handleLogoButton,
}) => {
  const classes = useStyles()
  return (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          className={classes.title}
          color="inherit"
          onClick={handleLogoButton}
        >
          <img
            src={toolsImage}
            alt="shop"
            height="25px"
            className={classes.image}
          />
          GoodShop
        </Typography>
        <div className={classes.middle} alignContent="center">
          <Typography
            className={classes.middleContent}
            onClick={e => handleCategoryChange(e)}
          >
            All
          </Typography>
          <Typography
            className={classes.middleContent}
            onClick={e => handleCategoryChange(e)}
          >
            T-shirts
          </Typography>
          <Typography
            className={classes.middleContent}
            onClick={e => handleCategoryChange(e)}
          >
            Hoodies
          </Typography>
          <Typography
            className={classes.middleContent}
            onClick={e => handleCategoryChange(e)}
          >
            Jeans
          </Typography>
          <Typography
            className={classes.middleContent}
            onClick={e => handleCategoryChange(e)}
          >
            Shoes
          </Typography>
          <Typography
            className={classes.middleContent}
            onClick={e => handleCategoryChange(e)}
          >
            Accessories
          </Typography>
        </div>
        <div className={classes.button}>
          <Grid alignContent="flex-end">
            <IconButton
              onClick={handleCartButton}
              aria-label="short cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Grid>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
