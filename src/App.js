import React, { useState, useEffect } from 'react';
import './App.scss';
import fetchPeople from './utils/fetchPeople';
import { Header, Input, People, AppWrapper } from './components';

const App = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(null);
  const hasData = name && people;
  useEffect(
    () => {
      fetchPeople(name).then(data => setPeople(data));
    },
    [name]
  );
  return (
    <AppWrapper>
      <Header />
      <Input
        type="text"
        placeholder="May the hooks be with you..."
        onChange={evt => setName(evt.target.value)}
        value={name}
      />
      {hasData && <People data={people.results} />}
    </AppWrapper>
  );
};

export default App;
