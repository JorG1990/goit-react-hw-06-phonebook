import { nanoid } from "@reduxjs/toolkit";
import { FromStyled } from "components/Filter/Filter.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Report } from "notiflix";

export const Form = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContactsList);
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
        case 'number':
          return setNumber(value);
          default:
            return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateContacts({ name, number });
      resetForm();
  };

  const updateContacts = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const contactExists = contactsList.find(contact => {
      return contact.name === name || contact.number === number;
    });

    contactExists
    ? Report.info(
      '',
      `Contact with name ${name} and number ${number} already exists`,
          'Okay'
    )
    :dispatch(addContact(contact));
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <FromStyled onSubmit={handleSubmit}>
        <label>
          Name
          <input
          className="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={ name }
          onChange={ handleChange }
          />
        </label>
      </FromStyled>
    </div>
  );
};
