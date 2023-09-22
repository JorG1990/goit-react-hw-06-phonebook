import { useDispatch } from "react-redux/es/exports";
import { FormStyled } from "./Form.styled";
import { filterContacts } from "Redux/FilterSlice";

export const Filter = () => {
  const dispatch =useDispatch();
  return (
    <FormStyled>
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
    </FormStyled>
  );
};
