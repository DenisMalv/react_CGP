import css from './RightSide.module.css';

import { getUserProductsInBasket } from 'redux/orderBasketSlice/orderBasketSlice';
import { useSelector } from 'react-redux';

export const RightSide = () => {
  const userProductsInBasket = useSelector(getUserProductsInBasket);
  return (
    <div className={css.rightSideWrapper}>
      {userProductsInBasket && (
        <ul className={css.centerSideList}>
          {userProductsInBasket.map(elem => (
            <li
              className={css.item}
              key={elem.id}
              title={elem.title}
              style={{ minHeight: 50 }}
            >
              {elem?.img && <img src={elem.img} alt="qwe" />}
              {elem?.text && <p>{elem.text}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
