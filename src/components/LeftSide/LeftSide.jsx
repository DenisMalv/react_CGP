import css from './LeftSide.module.css';
// import db from 'db/db.json';

import { useDispatch, useSelector } from 'react-redux';
import { addProductInBasket } from 'redux/orderBasketSlice/orderBasketSlice';

export const LeftSide = () => {
  const dispatch = useDispatch();
  const dataElements = useSelector(state => state.AllElements.ElementsList);
  console.log('dataElements', dataElements);

  return (
    <div className={css.leftSideWrapper}>
      {dataElements.length > 0 && (
        <ul className={css.leftSideList}>
          {dataElements.map(elem => (
            <li
              key={elem.id}
              className={css.item}
              onClick={() => dispatch(addProductInBasket(elem))}
            >
              {elem.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
