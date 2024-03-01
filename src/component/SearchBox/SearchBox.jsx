import PropTypes from 'prop-types';
import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, title, handleChange }) => {
  const searchFieldId = useId();

  return (
    <>
      <label htmlFor={searchFieldId} className={css.label}>
        {title}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        id={searchFieldId}
        className={css.search}
      />
    </>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchBox;
