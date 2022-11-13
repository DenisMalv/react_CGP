import css from './CenterSide.module.css';
import { CenterSideItem } from 'components/CenterSideItem/CenterSideItem';

import { getUserProductsInBasket } from 'redux/orderBasketSlice/orderBasketSlice';

import { useSelector } from 'react-redux';
import { useState } from 'react';

export const CenterSide = () => {
  const userProductsInBasket = useSelector(getUserProductsInBasket);

  const [isActiveElem, setIsActiveElem] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isActiveInput, setIsActiveInput] = useState(null);

  const onThroughClick = e => {
    if (e.target.nodeName === 'UL') {
      e.target.childNodes.forEach(elem => elem.classList.remove('active'));
      setIsActiveElem(null);
      setIsActiveInput(null);
    }
    if (e.target.nodeName === 'DIV') {
      e.target.children[0].childNodes.forEach(elem =>
        elem.classList.remove('active')
      );
      setIsActiveElem(null);
      setIsActiveInput(null);
    }
  };
  const onElemClick = e => {
    const allelem = e.currentTarget.parentNode.childNodes;

    if (e.target.nodeName === 'BUTTON') {
      return;
    }

    allelem.forEach(elem =>{
		elem.classList.remove('active');
		// setIsActiveElem(elem)
	});
    e.currentTarget.classList.add('active');
    setIsActiveElem(e.currentTarget.id);

    if (e.currentTarget.id !== isActiveElem) setIsActiveInput(null);
  };

  return (
    <div
      className={css.centerSideWrapper}
      onDragOver={e => {
        e.preventDefault();
      }}
      onClick={onThroughClick}
    >
      {userProductsInBasket && (
        <ul className={css.centerSideList}>
          {userProductsInBasket.map(elem => (
            <CenterSideItem
              elem={elem}
              onClick={onElemClick}
              isActiveElem={isActiveElem}
              setIsActiveElem={setIsActiveElem}
              isActiveInputUpper={isActiveInput}
              setIsActiveInputUpper={setIsActiveInput}
              key={elem.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
