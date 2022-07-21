import css from './CenterSide.module.css';
import { CenterSideItem } from 'components/CenterSideItem/CenterSideItem';

import {
  getUserProductsInBasket,
  updateProductFromBasket,
  deleteProductFromBasket,
  upProduct,
  downProduct,
} from 'redux/orderBasketSlice/orderBasketSlice';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export const CenterSide = () => {
  const userProductsInBasket = useSelector(getUserProductsInBasket);
  const dispatch = useDispatch();

  const [isActiveElem, setIsActiveElem] = useState();
  const [isActiveInput, setIsActiveInput] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  console.log('isActive elem', isActiveElem);
  const onElemClick = e => {
    const allelem = e.currentTarget.childNodes;
    if (e.target.nodeName !== 'LI') {
      return;
    }
    allelem.forEach(elem => elem.classList.remove('active'));
    e.target.classList.add('active');
    setIsActiveElem(e.target);

    setIsActiveInput(null);
  };

  const handleDelete = elem => {
    dispatch(deleteProductFromBasket(elem));
  };
  const handleEdit = elem => {
    console.log(isActiveElem);
    setUpdatedText('');
    if (isActiveInput) {
      setIsActiveInput(null);
    } else {
      setIsActiveInput(elem);
    }
  };
  const handleUp = elem => {
    dispatch(upProduct(elem));
  };
  const handleDown = elem => {
    dispatch(downProduct(elem));
  };
  const handlesubmit = data => {
    console.log('submit');
    dispatch(updateProductFromBasket(data));
    setUpdatedText('');
    setIsActiveInput(null);
  };

  return (
    <div className={css.centerSideWrapper}>
      {userProductsInBasket && (
        <ul className={css.centerSideList} onClick={onElemClick}>
          {userProductsInBasket.map(elem => (
            <CenterSideItem
              elem={elem}
              isActiveElem={isActiveElem}
              setIsActiveElem={setIsActiveElem}
              key={elem.id}
            />
            // <li
            //   className={css.item}
            //   key={elem.id}
            //   title={elem.title}
            //   style={{ height: 50 }}
            // >
            //   {isActiveElem?.title === elem.title && (
            //     <>
            //       <p>{elem.title}</p>
            //       <button onClick={() => handleUp(elem)}>up</button>
            //       <button onClick={() => handleDown(elem)}>down</button>
            //       <button onClick={() => handleDelete(elem)}>delete</button>
            //       <button onClick={() => handleEdit(elem)}>edit</button>
            //       {isActiveInput?.title === elem.title && (
            //         <input
            //           type="text"
            //           onChange={e => setUpdatedText(e.currentTarget.value)}
            //           value={updatedText}
            //           title={elem.title}
            //           onKeyDown={e => {
            //             if (e.key === 'Enter') {
            //               handlesubmit({
            //                 type: elem.title,
            //                 id: elem.id,
            //                 text: updatedText,
            //               });
            //             }
            //           }}
            //           //
            //         />
            //       )}
            //     </>
            //   )}
            // </li>
          ))}
        </ul>
      )}
    </div>
  );
};
