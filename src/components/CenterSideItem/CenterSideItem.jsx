import css from './CenterSideItem.module.css';
import { deleteSvg, editSvg, arrowSvg } from 'utils/icons';

import {
  updateProductFromBasket,
  deleteProductFromBasket,
  upProduct,
  downProduct,
} from 'redux/orderBasketSlice/orderBasketSlice';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const CenterSideItem = ({
  elem,
  isActiveElem,
  setIsActiveElem,
  onClick,
  isActiveInputUpper,
  setIsActiveInputUpper,
}) => {
  const dispatch = useDispatch();

  const [updatedText, setUpdatedText] = useState('');

  const handleDelete = elem => {
    dispatch(deleteProductFromBasket(elem));
    setIsActiveElem(null);
  };
  const handleEdit = elem => {
    console.log(isActiveElem);
    setUpdatedText('');
    if (isActiveInputUpper) {
      setIsActiveInputUpper(null);
    } else {
      setIsActiveInputUpper(elem);
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

    setIsActiveInputUpper(null);
  };
  return (
    <li
      onClick={onClick}
      className={css.item}
      key={elem.id}
      title={elem.title}
      style={{ minHeight: 50 }}
    >
      <img src={elem.icon} alt="icon" width={25} />
      <p>{elem.title}</p>
      {isActiveElem?.title === elem.title && (
        <div className={css.elementEditor}>
          <div className={css.upDownWrapper}>
            <button className={css.btnDown} onClick={() => handleDown(elem)}>
              {arrowSvg}
            </button>
            <button className={css.btnUp} onClick={() => handleUp(elem)}>
              {arrowSvg}
            </button>
          </div>
          <div className={css.editDeleteWrapper}>
            <button className={css.btnEdit} onClick={() => handleEdit(elem)}>
              {editSvg}
            </button>
            <button
              className={css.btnDelete}
              onClick={() => handleDelete(elem)}
            >
              {deleteSvg}
            </button>
          </div>
        </div>
      )}
      {isActiveInputUpper?.title === elem.title && (
        <label className={css.inputLabel}>
          <input
            className={css.input}
            type="text"
            onChange={e => setUpdatedText(e.currentTarget.value)}
            value={updatedText}
            title={elem.title}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handlesubmit({
                  type: elem.title,
                  id: elem.id,
                  text: updatedText,
                });
              }
            }}
            //
          />
        </label>
      )}
    </li>
  );
};
