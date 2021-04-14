import React, { useState, useEffect } from "react"
import useStyles from "./styles"
import Image from "material-ui-image"
import { Typography, Button, Grid } from "@material-ui/core"
const SpecificItem = ({
  products,
  onAddToCart,
  productId,
  handleProductPick,
}) => {
  const [product, setProduct] = useState(0)
  const [productSameCategory, setProductSameCategory] = useState(0)

  const classes = useStyles()
  console.log(productId)
  const fetchSpecificProducts = () => {
    products.map(product => {
      if (product.id === productId) {
        console.log(product)

        setProduct(product)
      }
    })
  }

  const fetchSameCategoryProducts = () => {
    if (product !== 0) {
      const array = []
      products.map(item => {
        if (
          item.categories[0].slug === product.categories[0].slug &&
          item.id !== product.id
        ) {
          array.push(item)
        }
      })
      setProductSameCategory(array)
      console.log(array)
    }
  }

  useEffect(() => {
    fetchSpecificProducts()
  })
  useEffect(() => {
    fetchSameCategoryProducts()
  }, [product])

  const Item = ({
    product,
    onAddToCart,
    productSameCategory = 0,
    handleProductPick,
  }) => {
    return (
      <>
        <div className={classes.container}>
          <div className={classes.half}>
            <div className={classes.imageContainer}>
              <Image src={product.media.source} className={classes.image} />
            </div>
          </div>
          <div className={classes.half2}>
            <Typography variant="h3" style={{ marginBottom: "1%" }}>
              {product.name}
            </Typography>

            <Typography variant="h4" className={classes.price}>
              {product.price.formatted_with_symbol}
            </Typography>
            <Typography variant="body2" className={classes.descriptionTitle}>
              Description
            </Typography>
            <Typography
              variant="body2"
              dangerouslySetInnerHTML={{
                __html: product.description,
              }}
              style={{ marginBottom: "2%" }}
              className={classes.description}
            ></Typography>
            <Typography variant="body2" className={classes.descriptionTitle}>
              Specification:
            </Typography>
            <Typography variant="body2" className={classes.description}>
              80% polyester, 20% elastyne interlock
            </Typography>
            <Typography variant="body2" className={classes.description}>
              Moisture absorbing
            </Typography>
            <Typography variant="body2" className={classes.description}>
              Inside Pocket
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.sizeButtonsContainer}
            >
              <Button
                className={classes.sizeButton}
                size="small"
                type="button"
                variant="contained"
                color="primary"
              >
                S
              </Button>
              <Button
                className={classes.sizeButton}
                size="small"
                type="button"
                variant="contained"
                color="primary"
              >
                M
              </Button>
              <Button
                className={classes.sizeButton}
                size="small"
                type="button"
                variant="contained"
                color="primary"
              >
                L
              </Button>
              <Button
                className={classes.sizeButton}
                size="small"
                type="button"
                variant="contained"
                color="primary"
              >
                XL
              </Button>
              <Button
                className={classes.sizeButton}
                size="small"
                type="button"
                variant="contained"
                color="primary"
              >
                XXL
              </Button>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.addToCartButtonContainer}
            >
              <Button
                className={classes.addToCartButton}
                size="large"
                type="button"
                variant="contained"
                color="primary"
                onClick={() => onAddToCart(product.id, 1)}
              >
                Add to Cart
              </Button>
            </Grid>
          </div>
        </div>

        <Grid container className={classes.sameCategoryContainer}>
          <Typography variant="h5" style={{ width: "100%", color: "#3f51b5" }}>
            You may also like
          </Typography>
          <Grid
            style={{ marginTop: "1px" }}
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
          >
            {productSameCategory !== 0 ? (
              productSameCategory.map(product => (
                <div
                  style={{
                    height: "10vw",
                    width: "10vw",
                    marginLeft: "2%",
                  }}
                >
                  <Image
                    key={product.id}
                    onClick={() => handleProductPick(product.id)}
                    src={product.media.source}
                  />
                </div>
              ))
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      </>
    )
  }
  return (
    <>
      {product.media !== undefined ? (
        <Item
          product={product}
          onAddToCart={onAddToCart}
          productSameCategory={productSameCategory}
          handleProductPick={handleProductPick}
        />
      ) : (
        console.log(product)
      )}
      {console.log("tutaj")}
      <div>twoja stara</div>
    </>
  )
}

export default SpecificItem
