import React, { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { incCart, decCart, removeFromCard } from "../../context/cartSlice";
import { Link } from "react-router-dom";
import CheckOut from "../checkOut/CheckOut";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let items = cart?.map((el) => (
    <>
      <div className="cart__box">
        <div className="title">
          <img src={el.images[0]} alt="" />
          <h3>{el.title}</h3>
        </div>
        <h3>${el.price}</h3>
        <div className="quantity">
          <h3>
            <span>{el.price}</span>
            {el.quantity}
            <span>=</span>
          </h3>
          <div className="calculator">
            <button
              disabled={el.quantity <= 1}
              onClick={() => dispatch(decCart(el))}
            >
              -
            </button>
            <button onClick={() => dispatch(incCart(el))}>+</button>
          </div>
        </div>
        <h3>${el.price * el.quantity}</h3>
        <button onClick={() => dispatch(removeFromCard(el))}>
          <button class="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 14"
              class="svgIcon bin-top"
            >
              <g clip-path="url(#clip0_35_24)">
                <path
                  fill="black"
                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_35_24">
                  <rect fill="white" height="14" width="69"></rect>
                </clipPath>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 57"
              class="svgIcon bin-bottom"
            >
              <g clip-path="url(#clip0_35_22)">
                <path
                  fill="black"
                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_35_22">
                  <rect fill="white" height="57" width="69"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </button>
      </div>
    </>
  ));
  return (
    <div className="cart__boxes container">
      <br />
      <br />
      <br />
      <br />
      <div className="cart__box">
        <h3>Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Subtotal</h3>
        <button>
          <FaTrashAlt />
        </button>
      </div>
      <br />
      <br />
      <br />
      {items}
      <div className="return">
        <button className="cart__btn">Update Cart</button>
        <button className="cart__btn">Update Cart</button>
      </div>
      <div className="cart__register container">
        <div className="cart__register__left">
          <input type="text" placeholder="Coupon Code" />
          <button className="cart__btn">Apply Coupon</button>
        </div>
        <div className="cart__register__right">
          <h2>Cart Total</h2>
          <div className="subtital">
            <h3>Subtotal:</h3>
            <h3>$1750</h3>
          </div>
          <div className="subtital">
            <h3>Shipping:</h3>
            <h3>Free</h3>
          </div>
          <div className="subtital">
            <h3>Total:</h3>
            <h3>$$1750</h3>
          </div>
          <Link to={"/checkOut"}>
            <button className="cart__btn">Procees to checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
