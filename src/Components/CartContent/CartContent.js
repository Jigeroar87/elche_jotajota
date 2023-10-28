import { Fragment, useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import Navbar from "../Navbar/Navbar";

import "./CartContent.css";
import CartForm from "./CartForm";



const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <Fragment>
      <section className="pt-5 section__color min-vh-100 fondo__pagina">
            {cart.length > 0 ? (
                <>
                <CartElements />
                <CartTotal />
                <CartForm/>
                </>
            ) : (
                <h2 className='cart-message-center'>Your cart is empty</h2>
            )}
      </section>
    </Fragment>
  );
};

export default CartContent;
