import React, { useEffect, useState } from 'react';
import './PeopleCard.scss';
import axios from 'axios';

const PeopleCard = ({ data }) => {
  const [homeworld, setHomeworld] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        const res = await axios(data.homeworld);
        setHomeworld(res.data.name);
        setLoading(false);
      };
      fetchData();
    },
    [data.homeworld]
  );
  return !loading ? (
    <div className="fetchPeople__card">
      <span>{data.name}</span>
      <span className="fetchPeople__card--from">
        from {homeworld === 'unknown' ? 'nowhere' : homeworld}
      </span>
    </div>
  ) : null;
};

export default PeopleCard;
