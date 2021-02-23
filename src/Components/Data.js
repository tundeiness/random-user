import React, { useEffect, useState } from 'react';
import LandingRight from 'LandingRight';

const Data = () => {
  const [allData, setAllData] = useState([]);

  console.log(allData);

  useEffect(() => {
    // const fetchData = async () => {
    //   const res = await fetch('https://randomuser.me/api/?results=5000');
    //   setAllData(res.data.results);
    // };
    // fetchData();

    fetch('https://randomuser.me/api/?results=5000')
      .then(res => res.json())
      .then(body => setAllData(body.results));
  }, []);
  return (
    <div>
      <LandingRight total={allData} />
    </div>
  );
};

export default Data;
