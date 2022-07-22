import css from './LeftSide.module.css';
// import db from 'db/db.json';

import { useDispatch, useSelector } from 'react-redux';
import { addProductInBasket } from 'redux/orderBasketSlice/orderBasketSlice';

export const LeftSide = () => {
  const dispatch = useDispatch();
  const dataElements = useSelector(state => state.AllElements.ElementsList);

  return (
    <div className={css.leftSideWrapper}>
      {dataElements.length > 0 && (
        <ul className={css.leftSideList}>
          {dataElements.map(elem => (
            <li
              key={elem.id}
              className={css.item}
              onClick={() => dispatch(addProductInBasket(elem))}
              onDragEnd={e => {
                if (e.clientX > 270 && e.clientX < 808) {
                  dispatch(addProductInBasket(elem));
                }
              }}
              draggable={true}
            >
              <img src={elem.icon} alt="qwe" width={25} />
              <p>{elem.title}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
