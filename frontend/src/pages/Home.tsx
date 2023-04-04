import './Home.scss';

import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faCaretRight,
  faFaceLaughWink,
  faCartFlatbed,
  faTruckFast,
  faWandMagicSparkles,
  faMasksTheater,
  faPeopleGroup,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ProductCard from '../components/ProductCard';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export default function Home() {
  useTitle('Home | knocks.');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2750,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <section className='hero'>
        <div className='hero__container'>
          <div className='main'></div>
          <div className='top-picks'></div>
          <div className='clearance'></div>
          <div className='deal'></div>
        </div>
      </section>
      <section className='experience'>
        <div className='experience__container'>
          <div className='experience__header'>
            <h2>
              We Value <br />
              Customer Experience
            </h2>
            <p>
              We ensure our customers have the best online shopping experience.
            </p>
          </div>
          <div className='experience__blocks'>
            <div className='experience__block'>
              <FontAwesomeIcon icon={faCartFlatbed} className='link__cart' />
              <h3>New Additions</h3>
              <p>
                We update our catalog every day with top-of-the-line designs.
              </p>
            </div>

            <div className='experience__block'>
              <FontAwesomeIcon icon={faTruckFast} className='link__cart' />
              <h3>Fast & Free Shipping</h3>
              <p>
                Not a fan of long wait times? We offer fast and free shipping
                for every order.
              </p>
            </div>
            <div className='experience__block'>
              <FontAwesomeIcon icon={faPeopleGroup} className='link__cart' />
              <h3>Help Available 24/7</h3>
              <p>
                A trained team of support representatives is available around
                the clock.
              </p>
            </div>
            <div className='experience__block'>
              <FontAwesomeIcon icon={faMasksTheater} className='link__cart' />
              <h3>Satisfaction Guaranteed</h3>
              <p>
                If you don't feel like your order is right for you, send it back
                for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='new__container'>
        <div className='new__header'>
          <h2>Latest Releases</h2>
          <Link to='/products'>View All</Link>
        </div>
        <Slider {...settings}>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </Slider>
      </section>
      <section className='find'>
        <div className='find__container'>
          <div className='find__content'>
            <p className='find__quote'>Let's find something great.</p>
            <p>
              Our collection is sure to provide an upgrade to your wardrobe.
            </p>
          </div>
          <div className='find__links'>
            <Link to='/products' className='find__link'>
              <FontAwesomeIcon icon={faCartShopping} className='link__cart' />
              Catalog
            </Link>
            <Link to='/products' className='find__link'>
              <FontAwesomeIcon icon={faCaretRight} className='link__cart' />
              New Releases
            </Link>
          </div>
        </div>
      </section>
      <section className='new__container'>
        <h2>Best Sellers</h2>
        <Slider {...settings}>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
          <div>
            <ProductCard />
          </div>
        </Slider>
      </section>
      <section className='offer'>
        <div className='offer__container'>
          <div className='offer__content'>
            <div className='offer__left'>
              <img src='https://knockshop-media.s3.amazonaws.com/Email_Sign_Up_4.webp' />
            </div>
            <div className='offer__right'>
              <span>LIMITED TIME OFFER</span>
              <p>
                20% off today's order
                <br />
                and free shipping
              </p>
              <button className='offer_btn'>
                <FontAwesomeIcon icon={faArrowRight} className='link__cart' />
                More details
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className='mystery'></section>
    </>
  );
}
