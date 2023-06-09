import './FirstVisit.scss';

import { useState } from 'react';

const FirstVisit = () => {
  const [welcome, setWelcome] = useState(true);

  const closeWelcome = () => {
    setWelcome(!welcome);
    localStorage.setItem('welcomeModal', '1');
  };

  if (localStorage.getItem('welcomeModal')) {
    return null;
  }

  return (
    <dialog open className='welcome__container'>
      <div className='welcome__modal'>
        <h2>Welcome to knocks!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button onClick={closeWelcome}>Close</button>
      </div>
    </dialog>
  );
};

export default FirstVisit;
