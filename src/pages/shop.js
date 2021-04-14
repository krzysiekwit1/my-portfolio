import React, { Component } from "react"
import Products from "../components/ShopComponents/Products/Products"
import Navbar from "../components/ShopComponents/Navbar/Navbar"
import Cart from "../components/ShopComponents/Cart/Cart"
import Checkout from "../components/ShopComponents/CheckoutForm/Checkout/Checkout"
import SpecificItem from "../components/ShopComponents/SpecificItem/SpecificItem"
import { commerce } from "../components/ShopComponents/lib/commerce"
import Footer from "../components/ShopComponents/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
class ShopContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      allProducts: [],
      cart: [],
      category: null,
      categoryProducts: [],
      currentView: "main",
      currentProductId: null,
    }
  }

  fetchProducts = async () => {
    const { data } = await commerce.products.list()
    this.setState({ products: data })
    this.setState({ allProducts: data })
  }
  fetchCart = async () => {
    const cart = await commerce.cart.retrieve()
    this.setState({ cart: cart })
  }
  handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity)
    this.setState({ cart: cart })
  }
  handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity })
    this.setState({ cart: cart })
  }
  handleRemoveFromCart = async productId => {
    const { cart } = await commerce.cart.remove(productId)
    this.setState({ cart: cart })
  }
  handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty()
    this.setState({ cart: cart })
  }
  handleCategoryChange = async (e, products = this.state.allProducts) => {
    const choosedCategory = e.target.innerHTML.toLowerCase()
    if (choosedCategory === "all") {
      this.setState({ products: products, currentView: "main" })
    } else {
      // const { data } = await commerce.products.list();
      let newProducts = []
      products.map(product => {
        if (product.categories.length > 0) {
          if (product.categories[0].slug === choosedCategory) {
            newProducts.push(product)
          }
        }
      })
      this.setState({ products: newProducts, currentView: "main" })
    }
  }
  handleMainPage = () => {
    this.setState({ currentView: "main", products: this.state.allProducts })
  }
  handleProductPick = productId => {
    console.log(productId)
    this.setState({ currentProductId: productId })
    this.setState({ currentView: "product" })
  }
  handleCartView = () => {
    this.setState({ currentView: "cart" })
  }
  handleCheckoutView = () => {
    console.log("checkout")
    this.setState({ currentView: "checkout" })
  }
  componentDidMount = () => {
    this.fetchProducts()
    this.fetchCart()
    document.body.style = "overflow:auto;background: #ebebeb;"
  }
  componentWillUnmount = () => {}
  render() {
    return (
      <div
        className="body-container-shop"
        style={{ height: "100%", overflow: "hidden" }}
      >
        <Navbar
          totalItems={this.state.cart.total_items}
          handleCategoryChange={this.handleCategoryChange}
          handleCartButton={this.handleCartView}
          handleLogoButton={this.handleMainPage}
        />
        <div className="shop-background-photo"></div>
        {this.state.currentView === "main" ? (
          <Products
            products={this.state.products}
            onAddToCart={this.handleAddToCart}
            handleProductPick={this.handleProductPick}
          />
        ) : (
          <></>
        )}
        {this.state.currentView === "product" ? (
          <>
            <SpecificItem
              products={this.state.products}
              onAddToCart={this.handleAddToCart}
              productId={this.state.currentProductId}
              handleProductPick={this.handleProductPick}
            />
          </>
        ) : (
          <></>
        )}
        {this.state.currentView === "cart" ? (
          <>
            <Cart
              cart={this.state.cart}
              handleUpdateCartQty={this.handleUpdateCartQty}
              handleRemoveFromCart={this.handleRemoveFromCart}
              handleEmptyCart={this.handleEmptyCart}
              handleCheckoutButton={this.handleCheckoutView}
            />
          </>
        ) : (
          <></>
        )}
        {this.state.currentView === "checkout" ? (
          <>
            <Checkout
              cart={this.state.cart}
              handleBackToCartButton={this.handleCartView}
            />
          </>
        ) : (
          <></>
        )}

        <Footer />

        <Link to="/">
          <FontAwesomeIcon
            style={{
              position: "fixed",
              left: "5px",
              bottom: "5px",
              color: "red",
            }}
            icon={faAngleDoubleLeft}
            size="3x"
          />
        </Link>
      </div>
    )
  }
}
export default ShopContainer
