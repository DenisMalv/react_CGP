import css from './RightSideItem.module.css';

export const RightSideItem = ({ elem }) => {
  return (
    <li className={css.item} key={elem.id} title={elem.title}>
      {elem?.img && <img src={elem.img} alt="qwe" width={540} />}
      {elem?.title === 'headline' && (
        <h2 className={css.headline}>{elem.text}</h2>
      )}
      {elem?.title === 'paragraph' && (
        <p className={css.paragraph}>{elem.text}</p>
      )}
      {elem?.title === 'button' && (
        <button className={css.regButton}>{elem.text}</button>
      )}
    </li>
  );
};
