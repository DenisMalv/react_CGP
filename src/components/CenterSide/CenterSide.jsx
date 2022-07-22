import css from './CenterSide.module.css';
import { CenterSideItem } from 'components/CenterSideItem/CenterSideItem';

import { getUserProductsInBasket } from 'redux/orderBasketSlice/orderBasketSlice';

import { useSelector } from 'react-redux';
import { useState } from 'react';

export const CenterSide = () => {
  const userProductsInBasket = useSelector(getUserProductsInBasket);

  const [isActiveElem, setIsActiveElem] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [_, setIsActiveInput] = useState(null);

  const onElemClick = e => {
    const allelem = e.currentTarget.parentNode.childNodes;
    if (e.target.nodeName === 'BUTTON') {
      return;
    }

    allelem.forEach(elem => elem.classList.remove('active'));
    e.currentTarget.classList.add('active');
    setIsActiveElem(e.currentTarget);
    if (e.currentTarget !== isActiveElem) setIsActiveInput(null);
  };

  return (
    <div
      className={css.centerSideWrapper}
      onDragOver={e => {
        e.preventDefault();
      }}
    >
      {userProductsInBasket && (
        <ul className={css.centerSideList}>
          {userProductsInBasket.map(elem => (
            <CenterSideItem
              elem={elem}
              onClick={onElemClick}
              isActiveElem={isActiveElem}
              setIsActiveElem={setIsActiveElem}
              key={elem.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
