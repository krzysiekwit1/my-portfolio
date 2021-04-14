import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./styles";

const Product = ({ product, onAddToCart, handleProductPick }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
        onClick={() => handleProductPick(product.id)}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{
            __html: product.description,
          }}
          variant="body2"
          color="textSecondary"
        ></Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
