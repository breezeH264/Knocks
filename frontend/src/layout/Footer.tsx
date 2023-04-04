import './Footer.scss';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className='footer__container'>
        <section className='footer__top'>
          <div>
            <img className='footer__logo' src='./knocks-icon.png' />
            <p className='footer__quote'>just a knock(s.) off</p>

            <p>
              Your one-stop shop to a knock(s.)&trade; off brand of Riot
              Society.
              <br />
              This is not a real shopping site. This was purely made for
              educational purposes and fun.
            </p>
          </div>
          <div className='footer__btns'>
            <a
              className='footer__btn'
              href='https://github.com/breezeH264/Knocks'
              target='_blank'
              rel='noopener'
            >
              <FontAwesomeIcon icon={faAddressCard} />
              About
            </a>
            <Link to='/products' className='footer__btn'>
              <FontAwesomeIcon icon={faQuestion} />
              Site FAQ
            </Link>
          </div>
        </section>
        <hr />
        <section className='footer__bottom'>
          <div>
            <p className='logo'>knocks.</p>
          </div>
          <div>
            <p>&copy; 2023 knocks. All rights reserved.</p>
            {/* <a
              href='https://www.flaticon.com/free-icons/letter-k'
              title='letter k icons'
            >
              Letter k icons created by Fathema Khanom - Flaticon
            </a> */}
          </div>
          <div className='footer__icons'>
            <a
              href='https://github.com/breezeH264/Knocks'
              target='_blank'
              rel='noopener'
            >
              <FontAwesomeIcon icon={faGithubAlt} />
            </a>
            <a
              href='https://www.linkedin.com/in/derrickh-dev/'
              target='_blank'
              rel='noopener'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              href='https://twitter.com/breezeH264'
              target='_blank'
              rel='noopener'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
