import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from 'redux/items/itemsActions';
import styles from '../form/form.module.css';

const FormPhonebook  = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const contactsAfterFilter = useMemo(
    () => contacts.filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase())),
    [filter, contacts]
  );
  const dispatch = useDispatch();

  return (
    <ul className={styles.contact}>
      {contactsAfterFilter.map(el => (
          <li key={el.id} className={styles.item}>
            <p className={styles.conParagraph}>
              {el.name}: <span>{el.number}</span>
            </p>
            <button
              className={styles.btn}
              type="button"
              onClick={() => dispatch(removeItem(el.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default FormPhonebook;
