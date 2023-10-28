import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartItemCounter from "./CartItemCounter";

const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const deleteProduct = (id) => {
    const foundId = cart.find((element) => element.id === id);

    const newCart = cart.filter((element) => {
      return element !== foundId;
    });

    setCart(newCart);
  };

  return cart.map((product) => {
    return (
      <div className='cartContent' key={product.id}>
        <img src={require(`../../Assets/${product.imagen}`)} alt='product-card' style={{ height: "100px" }} />
        <h3 className='name'>{product.titulo}</h3>
        <CartItemCounter product={product} />
        <h4 className='price'>{product.precio * product.quanty}$</h4>
        <h3 class='cart-delete-button' onClick={() => deleteProduct(product.id)}>
          ❌
        </h3>
      </div>
    );
  });
};

export default CartElements;
