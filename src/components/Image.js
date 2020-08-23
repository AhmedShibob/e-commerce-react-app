import React, { useContext } from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

import { Context } from "../Context";

function Image({ className, img }) {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }
  function cartIcon(id) {
    let itemInCart = cartItems.some((cartItem) => cartItem["id"] === id);
    //  console.log(itemInCart);
    if (itemInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  }
  return (
    <div ref={ref} className={`${className} image-container`}>
      <img src={img.url} className="image-grid" alt="" />

      {heartIcon()}

      {cartIcon(img.id)}
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
