import PropTypes from 'prop-types';
import { FaUserAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { List, Item, BtnDelete } from './Contact.module';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getContactsFilter } from 'redux/selectors';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const statusfilter = useSelector(getContactsFilter);

  const normalizedFilter = statusfilter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(contacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <div>
              <FaUserAlt />
              <span>{name}:</span>
              <span>{number}</span>
            </div>
            <BtnDelete
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </BtnDelete>
          </Item>
        );
      })}
    </List>
  );
};

ContactItem.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      numder: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
