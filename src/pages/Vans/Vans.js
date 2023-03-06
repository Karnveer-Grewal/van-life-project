import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../server';

const VansList = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('/api/vans');
      const data = await response.json();

      setVans(data.vans);
    }
    getData();
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt={van.name} width='100px' />
        <div>
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1>Explore our van options</h1>
      {vanElements}
    </div>
  );
};

export default VansList;
