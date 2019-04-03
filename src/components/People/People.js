import React from 'react';
import './People.scss';
import { PeopleCard } from '../PeopleCard';

const People = ({ data }) => {
  return (
    <div className="fetchPeople__list">
      {data.map((result, index) => (
        <PeopleCard key={index} data={result} />
      ))}
    </div>
  );
};

export default People;
