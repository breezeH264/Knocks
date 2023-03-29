import { useTitle } from '../hooks/useTitle';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import './Cart.scss';

import { Product } from '../types/types';

import {
  addToCart,
  decreaseQuantity,
  clearCart,
  deleteItem,
} from '../features/cart/cartSlice';
import { useAppDispatch } from '../app/hooks';

export default function Cart() {
  const cart = useAppSelector(state => state.cart);

  const dispatch = useAppDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (product: Product) => {
    dispatch(decreaseQuantity(product));
  };

  const handleClearCart = (product: any) => {
    dispatch(clearCart(product));
  };

  const handleDeleteItem = (product: Product) => {
    dispatch(deleteItem(product));
  };

  useTitle('Cart | Knocks.app');
  return (
    <>
      <div className='cart__header'>
        <h1>Cart</h1>
        <button onClick={() => handleClearCart(cart)}>Remove</button>
      </div>
      <div className='cart__headings'>
        <h2>PRODUCT</h2>
        <h2>QUANTITY</h2>
        <h2>PRICE</h2>
      </div>
      <div className='cart__products'>
        {cart.cartProducts?.map(cartProduct => (
          <div key={cartProduct.id} className='cart__product'>
            <section className='cart__details'>
              <img
                className='cart__thumbnail'
                src={cartProduct.image}
                alt={cartProduct.title}
              />
              <h3>{cartProduct.title}</h3>
              <span>size</span>
            </section>
            <section>
              <div>
                <button onClick={() => handleDecreaseQuantity(cartProduct)}>
                  -
                </button>
                <span>{cartProduct.itemQuantity}</span>
                <button onClick={() => handleAddToCart(cartProduct)}>+</button>
              </div>
              <div>
                <button onClick={() => handleDeleteItem(cartProduct)}>
                  Remove
                </button>
              </div>
            </section>
            <section>
              <p>Total :${cartProduct.price * cartProduct.itemQuantity}</p>
              <p>
                <em>${cartProduct.price} per item</em>
              </p>
            </section>
          </div>
        ))}
      </div>
      <span>Subtotal: </span>
      <span>{cart.cartPrice}</span>
    </>
  );
}
