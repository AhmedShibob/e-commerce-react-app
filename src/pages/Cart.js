import React, { useState, useContext } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Order Now");

  const { cartItems, emptyCart } = useContext(Context);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });


  function order() {
    setButtonText("Ordering...")
    setTimeout(() => {
        console.log("Ordered!")
        setButtonText("Order Now")
        emptyCart()
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
          {cartItems.length?  <button onClick={order}>{buttonText}</button>: <p>You have no items in your cart.</p> }
      </div>
    </main>
  );
}

export default Cart;
