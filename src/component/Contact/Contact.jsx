import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      {/* Розмітка даних контакту */}
      <div className={css.wrapper}>
        <div className={css.contactData}>
          <FaUser className={css.icon} />
          <p>{name}</p>
        </div>
        <div className={css.contactData}>
          <FaPhoneAlt className={css.icon} />
          <p>{number}</p>
        </div>
      </div>

      {/* Кнопка видалення контакту */}
      <button
        type="button"
        onClick={() => onDelete(id)}
        className={css.deleteBtn}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
