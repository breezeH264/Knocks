import './ProductCard.scss';

type Props = {};

const ProductCard = (props: Props) => {
  return (
    <div className='product__card'>
      <div className='card__container'>
        <img
          className='card__image'
          src='https://knockshop-media.s3.amazonaws.com/rsmt-b02-793-a0-blk-sm-1_3000x3000.webp'
        />
        <h2>Panda Rose Skull Tattoo</h2>
        <p>$999.99</p>
      </div>
    </div>
  );
};

export default ProductCard;
