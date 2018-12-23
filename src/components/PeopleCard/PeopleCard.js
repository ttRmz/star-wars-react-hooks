import React, { useEffect, useState } from 'react';
import './PeopleCard.scss';
import fetchHomeworld from '../../utils/fetchHomeworld';

// TODO: add debounce

const PeopleCard = ({ data }) => {
  const [homeworld, setHomeworld] = useState('');
  useEffect(
    () => {
      fetchHomeworld(data.homeworld).then(data => setHomeworld(data.name));
    },
    [data.homeworld]
  );
  const hasHomeworld = homeworld && homeworld !== 'unknown';
  return (
    <div className="fetchPeople__card">
      <span>{data.name}</span>
      {hasHomeworld && (
        <span className="fetchPeople__card--from"> from {homeworld}</span>
      )}
    </div>
  );
};

export default PeopleCard;
