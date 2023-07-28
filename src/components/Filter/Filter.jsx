import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { LabelSearch, InputSearch } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <LabelSearch htmlFor={'id' + nanoid()}>
        Find contacts by name
        <InputSearch
          id={'id' + nanoid()}
          placeholder="Search"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </LabelSearch>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
