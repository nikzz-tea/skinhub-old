import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';

import './scss/app.scss';

export type ItemType = {
  id: number;
  name: string;
  imageURL: string;
  downloadURL: string;
};

function App() {
  const [items, setItems] = useState<ItemType[]>();
  const fetchItems = async () => {
    const { data } = await axios.get(
      'https://6354195ee64783fa827f4417.mockapi.io/skins?sortBy=name',
    );
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">{items && items.map((obj) => <Card key={obj.id} {...obj} />)}</div>
    </div>
  );
}

export default App;
