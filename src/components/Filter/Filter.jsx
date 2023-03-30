import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { FilterTitle, FilterInput } from './Filter.module';
import { getContactsFilter } from 'redux/selectors';
import { setFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <FilterTitle>
      Find contacts by name
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Contact name"
      />
    </FilterTitle>
  );
};

Filter.protoType = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
