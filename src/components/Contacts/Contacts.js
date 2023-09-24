import { useDispatch, useSelector } from "react-redux/es/exports";
import { Table } from "./Contacts.styled";
import { deleteContact } from "Redux/contactsSlice";
import { getContactsList, getFilter } from "Redux/Selectorsors";

export const Contacts = () => {
    const dispatch = useDispatch();
    const contactsList = useSelector(getContactsList);
    const filterQuery = useSelector(getFilter);
    const normalizedFilter = filterQuery.toLowerCase();
    const filteredContacts = contactsList.filter(Contact => Contact.name.toLowerCase().includes(normalizedFilter));
    const deleteContacts = id => {
        dispatch(deleteContact(id));
    };

    return (
        <Table>
            <tbody>
                {filteredContacts.map(({ id, name, number}) => {
                    return (
                      <tr key={ id }>
                          <td>{ name }</td>
                          <td>{ number }</td>
                          <td>
                            <button onClick={() => deleteContacts(id)}>Delete</button>
                          </td>
                      </tr>
                    )
                })}
            </tbody>
        </Table>
    );
};
