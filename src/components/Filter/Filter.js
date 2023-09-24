import { useDispatch } from "react-redux/es/exports";
import { FormStyled } from "./Form.styled";
import { filterContacts } from "redux/contactsSlice";

export const Filter = () => {
  const dispatch =useDispatch();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    dispatch(filterContacts(inputValue));
  };

  return (
    <FormStyled>
      <label>
        Find  contacts by name
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, charles de Batz de Castelmore d'Artagnan"
        onChange={handleInputChange}
        ></input>
      </label>
    </FormStyled>
  );
};
