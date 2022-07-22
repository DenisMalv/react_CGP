import css from './RightSide.module.css';
import { RightSideItem } from 'components/RightSideItem/RightSideItem';

import { getUserProductsInBasket } from 'redux/orderBasketSlice/orderBasketSlice';
import { useSelector } from 'react-redux';

export const RightSide = () => {
  const userProductsInBasket = useSelector(getUserProductsInBasket);
  return (
    <div className={css.rightSideWrapper}>
      {userProductsInBasket && (
        <ul className={css.rightSideList}>
          {userProductsInBasket.map(elem => (
            <RightSideItem elem={elem} />
          ))}
        </ul>
      )}
    </div>
  );
};
