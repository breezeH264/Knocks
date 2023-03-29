import { NavLink } from 'react-router-dom';
import { getTotals } from '../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect } from 'react';
import { store } from '../app/store';

import './Header.scss';

export default function Header() {
  const { cartQuantity } = useAppSelector(state => state.cart);

  const cart = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  store.dispatch(getTotals);

  //dispatch(getTotals());

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cart'>
          Cart<span>{cartQuantity}</span>
        </NavLink>
      </nav>
    </header>
  );
}
