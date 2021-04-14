import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./CartItem/CartItem";
const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
  handleCheckoutButton,
}) => {
  const classes = useStyles();
  if (!cart.line_items) return "Loading...";

  // const isEmpty = !cart.line_items.length;

  const EmptyCart = () => {
    return (
      <Typography varian="subtitle1">
        You have no items in shopping cart. Find something for you !
      </Typography>
    );
  };
  const FilledCart = () => {
    return (
      <Grid>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={3} key={item.id}>
              <CartItem
                item={item}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateCartQty={handleUpdateCartQty}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography varian="h4">
            Subtotal:{cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Button
              onClick={handleEmptyCart}
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="secondary"
            >
              EmptyCart
            </Button>
            <Button
              onClick={handleCheckoutButton}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          </div>
        </div>
      </Grid>
    );
  };
  return (
    <Container className={classes.toolbar}>
      <Typography className={classes.title} variant="h4">
        Your Shoping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};
export default Cart;
