import PropTypes from 'prop-types';
import { BsXCircleFill } from 'react-icons/bs';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span>{name}: </span>
              <span>{number}</span>
              <button type="button" onClick={() => onDelete(id)}>
                <BsXCircleFill size="16" />
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};
