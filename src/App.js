import React, { useState, useEffect } from 'react';
import './App.scss';
import fetchPeople from './utils/fetchPeople';

import { Header, AppWrapper } from './components';

const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(null);
  useEffect(
    () => {
      fetchPeople(name).then(data => setPeople(data));
    },
    [name]
  );
  return (
    <AppWrapper>
      <Header />
      <input
        type="text"
        placeholder="May the hooks be with you..."
        onChange={evt => setName(evt.target.value)}
        value={name}
      />
      {people &&
        people.results.map((result, index) => (
          <div key={index}>{result.name}</div>
        ))}
    </AppWrapper>
  );
};

export default App;
