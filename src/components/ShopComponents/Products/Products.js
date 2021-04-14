import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, handleProductPick }) => {
  const classes = useStyles();

  return (
    <main style={{ minHeight: "100vh" }} className={classes.content}>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product
              product={product}
              onAddToCart={onAddToCart}
              handleProductPick={handleProductPick}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
export default Products;
