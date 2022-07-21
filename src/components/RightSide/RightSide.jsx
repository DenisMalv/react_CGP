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
              //   onClick={e => console.log(e.currentTarget.)}
              //   onClick={onElemClick}
              style={{ height: 50 }}
            >
              <p>{elem?.img}</p>
              <p>{elem?.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
