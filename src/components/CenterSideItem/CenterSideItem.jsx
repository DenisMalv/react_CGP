import css from './CenterSideItem.module.css';

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
}) => {
  const dispatch = useDispatch();

  const [isActiveInput, setIsActiveInput] = useState(null);
  const [updatedText, setUpdatedText] = useState('');

  const handleDelete = elem => {
    dispatch(deleteProductFromBasket(elem));
    setIsActiveElem(null);
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
  console.log(elem.icon);
  return (
    <li
      onClick={onClick}
      className={css.item}
      key={elem.id}
      title={elem.title}
      style={{ minHeight: 50 }}
    >
      <img src={elem.icon} alt="qwe" width={25} />
      <p>{elem.title}</p>
      {isActiveElem?.title === elem.title && (
        <div className={css.elementEditor}>
          <button onClick={() => handleUp(elem)}>up</button>
          <button onClick={() => handleDown(elem)}>down</button>
          <button onClick={() => handleDelete(elem)}>delete</button>
          <button onClick={() => handleEdit(elem)}>edit</button>
        </div>
      )}
      {isActiveInput?.title === elem.title && (
        <input
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
      )}
    </li>
  );
};
