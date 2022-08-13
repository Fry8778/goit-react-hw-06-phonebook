import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/items/itemsActions';
import styles from './form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const input = e.target;
    input.name === 'name' && setName(input.value);
    input.name === 'number' && setNumber(input.value);
  };

  const handleSubmitRen = e => {
    e.preventDefault();
    const id = nanoid();
    const check = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (!check) {
      dispatch(addItem({ id, name, number }));
      setName('');
      setNumber('');
    } else {
      alert(`'Error' ${name} is already in contacts`);
    }
  };
  
  return (
    <form onSubmit={handleSubmitRen} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          value={number}
          onChange={handleChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default Form;
