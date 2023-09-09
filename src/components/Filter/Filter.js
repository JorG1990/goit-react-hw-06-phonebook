import { useDispatch } from "react-redux";
import { FromStyled } from "./Filter.styled";

export const Filter = () => {
  const dispatch =useDispatch();
  return (
    <FromStyled>
      <label>
        Find  contacts by name
        <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(filterContacts(e.target.value))}
        ></input>
      </label>
    </FromStyled>
  );
};
