import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown';
// import options from '../helper/options';

const CountryFilter = props => {
  const { handleFilterChange } = props;
  return (
    // <div>
    //   <select onChange={handleFilterChange} className="custom-select ml-3">
    //     <option value="All_Books">All Books</option>
    //     {options}
    //   </select>
    // </div>
    <div className="country">
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Country
        </Dropdown.Toggle>
        {' '}
        {' '}
        <Dropdown.Menu className="menu">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something</Dropdown.Item>
          {/* <Country filteredCountries={filteredCountries} /> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

CountryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CountryFilter;
