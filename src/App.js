import React, { useState } from 'react';
import './App.scss';

import { Header, AppWrapper } from './components';

const App = () => {
  const [name, setName] = useState('');
  return (
    <AppWrapper>
      <Header />
      <input
        type="text"
        placeholder="May the hooks be with you..."
        onChange={evt => setName(evt.target.value)}
        value={name}
      />
    </AppWrapper>
  );
};

export default App;
