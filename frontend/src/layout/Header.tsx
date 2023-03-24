import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/cart'>
          Cart<span id='cart-quantity'>0</span>
        </NavLink>
      </nav>
    </header>
  );
}
