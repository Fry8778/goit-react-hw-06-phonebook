import { useDispatch, useSelector } from 'react-redux';
import { handlechangeFilter } from '../../redux/filter/filterActions';

const Filter = () => {
  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <>      
      <input
        type="text"
        placeholder="Enter name"
        name="filter"
        value={value}
        onChange={e => dispatch(handlechangeFilter(e.target.value))}   
      />
    </>
  );
};

export default Filter;