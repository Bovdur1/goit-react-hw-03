import PropTypes from 'prop-types';
import css from './SearchBox.module.css';

const SearchBox = ({ value, handleChange }) => {
  return (
    <>
      <p className={css.title}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        className={css.search}
      />
    </>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
