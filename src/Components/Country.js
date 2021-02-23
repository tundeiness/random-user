/* eslint-disable react/prop-types */
const CountryList = ({ filteredCountries }) => (
  <>
    {filteredCountries.map(country => (
    //   <Country key={country.name} id={country.name} country={country} />
      <div key={country.name} id={country.name}>
        {country}
      </div>
    ))}
  </>
);

export default CountryList;
