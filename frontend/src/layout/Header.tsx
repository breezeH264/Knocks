import { NavLink } from 'react-router-dom';
import { getTotals } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { store } from '../app/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

export default function Header() {
  const { cartQuantity } = useAppSelector(state => state.cart);

  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  store.dispatch(getTotals);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <header>
      <div className='header__container'>
        <section>
          <NavLink to='/'>
            <p className='logo'>knocks.</p>
          </NavLink>
        </section>
        <nav>
          <ul className='nav__items'>
            <li>
              <NavLink to='/products'>DISCOVER</NavLink>
            </li>
            <li>
              <NavLink to='/products'>COLLECTIBLES</NavLink>
            </li>
            <li>
              <NavLink to='/products/new'>ON SALE</NavLink>
            </li>
          </ul>
        </nav>
        <section className='search'>
          <input className='header__search'></input>
          <NavLink to='/cart' className='cart__icon'>
            <FontAwesomeIcon icon={faCartShopping} className='header__cart' />
            <span className='cart__quantity'>{cartQuantity}</span>
          </NavLink>
        </section>
      </div>
    </header>
  );
}
