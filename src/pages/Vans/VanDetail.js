import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VanDetail = () => {
  const [van, setVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function getVan() {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();
      setVan(data.vans);
    }

    getVan();
  }, []);

  console.log(van);

  return (
    <div>
      {van ? (
        <div>
          <img src={van.imageUrl} alt={van.name} width='100px' />
          <br />
          <i>{van.type}</i>
          <h2>{van.name}</h2>
          <p>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
