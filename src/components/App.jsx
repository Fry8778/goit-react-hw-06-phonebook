import { useSelector } from 'react-redux';
import Form from './form/form';
import FormPhonebook from './formPhonebook/formPhonebook';
import Filter from './filter/filter';
// import dispatch from './form/form';
import styles from './form/form.module.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div className={styles.box}>
      <div className={styles.boxPhone}>
        <h1 className={styles.titlePhone}>Phonebook</h1>        
        <Form
          // contacts={contacts} dispatch={dispatch}
        />
      </div>
      <div className={styles.contacts}>
        <h2 className={styles.titleContact}>Contacts: {contacts.length}</h2>
        <h2 className={styles.titleFind}>Find contacts by name</h2>
        <Filter />
      </div>
      <div className={styles.contacts}>       
        <FormPhonebook />
      </div>
    </div>
  );
};