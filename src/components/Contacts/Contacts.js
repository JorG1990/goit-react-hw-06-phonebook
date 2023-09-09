import { useDispatch, useSelector } from "react-redux";
import { Table } from "./Contacts.styled";

export const Contacts = () => {
    const dispatch = useDispatch();
    const contactsList = useSelector(getContactList);
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
                        <tr ket={ id }>
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
